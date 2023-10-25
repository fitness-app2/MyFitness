// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import link from '../link';
// import {
//   View,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   StatusBar,
//   KeyboardAvoidingView,
//   ScrollView,
//   Text,
//   FlatList,
//   ImageBackground,
// } from 'react-native';
// import { getAuth } from "firebase/auth";
// import { colors, shadow, sizes, spacing } from './constants/theme';
// import DeleteButton from './constants/DeleteButton';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';


// const CARD_WIDTH = sizes.width - 45;
// const CARD_HEIGHT = 300;
// const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

// const MinePosts = ({route})=>{
//     const {item}=route.params
//     console.log(item,"iteemmm");
//   const [data, setData] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [id, setId] = useState('');
//   const [idpost, setIdpost] = useState('');
//   const [tracker, setTracker] = useState(false);
//   let navigation = useNavigation();
//   const auth = getAuth();

// console.log(item.id);

//   const handleDelete = () => {
//     axios.delete(`${link}/post/delete/${item.id}`)
//       .then((res) => {
//         console.log(res, 'this is the data');
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const goBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <>
//       <TouchableOpacity onPress={goBack} style={styles.appButtonContainer}>
//         <Icon name="arrow-back" size={34} color="green" />
//       </TouchableOpacity>

//               <View style={[styles.card]}>
//                 <View style={styles.imageBox}>
//                   <Image source={{ uri: item.pic[0] }} style={styles.image} />
//                 </View>
//                 <View style={styles.titleBox}>
//                   <Text style={styles.title}>{item.description}</Text>
//                 </View>
//                 <Text style={styles.location}>{item.date_time}</Text>
//               </View>
//               <TouchableOpacity style={styles.favoritee} onPress={handleDelete}>
//                 <DeleteButton style={styles.comment} />
//               </TouchableOpacity>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   likeText: {
//     position: 'absolute',
//     top: 155,
//     right: 310,
//     color: colors.black,
//     fontSize: sizes.h3,
//     paddingLeft: 10,
//     color: colors.black,
//     fontSize: sizes.h3,
//   },
//   logo: {
//     height: 70,
//     width: 70,
//     top: 20,
//     right: -120,
//   },

//   appButtonContainer: {
//     borderRadius: 6,
//     alignItems: 'center',
//     margin: 10,
//     padding: 5,
//     left: -130,
//     top: 15,
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     marginVertical: 10,
//   },
//   favorite: {
//     position: 'absolute',
//     top: 150,
//     right: 330,
//   },
//   favoritee: {
//     backgroundColor: '#fff',
//     position: 'absolute',
//     top: 150,
//     right: spacing.m,
//   },
//   comment: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     position: 'absolute',
//     top: 150,
//     right: 270,
//   },
//   imageBox: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     borderRadius: sizes.radius,
//     overflow: 'hidden',
//   },
//   image: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     resizeMode: 'cover',
//   },
//   titleBox: {
//     position: 'absolute',
//     top: CARD_HEIGHT - 80,
//     left: 16,
//   },
//   title: {
//     bottom: 220,
//     fontSize: sizes.h2,
//     fontWeight: 'bold',
//     color: colors.white,
//   },
//   location: {
//     bottom: 150,
//     fontSize: sizes.h3,
//     color: colors.white,
//   },

// });

// export default MinePosts;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import link from '../link';
import { getAuth } from "firebase/auth";
import { colors, shadow, sizes, spacing } from './constants/theme';
import DeleteButton from './constants/DeleteButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const CARD_WIDTH = sizes.width - 45;
const CARD_HEIGHT = 300;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, Modal, ImageBackground } from "react-native";



export default function MinePosts({ route }) {
  const {item}=route.params
console.log(item,"iteemmm");
  const navigation = useNavigation();
  const [newComment, setNewComment] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState(item.comments || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likedBy, setLikedBy] = useState("");
  const [modalLikedBy, setModalLikedBy] = useState([]);
  const auth = getAuth();
   const handleDelete = () => {
    console.log(item.id);
        axios.delete(`${link}/post/delete/${item.id}`)
          .then((res) => {
            console.log(res, 'this is the data');
            setData(res.data);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Acceuil' }],
              });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const goBack = () => {
        navigation.goBack();
      };

  useEffect(() => {
    fetchComments();
    fetchLikes();
  }, [item.id]);

  const userCommented = auth;

  const fetchComments = async () => {
    try {
      const timestamp = Date.now();
      const response = await axios.get(
        `${link}/post/${item.id}/comments/?timestamp=${timestamp}`
      );
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLikes = async () => {
    try {
      const timestamp = Date.now();
      const response = await axios.get(
        `${link}/post/${item.id}/likes/?timestamp=${timestamp}`
      );
      setLikes(response.data);

      const uniqueLikedUsernames = Array.from(new Set(response.item.map(like => like.user.username)));
      if (uniqueLikedUsernames.length > 0) {
        if (uniqueLikedUsernames.length === 1) {
          setLikedBy(uniqueLikedUsernames[0]);
        } else {
          const othersCount = uniqueLikedUsernames.length - 1;
          setLikedBy(`${uniqueLikedUsernames[0]} and ${othersCount} others`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

//   const handleAddComment = async () => {
//     if (newComment.trim() === "") {
//       return;
//     }

//     const addedComment = {
//       user: userCommented.currentUser.uid,
//       post: item.id,
//       comment: newComment,
//     };

//     try {
//       const response = await axios.post(
//         `${link}/post/${data.id}/comments/`,
//         addedComment
//       );
//       const newCommentData = response.data;
//       setComments((prevComments) => [...prevComments, newCommentData]);
//       setNewComment("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.pic.length);
  };

  const handleOpenLikesModal = () => {
    const uniqueUsernames = Array.from(new Set(likes.map(like => like.user.username)));
    setModalLikedBy(uniqueUsernames);
    setModalVisible(true);
  };
  

  const handleCloseLikesModal = () => {
    setModalVisible(false);
  };



  return (
    <ImageBackground source={{ uri:item.pic[currentImageIndex] }} resizeMode="cover" style={styles.backgroundImage} blurRadius={70} >
    <View style={styles.container}>
      <Image source={{ uri: item.pic[currentImageIndex] }} style={styles.image} resizeMode="cover" />
    <TouchableOpacity style={styles.favoritee} onPress={handleDelete}>
             <DeleteButton style={styles.comment} />
   </TouchableOpacity>
      <View style={styles.postHeader}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextImage}>
          <Text style={styles.buttonText}>Next Image</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date_time}</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.desc}>{item.description}</Text>
      </View>

      <FlatList
        data={comments}
        renderItem={({ item, index }) => (
          <View key={index}>
            <View style={styles.userContainer}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 12.5,
                }}
                source={{ uri: item.user?.profilepic }}
              />
              <Text style={styles.userName}>{item.user?.firstname}</Text>
            </View>
            <View style={styles.singleCommentContainer}>
              <Text style={styles.singleCommentText}>{item.comment}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />


      <TouchableOpacity style={styles.like} onPress={handleOpenLikesModal}>
        <Icon
          name="heart"
          size={30}
          color={likes.length > 0 ? "#A47E53" : "#A47E53"}
        />
        {likedBy !== "" && (
          <Text style={styles.likedByText}>Liked By: {likedBy}</Text>
        )}
      </TouchableOpacity>

      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={handleCloseLikesModal}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      {modalLikedBy.map((username, index) => (
        <Text key={index} style={styles.likedByUsername}>
          {username}
        </Text>
      ))}
      <TouchableOpacity
        style={styles.closeModalButton}
        onPress={handleCloseLikesModal}
      >
        <Text style={styles.closeModalButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  image: {
    width: "100%",
    height: "50%",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  date: {
    color: 'rgba(240, 237, 228, 0.8)',
  },
  postFooter: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  desc: {
    marginTop: 10,
    lineHeight: 20,
    color: 'rgba(240, 237, 228, 0.8)',
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    marginBottom: 5,
  },
  userName: {
    fontSize: 15,
    color: "#B4966A",
    marginLeft: 5,
  },
  singleCommentContainer: {
    backgroundColor: "rgba(240, 237, 228, 0.8)",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  singleCommentText: {
    marginLeft: 15,
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
   
  },
  commentInput: {
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: 'rgba(240, 237, 228, 0.8)'
  },
  commentButton: {
    backgroundColor: "#B4966A",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "25%",
  },
  commentText: {
    color: 'rgba(240, 237, 228, 0.8)',
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  nextButton: {
    backgroundColor: "#B4966A",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  buttonText: {
    color: "#FFFFFF",
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
  likedByText: {
    fontSize: 12,
    color: "#A47E53",
    fontWeight: "bold",
    marginRight: 5,
  },
  likedByUsername: {
    fontSize: 12,
    color: "#A47E53",
    fontWeight: "bold",
    marginRight: 5,
  },
  closeModalButton: {
    height: 30,
    backgroundColor: "#B4966A",
    borderRadius: 50,
    // padding: 10,
    width:30
  },
  closeModalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    top:5
  },
  backgroundImage: {
    flex: 1,
  },
});
