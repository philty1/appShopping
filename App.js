import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen"; 


export default function App() {
  const Nav= createStackNavigator();

  return (
    <View  style={{flex:1}}>
      <NavigationContainer>
        <Nav.Navigator  >
          <Nav.Screen style={styles.container}  name="SplashScreen" component={SplashScreen}/>
          <Nav.Screen  name="LoginScreen" component={LoginScreen}/>
          <Nav.Screen  name="HomeScreen" component={HomeScreen}/>
        </Nav.Navigator>
      </NavigationContainer>

    </View>
  );
}

 const styles = StyleSheet.create({
   container: {
   //  flex: 1,
    backgroundColor: 'black',
   alignItems: 'center',
 justifyContent: 'center'
   },
 });
