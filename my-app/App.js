import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, DefaultTheme } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/sign/signup';
import SignUp2 from './screens/sign/sign2';
import Login from './screens/sign/log';

const Stack = createStackNavigator()

export default function App() {
  return (

    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomeScreen} options={{ title: 'Welcome',headerShown: false  }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ title: 'SignUp',headerShown: false  }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login',headerShown: false }} />
        <Stack.Screen name="SignUp2" component={SignUp2} options={{ title: 'SignUp2',headerShown: false }} />
        {/* <Stack.Screen name="CreatePost" component={CreatePost} options={{ title: 'ProfileComponent',headerShown: false }} />
        <Stack.Screen name="conversations" component={Conversations} options={{ title: 'conversations',headerShown: false  }} />
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false  }} />
        <Stack.Screen name="Acceuil" component={Home} options={{ title: 'Acceuil',headerShown: true  }} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'name',headerShown: true }} />
        <Stack.Screen name="OnePost" component={OnePost} options={{ title: '',headerShown: false , }} />
        <Stack.Screen
  name="OneProfile"
  component={OneProfile}
  options={{
    title: '',
    headerShown: true,
    headerTransparent: true, // Set header background color to transparent
  }}
/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
