import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Colors, Sizes } from '../constants/Layout'
import { friendsProps } from '../constants/Types'

const Friends = ({title, image}: friendsProps) => {
   var text;

    text = title.split(" ")[0];

    if(text.length > 7){
        text = `${text.substring(0, 5)}...`;
    }
 
    return (
        <TouchableOpacity style={{
            paddingLeft: 10,
            width: 70,
            paddingBottom: 6
        }}>
            <View style={{
                borderWidth: 1,
                height : 60,
                width : 60,
                borderRadius: Sizes.radius,
                borderColor: "#56ceef",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={image} 
                 style={{
                     height: 50,
                     width: 50,
                     borderRadius: Sizes.radius,
                 }}
                />
            </View>
            <Text
            style={{
                textAlign: "center",
                color : Colors.darkgray
            }}
            >{text}</Text>
        </TouchableOpacity>
    )
}

export default Friends
