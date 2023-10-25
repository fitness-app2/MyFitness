import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image,ImageBackground ,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {Ionicons} from "react-native-vector-icons"



const WelcomeScreen = () => {




  const navigation=useNavigation()
  
  return (
    
 <Onboarding


onSkip={ () => navigation.navigate("Home")}
onDone={ () => navigation.navigate("Signup")}


      pages={[
        
        {backgroundColor:'darkorange',
        image: (
          <ImageBackground
            style={styles.image}
            source={require('../assets/hello.png')}
            resizeMode="cover"
          >
            
            <Text style={styles.title}>Welcome to MyFitness</Text>
            <Ionicons name="calendar-outline" size={32} color='green' />
            <Text style={styles.subtitle}>
            where users and coaches unite for a healthier community, fostering fitness inspiration, support, and expert guidance. Join us in the fitness revolution!            </Text>
          </ImageBackground>
        ) 
        },
        {backgroundColor:'dimgray',
        image: (
          <ImageBackground
            style={styles.image}
            source={require('../assets/ttt.jpg')}
            
          >
            <Text style={styles.members}>Welcome Members</Text>
            <Text style={styles.subtitle}>
            your fitness companion! Join our vibrant community, connect with like-minded individuals, and start your healthier journey today. Download the app now!            </Text>
          </ImageBackground>
        ) 
        },
        {backgroundColor:'teal',
        image: (
          <ImageBackground
            style={styles.image}
            source={require('../assets/77.jpg')}
          >
            <Text style={styles.coaches}>Welcome Coaches</Text>
            <Text style={styles.subtitle}>
            Unlock your coaching potential on, where you'll be the catalyst for life transformations. Join us now to inspire and empower!            </Text>
          </ImageBackground>
        ) 
        },
       
      ]}
      
    />

    
   
  );
};

const styles = StyleSheet.create({
  image: {
    
    height: '100%',
    width: '100%',
    zIndex: 0,
    
  },
  title: {
    fontSize: 30, 
    color: 'white', 
    position: 'absolute',
    top: '75%', 
    left: 60, 
    zIndex: 1,
    fontWeight: 'bold',
    justifyContent:"center"
    
  },
  subtitle: {
    fontSize: 15, 
    color: 'white', 
    position: 'absolute',
    top: '85%', 
    left: 0.1,
    zIndex: 1, 
    fontWeight: 'bold',
    textAlign: 'center',
    width:'100%',
    height: '100%',
    justifyContent:"center"

  },
  coaches:{
    fontSize: 30, 
    color: 'white',
    position: 'absolute',
    top: '75%', 
    left: 79,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  members:{
    fontSize: 30, 
    color: 'white', 
    position: 'absolute',
    top: '75%',
    left: 79, 
    zIndex: 1, 
    fontWeight: 'bold',

  }
});

export default WelcomeScreen;