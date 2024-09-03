import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown:false , tabBarActiveTintColor:'black'}}>
        <Tabs.Screen  options={{tabBarLabel:'TPKH' , tabBarIcon:({color})=><AntDesign name="dingding" size={24} color={color} />}} name='tpkh'></Tabs.Screen>
        <Tabs.Screen options={{tabBarLabel:'PSI' , tabBarIcon:({color})=><AntDesign name="dashboard" size={24} color={color} />}} name='psi'></Tabs.Screen>
    </Tabs>
  )
}