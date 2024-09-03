
import { View, Text,Image,StyleSheet,Button,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


export default function LandingPage() {
    const router = useRouter();
  return (<ScrollView>
    <View  >
      <Image 
        source={require('./../assets/images/image1.png')}
        style={{width:'100%',
        height:450}}
      />
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontFamily:'oswald-medium' ,fontSize:30,paddingTop:30}}>TPKH PSI calc.</Text>
        <Text style={{textAlign:'center',color:'grey',paddingTop:20}}>An app for coal dumpers using TPKH calculations could optimize load efficiency, track coal metrics, and enhance operational management.</Text>

         <TouchableOpacity
         style={styles.button}
         onPress={()=>router.push('auth/signin')}  
         >
     
        <Text style={{color:'white',textAlign:'center', fontFamily:'oswald', fontSize:15}}>Getting Started</Text>
      </TouchableOpacity>
      </View>
     
    </View></ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
        padding:20,
        marginTop:-20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    button:{
        backgroundColor:'black'
        ,borderRadius:25,
        padding:20,
        marginTop:'30%'

    }
})
