// import React, {useState} from 'react';
// import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet,ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import ADRESS_API from '../API';



//   const Signin = ({navigation}) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
 
  
//     const handleSubmit = async () => {
//       try {
//         setLoading(true);
//         setError(''); 
  
//         const response = await axios.post(`http://10.0.2.2:3000/clients/login`, {
//           email,
//           password,
//         });
  
//         if (response.status === 200) {
//           console.log('Login successful');
  
//           navigation.navigate('TabNavigation'); 
//           const profileResponse = await axios.get(`http://10.0.2.2:3000/profileUsers`);
  
//           if (profileResponse.status === 200) {
//             const profileData = profileResponse.data;
//             console.log('User profile:', profileData);

//           } else {
//             console.log('Failed to fetch user profile');
//           }
//         } else if (response.status === 401) {
//           setError('Invalid username or password');
//         } else {
//           setError('Login failed');
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//         setError('An error occurred during login');
//       } finally {
//         setLoading(false);
//       }
//     };



//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.image}
//         source={{
//           uri:
//             'https://www.bodybuilding.com/images/2017/june/is-your-cellphone-ruining-your-workout-tall.jpg',
//         }}
//       >
//         <View style={styles.overlay}>
//           <View style={styles.formContainer}>
//             <Text style={styles.title}>Log in to Exclusive</Text>
//             <Text style={styles.subtitle}>Enter your details below</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Email or Phone Number"
//               placeholderTextColor="white"
//               onChangeText={(text) => setEmail(text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               secureTextEntry
//               placeholderTextColor="white"
//               onChangeText={(text) => setPassword(text)}
//             />
            
//             <TouchableOpacity style={styles.button}
//                           onPress={handleSubmit}
//               disabled={loading}
//               >
//                  {loading ? (
//                 <ActivityIndicator size="small" color="white" />
//               ) : (
//               <Text style={styles.buttonText}  >Log In</Text>
//               )}
//               </TouchableOpacity>
            
//             <TouchableOpacity style={styles.forgotPasswordButton}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>
           
//             <Text style={styles.error}>{error}</Text>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)', 
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   formContainer: {
//     alignItems: 'center',
//     padding: 20,
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
//     width: 300,
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     color: 'white', 
//   },
//   button: {
//     backgroundColor: 'red',
//     width: 300,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   forgotPasswordButton: {
//     marginTop: 10,
//   },
//   forgotPasswordText: {
//     color: 'white',
//     fontSize: 16,
//     textDecorationLine: 'underline',
//   },
//   error: {
//     color: 'red',
//     fontSize: 16,
//   },
// });

// export default Signin;
