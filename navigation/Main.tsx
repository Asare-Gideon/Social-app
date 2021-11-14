import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import { HomeTabParams } from '../constants/Types';
import Search from '../screens/Search';
import PostScreen from '../screens/PostScreen';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import { AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons';
import { Colors } from '../constants/Layout';


const Tab = createBottomTabNavigator<HomeTabParams>();

const Main = () => {
    return (
       <Tab.Navigator
       screenOptions={{
           headerShown : false,
           title : "",
           tabBarStyle : {
               elevation: 0,
               borderTopWidth: 0,
               backgroundColor: "white",
               padding: 0,
               position: "absolute",
            
           },
         
       }}
       >
           <Tab.Screen name="Home" component={Home}
           options={{
               tabBarIcon: ({focused}) => (
                   <View style={styles.iconCont}>
                       <View>
                           <Feather name="home" size={20} color={focused ? Colors.secondary : Colors.black} />
                       </View>
                   </View>
               )
           }}
           />
           <Tab.Screen name="Search" component={Search}
           options={{
               tabBarIcon: ({focused}) => (
                   <View style={[styles.iconCont]}>
                       <View>
                           <EvilIcons name="search" size={35} color={focused ? Colors.secondary : Colors.black} />
                       </View>
                   </View>
               )
           }}
           />
           <Tab.Screen name="Post" component={PostScreen}
           options={{
               tabBarIcon: ({focused}) => (
                   <View style={{
                       backgroundColor: Colors.secondary,
                       padding: 13,
                       elevation: 1,
                       borderRadius: 30,
                       position: "absolute",
                       bottom: 15,
                       borderWidth: 5,
                       borderColor: "#ddd",
                       zIndex: 999
                       
                   }} >
                       <View>
                           <Entypo name="plus" size={25} color={focused ? Colors.black : Colors.white} />
                       </View>
                   </View>
               )
           }}
           />
           <Tab.Screen name="Favorites" component={Favorite}
              options={{
               tabBarIcon: ({focused}) => (
                   <View style={styles.iconCont}>
                       <View>
                           <EvilIcons name="heart" size={30} color={focused ? Colors.secondary : Colors.black} />
                       </View>
                   </View>
               )
           }}
           />
           <Tab.Screen name="Profile" component={Profile}
            options={{
        
               tabBarIcon: ({focused}) => (
                   <View style={styles.iconCont}>
                       <View>
                           <AntDesign name="info" size={30} color={focused ? Colors.secondary : Colors.black} />
                       </View>
                   </View>
               )
           }}
           />
           
       </Tab.Navigator> 
    )
}

const styles = StyleSheet.create({
    iconCont: {
        display: 'flex'
    },
    
})

export default Main
