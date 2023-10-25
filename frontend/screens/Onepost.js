import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, Modal, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import link from "../link";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../fireBase";

export default function OnePost({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();
  const [newComment, setNewComment] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState(data.comments || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likedBy, setLikedBy] = useState("");
  const [modalLikedBy, setModalLikedBy] = useState([]);


  useEffect(() => {
    fetchComments();
    fetchLikes();
  }, [data.id]);

  const userCommented = auth;

  const fetchComments = async () => {
    try {
      const timestamp = Date.now();
      const response = await axios.get(
        `${link}/post/${data.id}/comments/?timestamp=${timestamp}`
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
        `${link}/post/${data.id}/likes/?timestamp=${timestamp}`
      );
      setLikes(response.data);

      const uniqueLikedUsernames = Array.from(new Set(response.data.map(like => like.user.username)));
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

  const handleAddComment = async () => {
    if (newComment.trim() === "") {
      return;
    }

    const addedComment = {
      user: userCommented.currentUser.uid,
      post: data.id,
      comment: newComment,
    };

    try {
      const response = await axios.post(
        `${link}/post/${data.id}/comments/`,
        addedComment
      );
      const newCommentData = response.data;
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.pic.length);
    navigation.navigate("OnePost", { data });
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
    <ImageBackground source={{ uri:data.pic[currentImageIndex] }} resizeMode="cover" style={styles.backgroundImage} blurRadius={70} >
    <View style={styles.container}>
      <Image source={{ uri: data.pic[currentImageIndex] }} style={styles.image} resizeMode="cover" />
      <View style={styles.postHeader}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextImage}>
          <Text style={styles.buttonText}>Next Image</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.date}>{data.date_time}</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.desc}>{data.description}</Text>
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

      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={styles.commentButton}
          onPress={handleAddComment}
        >
          <Text style={styles.commentText}>Comment</Text>
        </TouchableOpacity>
      </View>

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
