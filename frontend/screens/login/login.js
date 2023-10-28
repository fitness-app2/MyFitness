import React,{useState} from 'react';
import {  useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import { ButtonGroup } from '@rneui/themed'
import { firebase } from '../../fireBase';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import link from '../../link';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {
    const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [isSelected, setSelection] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData]=useState({})
  const auth = getAuth();

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully!');
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };
  

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(email, "email")
        alert('password reset email has been sent successfully')
      })
      .catch((error) => {
        alert('Please enter a valid email', error);
      });
  }
  const userlogin=(id)=>{
axios.get(`${link}/users/login/${id}`) 
.then(res=>{
  setLoading(false)
  storeData("current",id)
  
  navigation.navigate('TabNav',{user : res.data})
  setUserData(res.data)})
.catch(err=>{
  setLoading(false)
  console.log(err)
  Alert.alert(err)})

  }

  const loginHandler = () => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, pass)
    .then(userCredentials => {
      const user = userCredentials.user
      userlogin(user.uid)
    })
    .catch(error => {
      setLoading(false)
      const errorCode = error.code
      const errorMessage = error.message
      Alert.alert(errorCode)
    })
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <Spinner
      
      visible={loading}
  
      textContent={'Loading...'}
    
      textStyle={styles.spinnerTextStyle}
    />
      {/* <ButtonGroup
        buttons={['LOG IN', 'SIGN UP']}
        selectedIndex={0}
        onPress={() => navigation.navigate('Signup')}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton} // Set the selected button color
      /> */}
      <TextInput style={styles.input1} onChangeText={setEmail} placeholder="email-address" keyboardType="email-address" />
      <TextInput style={styles.input2} onChangeText={setPass} placeholder="password" keyboardType="default" secureTextEntry={true} />
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
        <CheckBox
          checked={isSelected}
          onPress={toggleCheckbox}
          checkedColor="black"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxText}>Remember me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword} onPress={resetPassword} >Forgot password?</Text>
      {/* <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Login pressed')}>
        <Text style={styles.buttonText2}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity> */}
{/* 
      <Image
        source={require('../../assets/qq.png')}
        fadeDuration={0}
        style={styles.logo}
      /> */}
 
      <Text style={styles.footer}>© Fitnessy 2023</Text>
    </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EDE4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  input1: {
    width: '80%',
    height: 50,
    left: 2,
    top: 50,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  input2: {
    width: '80%',
    height: 50,
    left: 2,
    top: 30,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius:10,
    marginTop: 70,
    width: 177,
    height: 55,
    top:2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    left: 46,
    top : 5
  },
  button2: {
    width: '80%',
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: 18,
  
  },
  buttonGroupContainer: {
    width: '80%',
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    top : 60
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: -7,
    top : 58
  },
  forgotPassword: {
    fontSize: 16,
    color: 'black',
    margin: 10,
  },
  logo: {
    width: 60,
    height: 100,
    marginBottom: 20,
  },
  googleLogo: {
    width: 50,
    height: 50,
    
  },
  footer: {
    position: 'relative',
    bottom: 10,
  },
  spinnerTextStyle: {
    color: 'grey',
  },
});

