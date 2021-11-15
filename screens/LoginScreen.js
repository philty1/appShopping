import React from "react";
import { SafeAreaView, Text, Image, TextInput, TouchableOpacity,StyleSheet, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

  export default function LoginScreen(params) {
  
  const navigation = params.navigation;


  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber ] = React.useState(null);

 

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./../assets/prt.jpg')} resizeMode="cover" style={styles.image}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Email or username"
        
      />
      <TextInput
        style={styles.inputt}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter password"
       
       
      />
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={{
          padding: 15,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
         // flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
        <Text style={{ justifyContent:"center", color: "white", fontSize:23, }}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end"
  },
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 3,
      borderRadius:10,
      padding: 10,
      borderColor: 'white',
      backgroundColor:"white",
      color:"black",
      fontSize:20

      
    },
    inputt: {
      height: 40,
      margin: 10,
      borderWidth: 3,
      borderRadius:10,
      padding: 10,
      borderColor: 'white',
      color:"black",
      backgroundColor:"white",
      fontSize:20
     
    }
});



