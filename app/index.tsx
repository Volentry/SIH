import { Text, View } from "react-native";
import { Image } from "react-native-reanimated/lib/typescript/Animated";
import LandingPage from './../components/LandingPage'
import {auth} from './../configs/FirebaseConfig'
import { Redirect } from "expo-router";





export default function Index() {
  const user = auth.currentUser ;
  return (
    <View style={{flex:1}}>
      {user? 
      <Redirect href={'/tpkh'} /> :
      <LandingPage></LandingPage>
   
      }
   
    </View>
  );
}