// 
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList, Dimensions, Pressable, ImageBackground, TouchableWithoutFeedback  } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import link from '../link';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const OneProfile =  () => {
  const navigation = useNavigation();
  const [currentU, setCurrentU] = useState("");
  const [currentUserData, setCurrentUserData] = useState({});
  const [followers, setFollowers] = useState([]);
  const [followersn, setFollowersn] = useState(followers.length);
  const [following, setFollowing] = useState([]);
  const [followingn, setFollowingn] = useState(following.length);
  const [isFollowed, setIsFollowed] = useState(false);
  const [posts, setPosts] = useState([]);

  const getData =  async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setCurrentU(value);
        getCurrentUser(value)
        
      } else {
        console.log('No data found for the key:', key);
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const getFollowers = () => {
    axios.post(`${link}/follow/foreign`, { id: foreign.id })
      .then((res) => {
        setFollowers(res.data);
        setFollowersn(res.data.length)
      })
      .catch((err) => console.log(err));
  };

  const getFollowing = () => {
    axios.post(`${link}/follow/current`, { id: foreign.id })
      .then((res) => {
        setFollowing(res.data)
        setFollowingn(res.data.length)})
      .catch((err) => console.log(err));
  };

  const route = useRoute();
  const { foreign } = route.params;
  const profilepic = foreign.profilepic;
  const username = foreign.username;

  const handleFollow = async () => {

    setIsFollowed(true);
    setFollowersn(followersn+1)
    try {
      const res = await axios.post(`${link}/follow/addfollow`, {
        current_user_ids: currentU,
        foreign_user_ids: foreign.id
      });
    
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow=()=>{
    console.log("unfollow")
    setFollowersn(followersn-1)
    setIsFollowed(false);
  }

const getCurrentUser=(value)=>{
  console.log(value)
  axios.get(`${link}/user/${value}`)
.then(res=>setCurrentUserData(res.data))
.catch(err=>console.log(err,"err"))
}

  useEffect(() => {
   try  {
     getData("current");
    getFollowers();
    getFollowing();
   

}
catch(err){
  console.log(err)
}
    axios.get(`${link}/userposts/user/${foreign.id}`)
      .then((res) => {
        setPosts(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let isUserFollowed = false;
    for (const follower of followers) {
      const currentUserIds = follower.current_user_ids;
      if (currentUserIds.includes(currentU)) {
        isUserFollowed = true;
        break; // Terminate the loop early if the user is found
      }
    }
    setIsFollowed(isUserFollowed);
  }, [followers, currentU]);

  const renderPost = ({ item }) =>{ 
   console.log(item.premiem,"post")
   console.log(currentUserData.premium,"user")
   if(item.premiem&&currentUserData.premium){
    
    return(<TouchableWithoutFeedback onPress={() => navigation.navigate("OnePost", { data:item })}>
     <Image source={{ uri: item.pic[0] }} borderColor={'#d4af37'} style={styles.postImage} />
    </TouchableWithoutFeedback>)
   }
   if(item.premiem&&!currentUserData.premium){
    return  ( <View>
      <Image source={{ uri: item.pic[0] }} style={styles.postImage} borderColor= {'#d4af37'} blurRadius={70}  />
      <Text style={styles.imageText}>Premium</Text>
    </View>)
   }
   if(!item.premiem){
    return(
      <TouchableWithoutFeedback onPress={() => navigation.navigate("OnePost", { data:item })}>
      <Image source={{ uri: item.pic[0] }} style={styles.postImage} />
      </TouchableWithoutFeedback>
    )
   }
   }

  return (
    <ImageBackground source={{ uri: profilepic }} resizeMode="cover" style={styles.backgroundImage} blurRadius={70} >
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: profilepic }} style={styles.profileImage} />
        </View>
  
        <Text style={styles.username}>{username}</Text>
  
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Posts</Text>
            <Text style={styles.infoText}>{posts.length}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Followers</Text>
            <Text style={styles.infoText}>{followersn}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Following</Text>
            <Text style={styles.infoText}>{followingn}</Text>
          </View>
        </View>
  
        {isFollowed ? (
          <TouchableOpacity
            style={[styles.buttonFollow, styles.followedButton]}
            onPress={handleUnfollow}
          >
            <Text style={styles.infoText}>Unfollow</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonFollow, styles.unfollowedButton]}
            onPress={handleFollow}
          >
            <Text style={styles.infoText}>Follow</Text>
          </TouchableOpacity>
        )}
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Feather name="menu" size={22} color="black" />
          </TouchableOpacity>
        </View>
  
        <FlatList
          data={posts}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPost}
          contentContainerStyle={styles.postContainer}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
  },
  profileContainer: {
    padding: 16,
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 11,
    marginTop: 51,
  },
  profileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  infoItem: {
    alignItems: 'center',
    left:10
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
    
  },
  infoLabel: {
    fontSize: 12,
    color: 'rgba(240, 237, 228, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'rgba(240, 237, 228, 0.5)', // Transparent background color
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -200,
    left: 330,
  },
  
  editProfileButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3897f0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postContainer: {
    alignItems: 'center',
    marginTop: 8,
    paddingBottom: 24,
  },
  postImage: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    margin: 1,
    borderRadius:15,
    borderWidth: 2,
    borderColor:'rgba(240, 237, 228, 0.5)',
  },
  buttonFollow: {
    backgroundColor: 'rgba(240, 237, 228, 0.5)',
    borderRadius: 5,
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    left: 85,
  },
  followedButton: {
    backgroundColor: 'rgba(240, 237, 228, 0.5)',
  },
  unfollowedButton: {
    backgroundColor: 'rgba(240, 237, 228, 0.5)',
  },
  premium:{
    borderColor:"gold"
  },
  imageText:{
    top:-100,
    left:60,
    color:'#d4af37'
  }
});

export default OneProfile;
