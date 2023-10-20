// import React, { useState } from 'react';
// import { View, Text, TextInput, ImageBackground,TouchableOpacity, StyleSheet } from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown';

// import axios from 'axios';
// import ADRESS_API from '../API';

// const Signup = ({navigation}) => {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [image,setImage]=useState("")
//   const [loading, setLoading] = useState(false);
//   const [selectedRole, setSelectedRole] = useState('');
//   const roleOptions = ['Coach', 'User'];
 

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);

//       const response = await axios.post(`http://10.0.2.2:3000/clients/register`, {
//         username: username,
//         email: email,
//         password: password,
//       });

//       if (response.status === 201) {
//         console.log('Registration successful');
//         navigation.navigate('Signin'); 
//       } else {
//         console.log('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <ImageBackground
//       style={styles.container}
//       source={{
//         uri:
//           'https://storage.googleapis.com/pai-images/d1d02f7772e24d33ba373629691ec9c0.jpeg',
//       }}
//     >
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Create an account</Text>
//         <Text style={styles.subtitle}>Enter your details below</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           placeholderTextColor="white"
//           onChangeText={(text) => setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email or Phone Number"
//           placeholderTextColor="white"
//           onChangeText={(text) => setEmail(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           placeholderTextColor="white"
//           onChangeText={(text) => setPassword(text)} 
//         />
      
//         <SelectDropdown
//           data={roleOptions}
//           onSelect={(selectedItem) => setSelectedRole(selectedItem)}
//           buttonTextAfterSelection={(selectedItem) => selectedItem}
//           rowTextForSelection={(item) => item}
//           defaultButtonText="Choose Coach or User"
//           buttonStyle={styles.dropdownButton}
//           buttonTextStyle={styles.dropdownButtonText}
//           renderDropdownIcon={() => (
//             <Text style={styles.dropdownIcon}>▼</Text>
//           )}
//           dropdownStyle={styles.dropdownContainer}
//           dropdownTextStyle={styles.dropdownText}
//           dropdownTextHighlightStyle={{ color: 'white' }} 
//         />
//         <TouchableOpacity
//           style={styles.button}
//         // onPress={() => navigation.navigate('')} 
//           onPress={handleSubmit} 
//         >
//          <Text style={styles.buttonText}>Create Account</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('Signin')} 
//         >
//           <Text style={styles.linkText}>Log in</Text>
//         </TouchableOpacity>
        
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     padding: 20,
//     width: '80%',
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     color: 'white',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'red',
//     padding: 10,
//     textAlign: 'center',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   linkText: {
//     color: 'white',
//     fontSize: 16,
//     textDecorationLine: 'underline',
//   },
//   dropdownButton: {
//     backgroundColor: 'white',
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 40,
//     justifyContent: 'center',
//     paddingLeft: 10,
//     marginBottom: 10,
//   },
//   dropdownButtonText: {
//     color: 'black',
//   },
//   dropdownIcon: {
//     color: 'white',
//     fontSize: 20,
//     paddingRight: 10,
//   },
//   dropdownContainer: {
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 5,
//   },
//   dropdownText: {
//     color: 'white',
//   },
// });

// export default Signup;
