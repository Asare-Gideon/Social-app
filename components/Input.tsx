import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import images from '../constants/Images'
import { Sizes } from '../constants/Layout'

const Input = () => {
    return (
        <View
        style={{
            width: "100%",
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "center"
        }}
         >
           <Image source={images.friends[3]} style={{
               width: 40,
               height: 40,
               borderRadius: Sizes.radius
           }} />
           <View style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               width: "85%",

           }}>
             <TextInput multiline placeholder="Add content...." style={{paddingTop: 15, marginLeft: 5, width: "80%"}} />
            <TouchableOpacity style={{
                marginTop: 10
            }}>
            <MaterialCommunityIcons name="send" size={25} />    
            </TouchableOpacity> 
           </View>
        </View>
    )
}

export default Input
