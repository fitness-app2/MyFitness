import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import link from "../link";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from 'react-native-elements';
export default function CreatePost({ route }) {
  const { user } = route.params;
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();


  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      base64: true,
      quality: 1,
      allowsMultipleSelection: true, // allow multiple selection
    });

    if (!result.canceled) {
      setPhotos([...photos, "data:image/jpeg;base64," + result.base64]);
      //1
    }
  };

  const handleSubmit = () => {
    if (!description || photos.length === 0) {
      Alert.alert("Description and photos required.");
      return;
    }

    let formData = new FormData();
    photos.forEach((photo, index) => {
      formData.append(`file${index}`, {
        uri: photo,
        name: `image${index}.jpg`,
        type: "image/jpg",
      });
    });

    setIsLoading(true);
    axios
      .post(
        `${link}/post/create`,
        {
          description: description,
          pic: photos,
          likes: [],
          comments: [],
          premiem: isSelected,
          userid: user.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Acceuil' }],
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);

        Alert.alert("Failed to create post.");
        setIsLoading(false);
      });
  };

  return (
   
    <View style={styles.container}>
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      {/* <Image source={require("../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg")} style={styles.logo} /> */}
      <TextInput
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
        <CheckBox
          checked={isSelected}
          onPress={toggleCheckbox}
          checkedColor="gold"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxText}>Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={selectPhoto}>
        <Text style={styles.buttonText2}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor : "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 150,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 110,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  input: {
    width: 370,
          height: 50,
          left: 15,
          top: 130,
          paddingBottom: 5,
          borderBottomWidth: 0.5,
          borderBottomColor: '#7492e2',
          color : 'white',
        },
        spinnerTextStyle: {
          color : "white",
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 15,
    margin: 10,
  },
  button: {
    backgroundColor: "#7492e2",
    borderRadius: 10,
    width: 65,
    height: 65,
    marginTop: 130,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  buttonText2: {
    bottom: 5,
    fontSize: 50,
    color: "#F0EDE4",
    
    
  },
  button2: {
    backgroundColor: '#7492e2',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    width: 150,
    height: 55,
    top: -210,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    left : 45,

  },
  spinnerTextStyle: {
    color: "#7492e2",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    top: 0,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderColor : '#7492e2'
  },
  checkboxText: {
    marginLeft: 8,
    color : "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});


