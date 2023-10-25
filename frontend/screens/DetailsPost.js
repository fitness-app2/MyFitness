import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Modal,
   Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import link from "../link";
import { auth } from "../fireBase";


export default function DetailsPost({ data, index, currentUserData }) {
  console.log(currentUserData,"currentUserData")
  const navigation = useNavigation();
  const [likes, setLikes] = useState(data.likes);
  // const [currentUserData, setCurrentUserData] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(data.comments);
  const [likedBy, setLikedBy] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [foreign, setForeign]=useState({})
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
   const { userid } = data;
const currentUser=auth.currentUser.uid
console.log(currentUser);
   useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log(userid);
        const res = await axios.get(`${link}/user/${userid}`) 
        // console.log(res.data, "user data");
        setProfilePic(res.data.profilepic);
        setUsername(res.data.username);
        setForeign(res.data)
      } catch(err) {
        console.log(err,"error")
      }
    }
    fetchUser();
  }, [userid]); 

  const handleLike = async () => {
    try {
     
      if (isLiked) {
        await axios.delete(`${link}/post/${data.id}/likes`, { data: { user: auth.currentUser.uid } });
        setIsLiked(false);
        setLikes(likes => likes - 1);
        setLikedBy(likedBy => likedBy.filter(user => user.id !== auth.currentUser.uid));
      } else {
        await axios.post(`${link}/post/${data.id}/likes`, { user: auth.currentUser.uid });
        setIsLiked(true);
        setLikes(likes => likes + 1);
  
        // fetch the new likes data after the user likes the post
        const response = await axios.get(`${link}/post/${data.id}/likes`);
        const likesData = response.data;
        
        const uniqueUsernames = Array.from(new Set(likesData.map(like => like.user.username)));
        const uniqueUsers = uniqueUsernames.map(username => {
          return likesData.find(like => like.user.username === username).user;
        });
  
        setLikedBy(uniqueUsers);
      }
    } catch (error) {
      console.error(error,"err");
    }
  };

  const fetchLikes = async () => {
    try {
      const response = await axios.get(`${link}/post/${data.id}/likes`);
      const likesData = response.data;
      const liked = likesData.some(like => like.user.id === auth.currentUser.uid);
      setIsLiked(liked);
      setLikes(likesData.length);
  
      // use a Set to store usernames, which automatically removes duplicates
      const uniqueUsernames = Array.from(new Set(likesData.map(like => like.user.username)));
      
      // reconstruct the user objects with unique usernames
      const uniqueUsers = uniqueUsernames.map(username => {
        return likesData.find(like => like.user.username === username).user;
      });
  
      setLikedBy(uniqueUsers);
    } catch (error) {
      console.error(error,"err");
    }
  };
  // const getCurrentUser=()=>{

  //   axios.get(`${link}/user/${currentUser}`)
  // .then(res=>{
  //   console.log(res.data)
  //   setCurrentUserData(res.data)})
  // .catch(err=>console.log(err,"err"))
  // }
  useEffect(() => {
    fetchLikes();
    // getCurrentUser()
    
  }, []);

  const handleComment = () => {
    navigation.navigate("Comments", { postId: data.id, user: data.userid });
  };

  const handleOpenLikesModal = () => {
    setModalVisible(true);
  };
 console.log()
  return (
  
    <View style={styles.container}>
     
     {
  !currentUserData.premium && data.premiem ? (
    <ImageBackground
      source={{ uri: data.pic[0] }}
      style={styles.image}
      resizeMode="cover"
      blurRadius={30}
      borderColor={'#d4af37'}
    >
      <View style={styles.postHeader}>
        <Image
          source={{ uri: profilePic }}
          style={styles.profileImage}
          onPress={() => navigation.navigate("OneProfile", { data, foreign })}
        />
        <View style={styles.user}>
          <Text
            style={styles.name}
            onPress={() => navigation.navigate("OneProfile", { data, foreign })}
          >
            {username}
          </Text>
          <Text style={styles.date}>{data.date_time}</Text>
        </View>
        <Icon size={30} color="#fff" />
      </View>
      <View style={styles.imageTextContainer}>
        <Text style={styles.imageText}>Premium</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
    </ImageBackground>
  ) : currentUserData.premium && data.premiem ? (
    <Pressable
      key={index}
      style={styles.post}
      onPress={() => navigation.navigate("OnePost", { data })}
    >
      <ImageBackground
        source={{ uri: data.pic[0] }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.postHeader}>
          <Image
            source={{ uri: profilePic }}
            style={styles.profileImage}
            onPress={() => navigation.navigate("OneProfile", { data, foreign })}
          />
          <View style={styles.user}>
            <Text
              style={styles.name}
              onPress={() => navigation.navigate("OneProfile", { data, foreign })}
            >
              {username}
            </Text>
            <Text style={styles.date}>{data.date_time}</Text>
          </View>
          <Icon size={30} color="#fff" />
        </View>
        <View style={styles.postFooter}>
          <Text style={styles.desc}>{data.description}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  ) : !data.premiem ? (
    <Pressable
      key={index}
      style={styles.post}
      onPress={() => navigation.navigate("OnePost", { data })}
    >
      <ImageBackground
        source={{ uri: data.pic[0] }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.postHeader}>
          <Image
            source={{ uri: profilePic }}
            style={styles.profileImage}
            onPress={() => navigation.navigate("OneProfile", { data, foreign })}
          />
          <View style={styles.user}>
            <Text
              style={styles.name}
              onPress={() => navigation.navigate("OneProfile", { data, foreign })}
            >
              {username}
            </Text>
            <Text style={styles.date}>{data.date_time}</Text>
          </View>
          <Icon size={30} color="#fff" />
        </View>
        <View style={styles.postFooter}>
          <Text style={styles.desc}>{data.description}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  ) : null
}

        <View style={styles.likecom}>
          <TouchableOpacity style={styles.like} onPress={handleLike}>
            <Icon
              name={isLiked ? "heart" : "heart-outline"}
              size={30}
              color={isLiked ? "#A47E53" : "#A47E53"}
            />
            <Text style={styles.desc}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.com} onPress={handleComment}>
            <Icon name="chatbox-outline" size={30} color="#A47E53" />
            <Text style={styles.desc}>{comments}</Text>
          </TouchableOpacity>
        </View>
        {likedBy.length > 0 && (
          <View style={styles.likedByContainer}>
            {likedBy.length === 1 ? (
              <Text style={styles.likedByText}>Liked by {likedBy[0].username}</Text>
            ) : (
              <Text style={styles.likedByText} onPress={handleOpenLikesModal}>
                Liked by {likedBy[0].username} and {likedBy.length - 1} others
              </Text>
            )}
          </View>
        )}
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {likedBy.slice(1).map((user, index) => (
              <Text key={index} style={styles.likedByUsername}>
                {user.username}
              </Text>
            ))}
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: "2%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "rgba(240, 237, 228, 0.5)",
  },
  post: {
    marginBottom: 10,
    
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(240, 237, 228, 0.2)",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    right:70
  },
  date: {
    color: "#fff",
    marginLeft: 10,
left:70
  },
  postFooter: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(240, 237, 228, 0.2)",
    padding: 10,
    width: "100%",
  },
  desc: {
    color: "white",
  },
  likecom: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "rgba(240, 237, 228, 0.5)",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
  },
  com: {
    flexDirection: "row",
    alignItems: "center",
  },
  likedByContainer: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "rgba(240, 237, 228, 0.5)",

  },
  likedByText: {
    marginRight: 5,
    fontSize: 12,
    color: "white",
    left:20
    
  },
  likedByUsername: {
    fontSize: 12,
    color: "#A47E53",
    fontWeight: "bold",
    marginRight: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#B4966A",
    borderRadius: 20,
    padding: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imageText:{
    top:70,
    left:0,
    color:'#d4af37',
    fontSize:40
  },
  imageTextContainer: {
    position: 'absolute',
    top: 100,
    left: 100,
  },
});