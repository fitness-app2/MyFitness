import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

import axios from 'axios';

const AddPostScreen = () => {
  const navigation = useNavigation();

  const [postData, setPostData] = useState({
    content: '',
    image: '', // Store the image URL here
  });

  // Function to handle "Post" button click
  const handlePostClick = async () => {
    try {
      const response = await axios.post(`http://10.0.2.2:3000/posts/posts`, {
        content: postData.content,
        image: postData.image,
        date: new Date(),
      });

      if (response.status === 201) {
        console.log('Post successful');
        // You can navigate to a different screen or perform other actions here
      } else {
        console.log('Post failed');
      }
    } catch (error) {
      console.error('Error while posting:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.discardBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.discardBtnText}>Discard</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/my3.png')}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TouchableOpacity style={styles.postBtn} onPress={handlePostClick}>
          <Text style={styles.postBtnText}>Post</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputField}
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={postData.content}
          onChangeText={(content) => setPostData({ ...postData, content })}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Image URL (optional)"
          value={postData.image}
          onChangeText={(image) => setPostData({ ...postData, image })}
        />

        <View style={styles.statusWrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>

      <ActionButton buttonColor="#241061">
        <ActionButton.Item
          buttonColor="#8C69FA"
          title="Take Photo"
          onPress={() => {}}
        >
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#6442CD"
          title="Choose Photo"
          onPress={() => {}}
        >
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.08, // Responsive height
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04, // Responsive padding
    borderBottomWidth: 3,
    borderBottomColor: '#241061',
    borderRadius: 50,
    width: '50%',
  },
  logo: {
    flex: 1,
    width: 80, // Set the initial width
    height: 60, // Set the initial height
    resizeMode: 'contain', // Make the image fit inside the container
    right: -10,
    backgroundColor: 'E1C9F7',
    transform: [{ scale: 5 }], // Adjust the scale factor as needed (e.g., 1.2 for 20% zoom)
    borderRadius: (width * 0.15) / 2, // Responsive profile photo size
  },
  create: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
    color: '#241061',
  },
  discardBtn: {
    padding: width * 0.02, // Responsive padding
    shadowColor: 'blue',
    backgroundColor: 'white',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  discardBtnText: {
    fontSize: width * 0.04, // Responsive font size
    color: '#241061',
    fontWeight: 'bold',
  },
  postBtn: {
    padding: width * 0.02, // Responsive padding
    shadowColor: 'blue',
    backgroundColor: 'white',
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  postBtnText: {
    fontSize: width * 0.04, // Responsive font size
    color: '#241061',
    fontWeight: 'bold',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.02,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 60,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#241061',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  inputField: {
    fontSize: width * 0.04, // Responsive font size
    textAlign: 'center',
    top: 40,
    zIndex: 1,
    width: '90%',
    height: height * 0.15, // Responsive height
    backgroundColor: 'white',
    borderRadius: width * 0.04, // Responsive border radius
    paddingHorizontal: width * 0.04, // Responsive padding
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginTop: height * 0.05,
  },
  imageUploadPlaceholder: {
    width: '100%',
    height: height * 0.4125, // Responsive height
    backgroundColor: 'lightgray',
    borderRadius: width * 0.08, // Responsive border radius
  },
  statusWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: width * 0.05, // Responsive font size
    height: width * 0.055, // Responsive height
    color: 'white',
  },
});

export default AddPostScreen;
