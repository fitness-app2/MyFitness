import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';
import client from '../../client';
import Spinner from 'react-native-loading-spinner-overlay';
import link from '../../link';

export default function SignUp2(){
  const navigation=useNavigation()
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

   
    const route = useRoute();
    const {user, name, lastname, email, } = route.params;



    const userCredential={
        id: user.uid,
        username: username,
        firstname: name,
        lastname: lastname,
        email: email,
        profilePic:image ,
        artist: false,
        followers: [],
        birthday: date.toUTCString().slice(5, 16),
        
        follows: [],
  
       
      }


      
    const createAccount= async()=>{
      setLoading(true)
        console.log("pass")
        axios.post(`${link}/users/signup`,userCredential) //check the ip address run cmd ipconfig or contact yassin
       
        .then(res=> {
          setLoading(false)
          navigation.navigate('login')
        })
        .catch(err=>{
          setLoading(false)
          Alert.alert("unexpected error please try again in a couple of minutes")})


    }

    const pickImage = async () => {
        console.log(user.uid)
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        base64: true,
        quality: 1,
      });
     
      setImage("data:image/jpeg;base64,"+result.base64);
  
      if (!result.canceled) {
     
      }
    };
  
    const showPicker = () => {
      setIsPickerShow(true);
    };
  
    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };
  
    return (
      <View style={styles.container}>

<Spinner
      
      visible={loading}
  
      textContent={'Loading...'}
    
      textStyle={styles.spinnerTextStyle}
    />

<Image
        source={require('../../assets/qq.png')}
        fadeDuration={0}
        style={styles.logo}
      />
       
       <TextInput style={styles.input} onChangeText={setUsername} placeholder="username" keyboardType="email-address" />

   <Text style={{color:"grey",
left:-70,
top:30}}>please enter you date of birth</Text>
        {!isPickerShow && (
          <View style={styles.btnContainer}>
            <Button title={date.toUTCString().slice(0, 16)} color="#B4966A" onPress={showPicker} />
          </View>
        )}
  

      
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
<Text style={{color:"grey",top:60}} >select profile pic</Text>
<TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button2} onPress={createAccount} >
        <Text style={styles.buttonText2}>Create your account</Text>
      </TouchableOpacity>
      </View>
    );
    }


    const styles = StyleSheet.create({
        buttonText2: {
            fontSize: 16,
            color: '#FFFFFF',
            left: 80,
            top: 2,
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
        logo: {
            width: 160,
            height: 100,
            top: -150,
          },
        button: {
            backgroundColor: '#B4966A',
            borderRadius: 100,
            width: 65,
            height: 65,
            top: 70,
        },
        buttonText:{
            fontSize: 50,
            color:'#F0EDE4',
            left:16,
            top:-5
        },
        container: {
            backgroundColor: '#F0EDE4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          padding: 30,
        },
        pickedDateContainer: {
          padding: 20,
          backgroundColor: '#eee',
          borderRadius: 10,
        },
        pickedDate: {
          fontSize: 18,
          color: 'black',
        },
        btnContainer: {
          padding: 30,
          width:400,
          borderRadius: 100,
          top:20
        },
      
        datePicker: {
          width: 320,
          height: 260,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        input: {
            width: 370,
            height: 50,
            left: 15,
            top: 1,
            paddingBottom: 5,
            borderBottomWidth: 0.5,
            borderBottomColor: '#A47E53',
          },
          spinnerTextStyle: {
            color: '#FFF',
          },
      });
