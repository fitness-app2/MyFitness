import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity ,TextInput} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';



import Dropdown from '../component/Dropdown';


const { width, height } = Dimensions.get('window');

export default function Home() {
  const [heartColor, setHeartColor] = useState('black');
  const [saveColor, setSaveColor] = useState('black');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const handleDropdownOption = (option) => {
    
    if (option === 'delete') {

    } else if (option === 'update') {
    
    }

   
    setShowDropdown(false);
  };



  const handleHeartClick = () => {
    setHeartColor(heartColor === 'black' ? 'red' : 'black');
  };

  const handleSaveClick = () => {
    setSaveColor(saveColor === 'black' ? 'red' : 'black');
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };
  const handleCommentTextChange = (text) => {
    setCommentText(text);
  };



  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Make an API request to fetch posts
    axios.get('http://10.0.2.2:3000/posts/posts')
      .then((response) => {
        // Set the fetched posts in the state
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); 

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/my3.png')}
        />
        <Text style={styles.greeting}>Good Morning, Alex.</Text>
        <View style={styles.headerIcons}>
          <Image
            style={styles.alertIcon}
            source={require('../assets/my.png')}
          />
          <Image
            style={styles.messageIcon}
            source={require('../assets/my.png')}
          />
        </View>
      </View>

      {/* Posts */}
      <View style={styles.posts}>
      {posts.map((post) => (
          <View style={styles.post} key={post.id}>
            <View style={styles.profileInfo}>
              <Image
                style={styles.profilePhoto}
                source={{ uri: post.authorAvatar }}
                />
              <View style={styles.profileText}>
                <Text style={styles.profileName}>{post.client_id}</Text>
                <Text style={styles.timeAgo}>{post.date}</Text>
              </View>

              <TouchableOpacity onPress={toggleDropdown}>
  <AntDesign name="ellipsis1" size={24} color="black" />
</TouchableOpacity>

{showDropdown && (
  <Dropdown onOptionSelect={handleDropdownOption} />
)}

              

            </View>
            <Text style={styles.greeting}>{post.content}</Text>

            <Image
              style={styles.postImage}
              source={{ uri: post.image }}
              />
            <View style={styles.actions}>
              <View style={styles.action}>
                <TouchableOpacity onPress={handleHeartClick}>
                  <Octicons
                    name="feed-heart"
                    size={24}
                    color={heartColor}
                  />
                </TouchableOpacity>
                <Text style={styles.likeCount}>8,998</Text>
              </View>
              <View style={styles.action}>
                <TouchableOpacity onPress={handleCommentClick}>
                  <Fontisto name="commenting" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.commentCount}>145</Text>
              </View>
              <View style={styles.action}>
                <TouchableOpacity onPress={handleSaveClick}>
                  <MaterialIcons name="save-alt" size={24} color={saveColor} />
                </TouchableOpacity>
                <Text style={styles.commentCount}>14</Text>
              </View>
            </View>
            {showCommentInput ? (
              <TextInput
                style={styles.commentInput}
                placeholder="Write a comment..."
                value={commentText}
                onChangeText={handleCommentTextChange}
              />
            ) : null}
          </View>
          
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    logo: {
        width: 80, // Set the initial width
        height: 60, // Set the initial height
        resizeMode: 'contain', // Make the image fit inside the container
        right: -10,
        backgroundColor: 'E1C9F7',
        transform: [{ scale: 6}] ,// Adjust the scale factor as needed (e.g., 1.2 for 20% zoom)
        borderRadius: (width * 0.15) / 2, // Responsive profile photo size

      },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: width * 0.05, // Responsive padding
      backgroundColor: 'white',
      width: '100%',
    },
    greeting: {
      fontSize: width * 0.04, // Responsive font size
      fontWeight: 'bold',
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    alertIcon: {
      width: width * 0.08, // Responsive icon size
      height: width * 0.08, // Responsive icon size
      marginRight: width * 0.02, // Responsive margin
    },
    messageIcon: {
      width: width * 0.08, // Responsive icon size
      height: width * 0.08, // Responsive icon size
    },
    posts: {
      padding: width * 0.04, // Responsive padding
    },
    post: {
      marginBottom: width * 0.04, // Responsive margin
      backgroundColor: 'white',
      borderRadius: width * 0.09, // Responsive borderRadius
      padding: width * 0.04, // Responsive padding
      shadowColor: '#241061',
      shadowOffset: {
        width: 0,
        height: width * 0.03, // Adjust this value for shadow's bottom offset
      },
      shadowOpacity: 4,
      shadowRadius: width * 0.02, // Adjust this value for shadow radius
      elevation: 8,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: width * 0.04, // Responsive margin
    },
    profilePhoto: {
      width: width * 0.15, // Responsive profile photo size
      height: width * 0.15,
      borderRadius: width * 0.075, // Responsive borderRadius
      marginRight: width * 0.04, // Responsive margin
      backgroundColor: '#E5E4E9',
    },
    profileText: {
      flex: 1,
    },
    profileName: {
      fontSize: width * 0.04, // Responsive font size
      fontWeight: 'bold',
    },
    timeAgo: {
      fontSize: width * 0.03, // Responsive font size
      color: 'gray',
    },
    postImage: {
      width: '100%',
      height: width * 0.6, // Responsive image height
      borderRadius: width * 0.04, // Responsive borderRadius
      marginBottom: width * 0.04, // Responsive margin
      backgroundColor: '#E5E4E9',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    action: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    likeIcon: {
      width: width * 0.06, // Responsive icon size
      height: width * 0.06,
      marginRight: width * 0.015, // Responsive margin
    },
    commentIcon: {
      width: width * 0.06, // Responsive icon size
      height: width * 0.06,
    },
    likeCount: {
      fontSize: width * 0.04, // Responsive font size
    },
    commentCount: {
      fontSize: width * 0.04,
    },
    commentInput: {
      backgroundColor: 'white',
      borderRadius: width * 0.1, // Responsive borderRadius
      padding: width * 0.02, // Responsive padding
      marginTop: width * 0.02, // Responsive margin
    },
  });