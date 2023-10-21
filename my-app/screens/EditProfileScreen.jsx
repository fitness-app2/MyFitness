import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text, TextInput, ScrollView, Image } from "react-native";

const ProfileEdit = () => {
  const [username, setUsername] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [institute, setInstitute] = React.useState("");
  const [updatePassword, setUpdatePassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleProfilePictureChange = () => {
    
    ImagePicker.showImagePicker({
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } 
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } 
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } 
    });
  };


  return (
    <ScrollView style={styles.profileEdit}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/Ouini.jpg")}
        />
       <TouchableOpacity style={styles.changePictureButton} onPress={handleProfilePictureChange}>
          <Text style={styles.changePictureButtonText}>Change Profile Picture</Text>
        </TouchableOpacity>
        
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Id"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Institute"
        value={institute}
        onChangeText={text => setInstitute(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Update Password"
        value={updatePassword}
        onChangeText={text => setUpdatePassword(text)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={text => setCity(text)}
      />

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileEdit: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  
  changePictureButtonText: {
    marginTop: 10,
    color: "blue",
    fontSize: 14,
    textAlign: "center",
  },

  profileEdit: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changePicture: {
    color: "#007BFF",
    fontSize: 14,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#a9a9a9",
    borderStyle: "solid",
    borderRadius: 8,
    width: "90%",
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: "5%",
  },
  updateButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    width: "90%",
    marginLeft: "5%",
  },
  updateText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});

export default ProfileEdit;
