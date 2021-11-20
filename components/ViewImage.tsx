import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, TouchableOpacity } from "react-native";
import images from "../constants/Images";
import { Colors, Fonts, Sizes } from "../constants/Layout";
import { viewImageProp } from "../constants/Types";

const ViewImage = ({route, navigation,}: viewImageProp) => {

const {description, image} = route.params as any;

  return (
  <View style={{
    width: Sizes.width,
    height: Sizes.height,
  }}>
    <ImageBackground source={image} style={{
      width: "100%",
      height: "100%",
    }} >
    <TouchableOpacity style={{
      position: "absolute",
      top: 30,
      right: 10
    }}>
      <Entypo name="dots-three-vertical" size={22} />
    </TouchableOpacity>
 
    <View style={
      {
        position: "absolute",
        bottom: 90,
        width: "100%",
        alignItems: "center"
      }
    }>
      <Text
      style={{
        width: "80%",
        color: Colors.white,
        ...Fonts.body3,
        textAlign: "center"
      }}
      >{description}</Text>
    </View>

    </ImageBackground>
    
  </View>
  );
};



export default ViewImage;