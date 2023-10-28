import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, FlatList, Dimensions, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import link from '../link';
import axios from 'axios';
import Subscription from './Subscription';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";

const Profile = ({ navigation,route }) => {
  const { user } = route.params;

  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [premiem, setPremiem]= useState(0)
  const [followers, setFollowers] = useState([]);
  const [followersn, setFollowersn] = useState(followers.length);
  const [following, setFollowing] = useState([]);
  const [followingn, setFollowingn] = useState(following.length);
  const [isFollowed, setIsFollowed] = useState(false);
  const auth = getAuth();
  const getFollowers = () => {
    axios.post(`${link}/follow/foreign`, { id: user.id })
      .then((res) => {
        setFollowers(res.data);
        setFollowersn(res.data.length)
      })
      .catch((err) => console.log(err));
  };

  const getFollowing = () => {
    axios.post(`${link}/follow/current`, { id: user.id })
      .then((res) => {
        setFollowing(res.data)
        setFollowingn(res.data.length)})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    try  {
      
     getFollowers();
     getFollowing();
    
 
 }
 catch(err){
   console.log(err)
 }
     axios.get(`${link}/userposts/user/${user.id}`)
       .then((res) => {
         setPosts(res.data);
         
       })
       .catch((err) => console.log(err));
   }, []);

  const changePremium=()=>{
    user.premium=true
    setPremiem(Math.random() * 3)
    console.log(user.premium,'pass')
  }

  useEffect(() => {
    axios
      .get(`${link}/userposts/user/${user.id}`)
      .then((res) => {
        console.log(res.data, "res.data");
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [premiem]);

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  const onLogout = () => {
    auth.signOut();
    navigation.navigate("login");
  }; 


  const renderPost = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("MinePosts", { item: item })}>
      <Image source={{ uri: item.pic[0] }} style={styles.postImage} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: user.profilepic }} resizeMode="cover" style={styles.backgroundImage} blurRadius={70} >
      <ScrollView style={styles.container}>
        
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: user.profilepic }} style={styles.profileImage} />
          </View>

          <Text style={styles.username}>{user.username}</Text>

          {user.premium === false ? (
            <Subscription premium={changePremium} id={user.id} />
          ) : (
            <MaterialIcons style={styles.icon} name="verified" size={24} color="#d4af37" />
          )}

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

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onLogout} style={styles.button}>
              <Feather name="menu" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={posts}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderPost}
            contentContainerStyle={styles.postContainer}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "black",
  },
  backgroundImage: {
    flex: 1,
  },
  profileContainer: {
    padding: 16,
  },
  profileImageContainer: {
    flexDirection: 'row',
    width: 140,
    height: 140,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#7492e2',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 30,
    left : -80,
  },
  profileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color : 'white',
    left : 50,
    top : -115,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7492e2',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top : -330,
    left : 130,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  postContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  postImage: {
    width: 170,
    height: 220,
    resizeMode: 'cover',
    margin: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#7492e2',
    
  },
  icon: {
    alignSelf: 'center',
    marginTop: -32,
    color: 'gold',
  },
  followedButton: {
    backgroundColor: '#7492e2',
    borderWidth: 2,
    borderColor: '#d4af37',
  },
  unfollowedButton: {
    backgroundColor: '#7492e2',
  },
  imageText: {
    top: -90,
    left: 60,
    color: '#7492e2',
    fontSize: 16,
    fontWeight: 'bold',},

});

export default Profile;

