import { View, Text } from 'react-native'
import React from 'react'
import { io } from 'socket.io-client';
import axios from 'axios';
import link from '../link';

 function Chat() {
  const route = useRoute();
  const { chatRoom, currentid, foreignid } = route.params;
  const [msg, setMsg] = useState('');
  const [oldMsgs, setOldMsgs] = useState(chatRoom[1]);
  const [checkSocket, setCheckSocket] = useState(false);
  const [messageReceived, setMessageReceived] = useState('');
  const [foreign, setForeign] = useState();


  const socket = io('http://192.168.227.176:8001');

  const scrollViewRef = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  useScrollToTop(scrollViewRef);
  function ChatHeader({ username, pic }) {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: pic }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{username}</Text>
      </View>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${link}/user/${foreignid}`);
        setForeign(response.data);
        navigation.setOptions({
          headerTitle: () => <ChatHeader username={response.data.username} pic={response.data.profilepic} />,
          headerStyle: styles.headerStyle,
        });
      } catch (error) {
        console.log(error);
      }
      console.log(foreign);
    };

    fetchData();
  }, []);

  useEffect(() => {
    socket.emit('startConversation', chatRoom[0][0].id);
    socket.on('connection', () => setCheckSocket(true));
  }, []);

  useEffect(() => {
    socket.on('receive', (data) => {
      setMessageReceived(data.msg);
      if (data.currentid !== currentid) {
        setOldMsgs((prevMsgs) => [
          ...prevMsgs,
          {
            sender: foreignid,
            content: data.msg,
            chat: chatRoom[0][0].id,
          },
        ]);
      }
    });
    console.log(messageReceived);
  }, [socket]);

  const newMsg = {
    sender: currentid,
    content: msg,
    chat: chatRoom[0][0].id,
  };

  const sendMsg = () => {
    setOldMsgs((prevMsgs) => [...prevMsgs, newMsg]);

    axios
      .post(`${link}/api/messages/msg`, newMsg)
      .then((res) => {
        const chatroom = chatRoom[0][0].id;
        socket.emit('message sent', { msg, chatroom, currentid });
        setMsg('');
      })
      .catch((err) => console.log(err));

    axios
      .post(`${link}/conversation/latest`, { id: chatRoom[0][0].id, msg: msg })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Scroll to the bottom when oldMsgs change
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [oldMsgs]);

  useEffect(() => {
    // Animate chat bubbles when they are added or removed
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [oldMsgs]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < -50) {
          // Swiped left
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      },
    })
  ).current;


  return (
    <View style={styles.container}>
      <ScrollView
      
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContainer}
        {...panResponder.panHandlers} // Attach panResponder handlers to ScrollView
      >
        {oldMsgs.map((e, i) => {
          const chatBubbleStyle = [
            styles.chat,
            { opacity: fadeAnim },
            i === oldMsgs.length - 1 && { marginBottom: 20 }, // Add extra margin to the last bubble
            e.sender === currentid ? styles.textRight : styles.textLeft, // Align the bubbles based on sender
          ];

          return (
            <Animated.View key={i} style={chatBubbleStyle}>
              <Text style={styles.text}>{e.content}</Text>
            </Animated.View>
          );
        })}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={msg}
          onSubmitEditing={sendMsg}
          autoCorrect={true}
          onChangeText={(message) => setMsg(message)}
          placeholder="Type..."
          keyboardType="email-address"
          style={styles.textInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EDE4',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#F0EDE4',
  },
  chatContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chat: {
    backgroundColor: '#F0EDE4',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0EDE4',
    borderRadius: 20,
  },
  textLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#d6c898',
  },
  textRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#a47e53',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Chat;