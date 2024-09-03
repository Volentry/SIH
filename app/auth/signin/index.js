import { View, Text,StyleSheet,TextInput, ToastAndroid,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import {auth} from './../../../configs/FirebaseConfig';



export default function Signin() {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({headerShown:false})


  },[])
   

  const[email,setEmail] = useState();
  const[password,setPassword] = useState()
    const authenticationUsers = ()=>{
      if(!email&&!password){
        ToastAndroid.show("Please fill all details",ToastAndroid.LONG)
        return ;
      }
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/psi')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    ToastAndroid.show('Incorrect vehicleid/password',ToastAndroid.BOTTOM)
    
  });
    }

   const styles = StyleSheet.create({
       inputBox:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:10,
        fontFamily:'oswald',
        padding:10
       },
       ButtonSn:{
        backgroundColor:'black',
        padding:'3%',
        borderRadius:18,
       marginVertical:'20%'
       }
  })
  return (
    <View style={{
      padding:25,
  
    }}>
       <View style={{marginVertical:'20%'}}>
      <Text style={{fontFamily:'oswald-medium',fontSize:30 ,marginTop:'25%'}}>Lets Sign you in ,</Text>
      <Text style={{fontFamily:'oswald',fontSize:25 ,marginTop:10,color:'grey'}}>Welcome Back</Text>
       </View>
      <View style={{marginTop:20}}>
         <Text style={{fontFamily:'oswald'}}   >VehicleID</Text>
        <TextInput placeholder='Enter vehicleID'  style={ styles.inputBox}   onChangeText={(value)=>setEmail(value)}></TextInput>
      </View>
      <View style={{marginTop:20}}>
          <Text style={{fontFamily:'oswald'}}>Password</Text>
        <TextInput placeholder='Enter Password'  onChangeText={(value)=>setPassword(value)}  secureTextEntry={true} style={ styles.inputBox}></TextInput>
      </View>

      <TouchableOpacity style={styles.ButtonSn} onPress={authenticationUsers}>
        <Text style={{fontFamily:'oswald', color:'white',textAlign:'center'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )

 

  
}