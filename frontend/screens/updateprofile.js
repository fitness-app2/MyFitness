// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const UserUpdate = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [profilePic, setProfilePic] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [followers, setFollowers] = useState('');
//   const [posts, setPosts] = useState('');

//   const handleUpdate = async () => {
//     const data = {
//       username,
//       password,
//       profilePic,
//       firstName,
//       lastName,
//       followers,
//       posts,
//     };

//     try {
//       const response = await fetch(`http://localhost:9001/user/update/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         console.log('User updated successfully');
//       } else {
//         console.log('Error updating user');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Profile Picture"
//         value={profilePic}
//         onChangeText={setProfilePic}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setFirstName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={setLastName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Followers"
//         value={followers}
//         onChangeText={setFollowers}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Posts"
//         value={posts}
//         onChangeText={setPosts}
//         style={styles.input}
//       />
//       <Button title="Update User" onPress={handleUpdate} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
// });
// export default UserUpdate;
