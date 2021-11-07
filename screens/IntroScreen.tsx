import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {Sizes, Fonts} from "../constants/Layout"
import images from "../constants/Images"

const IntroScreen = () => {
    return (
        <View style={style.main}>
         <ImageBackground source={images.introScreen} style={style.imgageContainer}>
            <View style={style.content}>
              <View style={style.textCont}>
              <Text style={style.heading}>Bring the best of your authentic self to every opportunity</Text>
              </View>
                <View style={style.btnCont}>
                <TouchableOpacity style={style.btn} onPress={() => console.log("hello")}>
                    <Text style={style.text}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn} onPress={() => console.log("hello")}>
                    <Text style={style.text}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>   
        </View>
    )
}

const style = StyleSheet.create({
  main: {
    width: Sizes.width,
    height: Sizes.height,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "space-mono",
    
  },
  imgageContainer: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  btnCont: {
      flex: 0.3,
      width: "100%",
      height: 180,
      padding: 10,
  },
  textCont: {
    flex: 0.7,
    justifyContent: "center"
  },
  btn : {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: Sizes.radius,
      marginBottom: Sizes.base *3

  },
  text: {
    ...Fonts.body2,
    color: "black"
  },
  heading: {
    ...Fonts.style2,
    textAlign: "center",
    color: "white"
  }
})

export default IntroScreen
