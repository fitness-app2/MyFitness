import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import {
  FlatList,
  StyleSheet,
  Text, TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground 
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Card, Chip ,Avatar, IconButton } from 'react-native-paper';
import { Feather} from '@expo/vector-icons';
import link from '../link';
function Search({ route }) {
  console.log("searchi ")
  const navigation = useNavigation();
  const { user } = route.params;
  console.log(user.id)
  const [foreign, setForeign]=useState({})
  const [inputValue, setInputValue] = useState("");
  const [searchTerm] = useDebounce(inputValue, 500);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchHis, setSearchHis] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  console.log(searchResults,'hhh')

 useEffect(() => {
    axios.get(`${link}/userss`)
      .then(res => {
        setOriginalUsers(res.data);
        setSearchResults(res.data);  
      })
      .catch(err => console.error(err));
     }, []);

  const handlePostHis=()=>{
    axios.post(`${link}/search/addsearch`,{
      search_history_id:inputValue,
      user_id:`${user.id}`
    }).then(res => {
      setSearchHis(res.data)
    })
    .catch(err => console.error(err));
  }
    
useEffect(()=>{
axios.get(`${link}/search/get/${user.id}`)
.then(res => {
  setSearchHis(res.data)
    console.log("syee")
})
.catch(err => console.error(err,"lee")

); 

}, []);


  useEffect(() => {
    const filteredUsers = originalUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  }, [searchTerm]);

  const handledelet = (id) => {
    axios.delete(`${link}/search/delete/${id}`)
      .then((res) => {
        setSearchHis(res.data);
        console.log(res.data)
        console.log("fasakh ")
      })
      .catch((err) => console.log(err,"lee mtfasakhsh"));
  }
  return (
    <ImageBackground
    source={require('../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg')}
    style={styles.backgroundImage}
    blurRadius={40}
  >
    <View style={styles.container}>
      <TextInput
        type='search'    
        style={styles.input}
        placeholder='Search what do you want'
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <TouchableOpacity onPress={handlePostHis}>
        <View style={styles.search}  >
          <Feather name='search' size={30} color='#A47E53' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View >
          <Text style={styles.text}
            onPress={() => navigation.navigate("Acceuil")}
          >Cancel</Text>
        </View>
      </TouchableOpacity>
     

      {searchResults?.length > 0 ? (
  searchResults.map((item, index) => (
    <Card key={item?.id || index} style={styles.container1}>
      <Card.Title
        title={item?.username || "Unknown"}
        subtitle="Artist"
        left={(props) => <Avatar.Image source={{uri: item?.profilepic}} size={50} />}
        right={(props) => <IconButton {...props} icon="eye" onPress={() => {navigation.navigate("OneProfile", {  foreign:searchResults[0] })}} />}
      />
    </Card>
  ))
) : null}
<View>
      <FlatList
        data={searchHis}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container2} >
            <Text style={styles.hist}>{item.search_history_id}<Feather name='x' size={30} onPress={() => handledelet(item.id)}/></Text>
            
          </View>
        )}
      />
      </View>
    </View>
      </ImageBackground>
  )
        }        

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20, 
  },
  container1: {
    width: '100%', 
    marginVertical: 10,
    top:120,
    color:'blue'
  },

   historicalChip: {
    backgroundColor: '#A47E53',
    borderRadius: 20,
  },
 
  input: {
    width: '91%', 
    height: 50,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#A47E53",
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10, 
    top:28,
    left:17,
  },
  list: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A47E53'
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10, 
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A47E53',
  },
  hist: {
    fontSize: 16,
    fontWeight: 'bold',
    top:12,
    color: '#A47E53',
  },
  text: {
     right: 178,
    top: -26,
    color: '#A47E53',
    textAlign: 'left',
    marginBottom: 10,
  },
  search: {
    top: -33,
    position: 'absolute', 
    left: 155,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the resizeMode based on your preference
  },
  
})
export default Search