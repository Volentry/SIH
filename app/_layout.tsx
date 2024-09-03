import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { ScreenStackHeaderConfig } from "react-native-screens";

export default function RootLayout() {

  useFonts({
    'oswald':require('./../assets/fonts/Oswald-Regular.ttf'),
     'oswald-medium' : require('./../assets/fonts/Oswald-Medium.ttf')
  })
  return (
    <Stack  screenOptions={{headerShown:false}}>
     <Stack.Screen name="index"></Stack.Screen>
      {/* <Stack.Screen name="(tabs)"></Stack.Screen> */}
    </Stack>
  )
}
