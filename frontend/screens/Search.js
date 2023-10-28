// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDebounce } from 'use-debounce';
// import {
//   FlatList,
//   StyleSheet,
//   Text, TextInput,
//   View,
//   Image,
//   TouchableOpacity,
//   ImageBackground 
// } from 'react-native';
// import { useNavigation } from "@react-navigation/native";
// import { Card, Chip ,Avatar, IconButton } from 'react-native-paper';
// import { Feather} from '@expo/vector-icons';
// import link from '../link';
// function Search({ route }) {
//   console.log("searchi ")
//   const navigation = useNavigation();
//   const { user } = route.params;
//   console.log(user.id)
//   const [foreign, setForeign]=useState({})
//   const [inputValue, setInputValue] = useState("");
//   const [searchTerm] = useDebounce(inputValue, 500);
//   const [originalUsers, setOriginalUsers] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchHis, setSearchHis] = useState([]);
//   const [show, setShow] = useState(false);
//   const [showEdit, setShowEdit] = useState(false);
//   console.log(searchResults,'hhh')

//  useEffect(() => {
//     axios.get(`${link}/userss`)
//       .then(res => {
//         setOriginalUsers(res.data);
//         setSearchResults(res.data);  
//       })
//       .catch(err => console.error(err));
//      }, []);

//   const handlePostHis=()=>{
//     axios.post(`${link}/search/addsearch`,{
//       search_history_id:inputValue,
//       user_id:`${user.id}`
//     }).then(res => {
//       setSearchHis(res.data)
//     })
//     .catch(err => console.error(err));
//   }
    
// useEffect(()=>{
// axios.get(`${link}/search/get/${user.id}`)
// .then(res => {
//   setSearchHis(res.data)
//     console.log("syee")
// })
// .catch(err => console.error(err,"lee")

// ); 

// }, []);


//   useEffect(() => {
//     const filteredUsers = originalUsers.filter((user) =>
//       user.username.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredUsers);
//   }, [searchTerm]);

//   const handledelet = (id) => {
//     axios.delete(`${link}/search/delete/${id}`)
//       .then((res) => {
//         setSearchHis(res.data);
//         console.log(res.data)
//         console.log("fasakh ")
//       })
//       .catch((err) => console.log(err,"lee mtfasakhsh"));
//   }
//   return (
//     <ImageBackground
//     source={require('../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg')}
//     style={styles.backgroundImage}
//     blurRadius={40}
//   >
//     <View style={styles.container}>
//       <TextInput
//         type='search'    
//         style={styles.input}
//         placeholder='Search what do you want'
//         value={inputValue}
//         onChangeText={text => setInputValue(text)}
//       />
//       <TouchableOpacity onPress={handlePostHis}>
//         <View style={styles.search}  >
//           <Feather name='search' size={30} color='black' />
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <View >
//           <Text style={styles.text}
//             onPress={() => navigation.navigate("Acceuil")}
//           >Cancel</Text>
//         </View>
//       </TouchableOpacity>
     

//       {searchResults?.length > 0 ? (
//   searchResults.map((item, index) => (
//     <Card key={item?.id || index} style={styles.container1}>
//       <Card.Title
//         title={item?.username || "Unknown"}
//         // subtitle="athlet"
//         left={(props) => <Avatar.Image source={{uri: item?.profilepic}} size={50} />}
//         right={(props) => <IconButton {...props} icon="eye" onPress={() => {navigation.navigate("OneProfile", {  foreign:searchResults[0] })}} />}
//       />
//     </Card>
//   ))
// ) : null}
// <View>
//       <FlatList
//         data={searchHis}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.container2} >
//             <Text style={styles.hist}>{item.search_history_id}<Feather name='x' size={30} onPress={() => handledelet(item.id)}/></Text>
            
//           </View>
//         )}
//       />
//       </View>
//     </View>
//       </ImageBackground>
//   )
//         }        

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',

//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor : "black"
//   },
//   // username: {
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   color: 'white',
//   // },
//   input: {
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 2,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 10,
   
//   },
//   search: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'white',
//     borderRadius: 100,
//     width: 60,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -50,
    
//   },
//   text: {
//     color: 'white',
//     marginTop: 20,
//     fontSize: 16,
//   },
//   container1: {
//     marginVertical: 8,
//     backgroundColor: '#191919',
   

    
//   },
//   container2: {
//     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 4,
//     padding: 8,
//     color : "white"
    
//   },
//   username: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   hist: {
//     fontSize: 16,
//     color: '#7492e2',
    
//   },
// });


// export default Search
// 
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
        placeholder='Search '
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <TouchableOpacity onPress={handlePostHis}>
        <View style={styles.search}  >
          <Feather name='search' size={30} color='black' />
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
  backgroundImage: {
  flex: 1,
    resizeMode: 'cover',

  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor : "black"
  },
  // username: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
   
  },
  search: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    
  },
  text: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  container1: {
    marginVertical: 8,
    backgroundColor: 'white',
   

    
  },
  container2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
    padding: 8,
    color : "white"
    
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  hist: {
    fontSize: 16,
    color: '#7492e2',
    
  },
});

    
  

export default Search