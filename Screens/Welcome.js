import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert ,Image} from 'react-native';

import firebase from 'firebase';



export default class Welcome extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    userLogUp=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
         Alert.alert('User created Successfully')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert(errorMessage)
        });
    }

    userLogIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
         Alert.alert('User Logged In Successfully')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert(errorMessage)
        });
    }

  render(){
  return (
    
    <View style={styles.container}>
        <View style={{backgroundColor:'#3895D3'}}>
        <Text style={styles.header}>Barter App</Text>
        </View>
        
       <Image source={require('../assets/barter.gif')} style={{ borderWidth:2,width:200,height:200,borderRadius:20,marginTop:20}}/>

<TextInput style={styles.box } placeholder='Email' onChangeText={
    (text)=>{this.setState({
email:text
})
}}></TextInput>
<TextInput style={styles.box } placeholder='Password' onChangeText={
    (text)=>{this.setState({
password:text
})
}}></TextInput>
<TouchableOpacity style={styles.button} onPress={()=>{this.userLogUp(this.state.email,this.state.password)}}><Text>Sign Up</Text></TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={()=>{this.userLogIn(this.state.email,this.state.password)}}><Text>Log In</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
   
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
      borderWidth:2,
      justifyContent:'center',
      width:250,
      height:40,
      marginTop:20,
      textAlign:'center'
  },
  button:{
      borderWidth:2,
      borderRadius:100,
      width:120,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'lightblue',
      marginTop:20
  },
  header:{
      fontSize:30,
      textAlign:'center'
  }
});
