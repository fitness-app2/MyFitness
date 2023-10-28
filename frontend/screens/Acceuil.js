import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DetailsPost from './DetailsPost';
import Icon from 'react-native-vector-icons/Ionicons';
import link from '../link';

export default function Home({ route }) {
  const { user } = route.params;
  console.log(user,"user")
  console.log('Welcome to home');
  const [data, setData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});
  const getCurrentUser=()=>{

    axios.get(`${link}/user/${user.id}`)
  .then(res=>{
    console.log(res.data)
    setCurrentUserData(res.data)})
  .catch(err=>console.log(err,"err"))
  }
  const fetchData = () => {
    axios
      .get(`${link}/post/`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    getCurrentUser()
  }, []);

  const renderItem = ({ item }) => <DetailsPost currentUserData={currentUserData} CurrentuserID={user.id} data={item}  />;

  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
          <Text style={[styles.title, { fontStyle: 'italic', color: 'white' }]}>
 Good morning, {currentUserData.username}
</Text>
            <TouchableOpacity style={styles.notificationIcon}>
              <Icon name="notifications" size={20} color= 'white' />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.feed}>MyFitness</Text> */}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
        <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "black"

  },
  
  safeArea: {
    flex: 6, 
    top:60
  },
  bottomBar: {
    height: 60, 
    backgroundColor: 'black', 
  },
  header: {
    height: 40,
    alignItems: 'flex-start', 
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10, 
    backgroundColor: 'transparent', 

  },
  title: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 19,
    marginRight: 'auto',
  },
  feed: {
    color: '#7492e2',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    marginLeft: 25,
    left:150
  },
  notificationIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  image: {
    flex: 1,
    borderRadius: 2,
    overflow: 'hidden',
    borderColor : 'white'
  },
});
