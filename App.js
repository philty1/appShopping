import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import DetailsScreen from './screens/DetailsScreen';


export default function App() {
  const Nav= createStackNavigator();

  return (
    <View  style={{flex:1}}>
      <NavigationContainer>
        <Nav.Navigator screenOptions={{headerShown:false}} >
          <Nav.Screen style={styles.container}  name="SplashScreen" component={SplashScreen}/>
          <Nav.Screen  name="LoginScreen" component={LoginScreen}/>
          <Nav.Screen  name="HomeScreen" component={HomeScreen}/>
          <Nav.Screen  name="Details" component={DetailsScreen}/>
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
