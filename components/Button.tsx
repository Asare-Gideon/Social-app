import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Colors,Sizes,Fonts} from "../constants/Layout"

interface Props {
  title: string;
  onPress?: () => void;
  BackgroundColor?: string;
  color? : string
}

const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={style.btn} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
      btn : {
      backgroundColor: Colors.white,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: Sizes.radius,
      marginBottom: Sizes.base *3

  },
  text: {
    ...Fonts.style,
    color: Colors.darkgray,
  },
});

export default Button;
