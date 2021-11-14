import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainpageParams } from '../constants/Types'
import Feeds from './Feeds'

const Stack = createNativeStackNavigator<MainpageParams>();
const Home: React.FC = () => {
    return (
     <Stack.Navigator
     screenOptions={{
       headerShown: false
     }}
     >
       <Stack.Screen name="Feeds" component={Feeds} />
     </Stack.Navigator> 
    )
}

const style = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "space-mono",
    backgroundColor: "yellow"
  },

})

export default Home
