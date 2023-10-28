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
              color={isLiked ? "red" : "white"}
            />
               <TouchableOpacity style={styles.share} onPress={handleLike}>
       
       <Icon name="share" size={30} color="white" />
       </TouchableOpacity>
            <Text style={styles.desc}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.com} onPress={handleComment}>
            <Icon name="chatbox-outline" size={30} color="white" />
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
    backgroundColor: "black", 
    marginVertical: 10, 
    width: "95%",
    alignSelf: "center",
    borderRadius: 1, 
  },
  post: {
    marginBottom: 1, 
  },
  image: {
    width: "100%", 
    height: 350, 
    borderRadius: 5,
    borderWidth: 0.6,
    borderColor: '#7492e2',
    shadowColor: "white",
    shadowOffset: {
        width: 10,
        height: 10, 
    },
    shadowOpacity: 0.7,
    shadowRadius: 6, 
    elevation: 6,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    backgroundColor: "black",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "white", 
    fontWeight: "bold",
    marginLeft: -5, 
  },
  date: {
    color: "white", 
    marginLeft: 100,
  },
  postFooter: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    padding: 3, 
    width: "100%",
  },
  desc: {
    color: "white",
    fontSize: 16, 
    lineHeight: 17,
    marginTop: 5,
    paddingHorizontal: 15, 

    left : 2,
  },
  likecom: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5, 
    backgroundColor: "black",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
  },
  com: {
    flexDirection: "row",
    alignItems: "center",
    left : -125 ,
  },
  likedByContainer: {
    marginTop: 10, 
    flexDirection: "row",
    alignItems: "center",
  },
  likedByText: {
    marginRight: 5,
    fontSize: 12,
    color: "white",
    left:20
  },
  likedByUsername: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F0EDE4",
    borderRadius: 15,
    padding: 25, 
    alignItems: "center",
    shadowColor: "#df208e",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5, 
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
    width: 40, 
    height: 40, 
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#7492e2',
  },
  imageText: {
    top: 70, 
    left: 0,
    color: '#d4af37',
    fontSize: 32,
  },
  imageTextContainer: {
    position: 'absolute',
    top: 80, 
    left: 80, 
  },
  share : {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    marginRight: 20,
    left : 260,
  }
});
