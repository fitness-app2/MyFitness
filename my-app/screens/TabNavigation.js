import { View, Text, Platform} from 'react-native'
import React from 'react'
import{Chat,Create,Profile,Search,Home} from "../screens/Index" 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons,Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  keyboardHidesTabBar: true,
  tabBarStyle: {
    backgroundColor: 'black', // Use a transparent background
    borderTopWidth: 0, // Remove the top border
    width: '100%', // Set the width to 90% of the screen width
    alignSelf: 'center', // Center the tab bar horizontally
  },
  tabBarItemStyle: {
    flex: 1, // Make each tab item take up equal space
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
  },
};


export default function TabNavigation() {
  return (
    <Tab.Navigator {...{ screenOptions }}>
<Tab.Screen name="Home" component={Home} options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Octicons name="home" size={30} color={focused ? "white": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />
<Tab.Screen name="Chat" component={Chat} options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Ionicons name="ios-chatbubble-ellipses-sharp" size={29} color={focused ? "white": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />
<Tab.Screen name="Create" component={Create}   options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "black",
                  width: Platform.OS == 'android' ? 60 : 60,
                  height: Platform.OS == 'android' ? 60 : 60,
                  top: Platform.OS == 'android' ? -20 : -25,
                  borderRadius: Platform.OS == 'android' ? 25 : 30,
                 }}
                >
                  <AntDesign name="pluscircle" size={35} color={focused ? "white": "#A7A6AA"} />
                </View>
              )
            }
           }} />
<Tab.Screen name="Search" component={Search}  options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<FontAwesome name="search"size={30} color={focused ? "#241061": "#A7A6AA"} />   

  </View>
    )
  }
  
}} />
<Tab.Screen name="Profile" component={Profile}  options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Ionicons name="md-person-circle-sharp"size={35} color={focused ? "#241061": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />


    </Tab.Navigator>
  )
}
