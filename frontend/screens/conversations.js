// import React, { useEffect, useState } from "react";
// import { StyleSheet, View, TouchableOpacity, Image, FlatList, ImageBackground, Dimensions } from "react-native";
// import { Text, IconButton, Icon, NativeBaseProvider, Box, Avatar, HStack, VStack } from "native-base";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { SwipeListView } from "react-native-swipe-list-view";
// import axios from "axios";
// import Spinner from "react-native-loading-spinner-overlay";

// import { useRoute, useNavigation } from "@react-navigation/native";
// import link from "../link";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// function Conversations({ route }) {
//   const navigation = useNavigation();
//   const { user } = route.params;
//   const currentUserId = user.id;
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [conversations, setConversations] = useState([]);
//   // const backgroundImage =require('../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg')
//   const getUsers = () => {
//     axios
//       .get(`${link}/userss`)
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const startConversation = (user1id, user2id) => {
//     setLoading(true);
//     axios
//       .post(`${link}/conversation/start`, { user2: user1id, user1: user2id })
//       .then((res) => {
//         setLoading(false);
//         navigation.navigate("Chat", { chatRoom: res.data, currentid: user.id, foreignid: user2id });
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.log(err);
//       });
//   };

//   const getConversations = () => {
//     axios
//       .get(`${link}/conversation/getAll/${user.id}`)
//       .then((res) => {
//         const filteredConversations = res.data.map((conversation) => {
//           const filteredUsers = conversation.users.filter((user) => user.id !== currentUserId);
//           return {
//             id: conversation.id,
//             users: filteredUsers,
//             latestmessage: conversation.latestmessage,
//           };
//         });
//         setConversations(filteredConversations);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getConversations();
//     getUsers();
//   }, []);

//   const closeRow = (rowMap, rowKey) => {
//     if (rowMap[rowKey]) {
//       rowMap[rowKey].closeRow();
//     }
//   };

//   const onRowDidOpen = (rowKey) => {
//     console.log("This row opened", rowKey);
//   };

//   const renderItem = ({ item }) => (
//     <Box p={4} borderBottomWidth={1} borderBottomColor="#7492e2">
//       <HStack alignItems="center">
//         <Avatar source={{ uri: item.users[0].profilepic }} size="sm" mr={3} />
//         <VStack flex={1}>
//           <Text fontWeight="bold" fontSize={16} color="white">
//             {item.users[0].username}
//           </Text>
//           <Text color="darkgray" numberOfLines={1}>
//             {item.latestmessage}
//           </Text>
//         </VStack>
//         <IconButton
//           icon={<Icon as={MaterialCommunityIcons} name="message-outline" size={18} color="#7492e2" />}
//           onPress={() => startConversation(currentUserId, item.users[0].id)}
//         />
//       </HStack>
//     </Box>
//   );

//   const renderUserItem = ({ item }) => (
//     <TouchableOpacity style={styles.userContainer} onPress={() => startConversation(user.id, item.id)}>
//       <Image source={{ uri: item.profilepic }} fadeDuration={0} style={styles.pic} />
//       <Text style={styles.username}>{item.username}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <NativeBaseProvider>
//       <View style={styles.container}>
     
//           <FlatList
//             data={users}
//             keyExtractor={(item) => item.id.toString()}
//             horizontal
//             renderItem={renderUserItem}
//             contentContainerStyle={styles.userList}
//           />
//           <Spinner visible={loading} textContent={"Loading..."} textStyle={styles.spinnerText} />
//           <SwipeListView
//             data={conversations}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderItem}
//             rightOpenValue={-75}
//             disableRightSwipe={true}
//             previewRowKey={"0"}
//             previewOpenValue={-40}
//             previewOpenDelay={300}
//             onRowDidOpen={onRowDidOpen}
//             style={styles.conversationsList}
//           />
   
//       </View>
//     </NativeBaseProvider>
//   );
// }

// export default Conversations;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor : 'black'
 
//   },
 
//   spinnerText: {
//     color: "white",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 200,
//   },
//   userList: {
//     paddingHorizontal: 5,
//     paddingVertical: -50,
//     marginVertical: 50,
//     padding: 60,
//     margin: 10,
//     borderRadius: 10,
//     paddingBottom: 50,
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//   },
//   userContainer: {
//     alignItems: "center",
//     marginVertical: 50,
//     marginHorizontal: 10,
    
//   },
//   pic: {
//     width: 70,
//     height: 70,
//     borderRadius: 20,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: '#7492e2',
//   },
//   username: {
//     fontSize: 16,
//     color : 'white',
//   },
//   conversationsList: {
//     flex: 1, 
//     marginVertical: -200 , 
//     paddingBottom: 10, 
//     borderBottomWidth: 5, 
//     borderBottomColor: 'black', 
//     padding: 15, 
//     margin: 10, 
//     borderRadius: 10,
//     position: 'relative', 
//     top: -260, 
//     backgroundColor: '#191919',
//   },
//   image: {
//     flex: 1,
//     width: windowWidth,
//     height: windowHeight,
//   },
//   images: {
//     flex: 1,
//     width: windowWidth,
//     height: "100%",
//   },
// });
import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, FlatList, ImageBackground, Dimensions } from "react-native";
import { Text, IconButton, Icon, NativeBaseProvider, Box, Avatar, HStack, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";

import { useRoute, useNavigation } from "@react-navigation/native";
import link from "../link";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Conversations({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;
  const currentUserId = user.id;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const backgroundImage =require('../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg')
  const getUsers = () => {
    axios
      .get(`${link}/userss`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  };

  const startConversation = (user1id, user2id) => {
    setLoading(true);
    axios
      .post(`${link}/conversation/start`, { user2: user1id, user1: user2id })
      .then((res) => {
        setLoading(false);
        navigation.navigate("Chat", { chatRoom: res.data, currentid: user.id, foreignid: user2id });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getConversations = () => {
    axios
      .get(`${link}/conversation/getAll/${user.id}`)
      .then((res) => {
        const filteredConversations = res.data.map((conversation) => {
          const filteredUsers = conversation.users.filter((user) => user.id !== currentUserId);
          return {
            id: conversation.id,
            users: filteredUsers,
            latestmessage: conversation.latestmessage,
          };
        });
        setConversations(filteredConversations);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getConversations();
    getUsers();
  }, []);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item }) => (
    <Box p={4} borderBottomWidth={1} borderBottomColor="#FFFFFF">
      <HStack alignItems="center">
        <Avatar source={{ uri: item.users[0].profilepic }} size="sm" mr={3} />
        <VStack flex={1}>
          <Text fontWeight="bold" fontSize={16} color="white">
            {item.users[0].username}
          </Text>
          <Text color="darkgray" numberOfLines={1}>
            {item.latestmessage}
          </Text>
        </VStack>
        <IconButton
          icon={<Icon as={MaterialCommunityIcons} name="message-outline" size={18} color="white" />}
          onPress={() => startConversation(currentUserId, item.users[0].id)}
        />
      </HStack>
    </Box>
  );

  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userContainer} onPress={() => startConversation(user.id, item.id)}>
      <Image source={{ uri: item.profilepic }} fadeDuration={0} style={styles.pic} />
      <Text style={styles.username}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={renderUserItem}
            contentContainerStyle={styles.userList}
          />
          <Spinner visible={loading} textContent={"Loading..."} textStyle={styles.spinnerText} />
          <SwipeListView
            data={conversations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            rightOpenValue={-75}
            disableRightSwipe={true}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
            style={styles.conversationsList}
          />
      
      </View>
    </NativeBaseProvider>
  );
}

export default Conversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
       backgroundColor : 'black'
  
  },
  spinnerText: {
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userList: {
    paddingHorizontal: 5,
    paddingVertical: -50,
    marginVertical: 50,
     padding: 60,
     margin: 10,
     borderRadius: 10,
     paddingBottom: 50,
     borderBottomWidth: 1,
     borderBottomColor: 'white',
     color :  "white"
  },
  userContainer: {
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 10,
    // color :  "white"
  },
  pic: {
    width: 70,
    height: 70,
    borderRadius: 30,
    borderWidth: 2,
     borderColor: '#7492e2',
     color :  "white"
  },
  username: {
    fontSize: 16,
    color :  "white"
   },
  conversationsList: {
    flex: 1, 
        marginVertical: -200 , 
        paddingBottom: 10, 
        borderBottomWidth: 5, 
        borderBottomColor: 'black', 
        padding: 15, 
        margin: 10, 
        borderRadius: 10,
        position: 'relative', 
        top: -260, 
        backgroundColor: '#191919',
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  images: {
    flex: 1,
    width: windowWidth,
    height: "100%",
  },
});

