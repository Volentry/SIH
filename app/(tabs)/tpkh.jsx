import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import {auth} from './../../configs/FirebaseConfig'
import { useRouter } from 'expo-router';



export default function tpkh() {
  const router = useRouter();

 
    

 const logout = ()=>{
  signOut(auth).then(() => {
  
 router.replace('/auth/signin');
 
}).catch((error) => {
  // An error happened.
});
 }
    return (
    <TouchableOpacity  onPress={logout}  style={{margin:'20%'}} >
      <Text>tpkh</Text>
    </TouchableOpacity>
  )
}