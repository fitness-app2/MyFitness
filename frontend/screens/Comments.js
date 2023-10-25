import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import link from "../link";
import { auth } from "../fireBase";

export default function Comments({ route }) {
  const { postId, user } = route.params;
  const [comments, setComments] = useState("");
  const [newComment, setNewComment] = useState("");
  const userCommented = auth;

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const timestamp = Date.now();
      const response = await axios.get(
        `${link}/post/${postId}/comments/?timestamp=${timestamp}`
      );
      setComments(response.data);
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
      post: postId,
      comment: newComment,
    };

    try {
      const response = await axios.post(
        `${link}/post/${postId}/comments/`,
        addedComment
      );
      const newCommentData = response.data;
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.commentBox}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EDE4",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
    width: "90%",
    marginHorizontal: 20,
    marginTop: 20,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    marginRight: 20,
  },
  commentButton: {
    backgroundColor: "#B4966A",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    height: 40,
    marginBottom: 10,
  },
  commentText: {
    color: "#FFFFFF",
  },
  singleCommentContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    margin: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  singleCommentText: {
    marginLeft: 15,
    fontSize: 15,
    color: "#000",
  },
  userName: {
    fontSize: 15,
    color: "#B4966A",
    marginLeft: 5,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    marginBottom: 5,
  },
});
