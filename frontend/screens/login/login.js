import React,{useState} from 'react';
import {  useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
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
    <View style={styles.container}>
      <Spinner
      
      visible={loading}
  
      textContent={'Loading...'}
    
      textStyle={styles.spinnerTextStyle}
    />
      <ButtonGroup
        buttons={['LOG IN', 'SIGN UP']}
        selectedIndex={0}
        onPress={() => navigation.navigate('Signup')}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton} // Set the selected button color
      />
      <TextInput style={styles.input} onChangeText={setEmail} placeholder="email-address" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPass} placeholder="password" keyboardType="default" secureTextEntry={true} />
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
        <CheckBox
          checked={isSelected}
          onPress={toggleCheckbox}
          checkedColor="#A47E53"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxText}>Remember me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword} onPress={resetPassword} >Forgot password?</Text>
      <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Login pressed')}>
        <Text style={styles.buttonText2}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/qq.png')}
        fadeDuration={0}
        style={styles.logo}
      />
      <Image
        source={require('../../assets/Google__G__Logo.png.webp')}
        fadeDuration={0}
        style={styles.googleLogo}
      />
      <Text style={styles.footer}>© Valeria 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroupContainer: {
    marginBottom: 20,
    marginTop: 100,
    top:100
  },
  selectedButton: {
    backgroundColor: '#B4966A', // Set the selected button color
  },
  button: {
    backgroundColor: '#B4966A',
    padding: 10,
    borderRadius: 55,
    marginTop: 50,
    width: 327,
    height: 55,
    top: 150,
  },
  button2: {
    backgroundColor: '#B4966A',
    padding: 10,
    borderRadius: 55,
    marginTop: 50,
    width: 327,
    height: 55,
    top: 200,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    left: 125,
    top: 5,
  },
  buttonText2: {
    fontSize: 16,
    color: '#FFFFFF',
    left: 70,
    top: 5,
  },
  input: {
    width: 370,
    height: 50,
    left: 15,
    top: 150,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#A47E53',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    top: 170,
    right: 100,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  checkboxText: {
    marginLeft: 8,
  },
  forgotPassword: {
    top: 180,
    fontSize: 11,
  },
  logo: {
    width: 160,
    height: 100,
    top: -500,
  },
  googleLogo: {
    width: 20,
    height: 20,
    top: 62,
    left: -130,
  },
  footer: {
    
    fontSize: 10,
    color: '#A47E53',
    top: 150,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
