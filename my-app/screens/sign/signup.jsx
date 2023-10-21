import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
// import { CheckBox } from 'react-native-elements';

// import { SocialIcon } from 'react-native-elements'
import { ButtonGroup } from '@rneui/themed'
import {  useNavigation } from '@react-navigation/native';
import { auth} from "../../Firebase/index";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Spinner from 'react-native-loading-spinner-overlay';


export default function SignUp() {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstname, setName]= useState('');
  const [lastname, setLastname]= useState('');
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false);




 

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
      navigation.navigate('SignUp2',{user : user, name : firstname, lastname : lastname , email:email, pass:pass});
    }) .catch ((error)=> {
    Alert.alert("Error", error.message);
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
        selectedIndex={1}
        onPress={() => navigation.navigate('login')}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton} 
      />
      <TextInput style={styles.input} onChangeText={setName} placeholder="First name" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setLastname} placeholder="Last name" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setEmail} placeholder="email-address" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPass} placeholder="password" keyboardType="default" secureTextEntry={true} />
      

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button2} onPress={() => Alert.alert('Login pressed')}>
        <Text style={styles.buttonText2}>SIGN UP WITH GOOGLE</Text>
      </TouchableOpacity>

     
      <Image
        source={require('../../assets/Google__G__Logo.png.webp')}
        fadeDuration={0}
        style={styles.googleLogo}
      />
      <Text style={styles.footer}>© Fitness app 2023</Text>
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
    top: 110,
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
    top: -25,
    left: -130,
  },
  footer: {
    
    fontSize: 10,
    color: '#A47E53',
    top: 10,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});