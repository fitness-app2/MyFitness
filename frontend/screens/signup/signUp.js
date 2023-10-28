import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import { ButtonGroup } from '@rneui/themed'
import {  useNavigation } from '@react-navigation/native';
import { firebase } from '../../fireBase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Spinner from 'react-native-loading-spinner-overlay';


export default function SignUp() {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName]= useState('');
  const [lastname, setLastname]= useState('');
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false);




  const auth = getAuth();

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  
  const handleSignUp=()=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setLoading(false)
      navigation.navigate('SignUp2',{user : user, name : name, lastname : lastname , email:email, pass:pass});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      if(errorCode==="auth/weak-password"){
        setLoading(false)
        Alert.alert('weak-password')
      }
      if(errorCode==="auth/invalid-email"){
        setLoading(false)
        Alert.alert('invalid-email')
      }
      if(errorCode==="auth/email-already-in-use"){
        setLoading(false)
        Alert.alert('email-already-in-use')
      }
      
    });
  }

  return (
    <View style={styles.container}>

<Spinner
      
          visible={loading}
      
          textContent={'Loading...'}
        
          textStyle={styles.spinnerTextStyle}
        />



      {/* <ButtonGroup
        buttons={['LOG IN', 'SIGN UP']}
        selectedIndex={1}
        onPress={() => navigation.navigate('login')}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton} 
      /> */}
     <Text style={styles.Text}>SIGN UP</Text>
      <TextInput style={styles.input4} onChangeText={setName} placeholder="First name" keyboardType="email-address" />
      <TextInput style={styles.input3} onChangeText={setLastname} placeholder="Last name" keyboardType="email-address" />
      <TextInput style={styles.input2} onChangeText={setEmail} placeholder="email-address" keyboardType="email-address" />
      <TextInput style={styles.input1} onChangeText={setPass} placeholder="password" keyboardType="default" secureTextEntry={true} />
      

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        If you have an account,{' '}
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginLink}>log in</Text>
        </TouchableOpacity>
      </Text>
      
      <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Login pressed')}>
        {/* <Text style={styles.buttonText2}>SIGN UP WITH GOOGLE</Text> */}
      </TouchableOpacity>

      {/* <Image
        source={require('../../assets/qq.png')}
        fadeDuration={0}
        style={styles.logo}
      /> */}
      <Image
        source={require('../../assets/Google__G__Logo.png.webp')}
        fadeDuration={0}
        style={styles.googleLogo}
      />
        <Image
        source={require('../../assets/book.jpg')}
        fadeDuration={0}
        style={styles.facebook}
      />
       <Image
        source={require('../../assets/39386d212ac9a4626cd4f3fb25466503.jpg')}
        fadeDuration={0}
        style={styles.instagram}
      />
      <Text style={styles.footer}>© fitnessy 2023</Text>
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
    backgroundColor: '#B4966A',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius:10,
    marginTop: 70,
    width: 207,
    height: 55,
    top: 50,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
    left: 55,
    top: 8,

  },
  Text: {
    fontSize: 40,
    color: 'black',
    left: 1, 
    top: 5,

  },
  buttonText2: {
    fontSize: 16,
    color: '#FFFFFF',
    left: 70,
    top: 5,
  },
  input1: {
    width: '80%',
    height: 50,
    left: 2,
    top: 80,
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
    top: 80,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    
  },
  input3: {
    width: '80%',
    height: 50,
    left: 2,
    top: 80,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  input4: {
    width: '80%',
    height: 50,
    left: 2,
    top: 80,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
    margin: 10,
    borderRadius: 10,
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
    width: 22,
    height: 20,
    top: 77,
    left: -30,
  },
  footer: {
    
    fontSize: 10,
    color: 'black',
    top: 80,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  instagram:{
    width: 25,
    height: 25,
    top: 15,
    left: 1,
  },
  facebook:{
    width: 25,
    height: 39,
    top: 49,
    left: 30,
  },
  loginLink: {
    color: 'black',
    textDecorationLine: 'underline', 
    fontSize: 16,
    left: 1, 
    top: 5,
  },
  loginText: {
    fontSize: 10,
    color: 'black',
    left: 1, 
    top: 60,

  }
  ,

});
