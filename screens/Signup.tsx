import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Sizes, Colors, Fonts } from "../constants/Layout";

const Signup = () => {
  return (
    <View style={styles.main}>
      <View style={styles.topCont}></View>
      <View style={styles.botCont}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: Sizes.height,
    width: Sizes.width,
    backgroundColor: Colors.secondary,
  },
  topCont: {
    flex: 0.3,
    width: "100%",
    
  },
  botCont: {
    flex: 0.7,
    width: "100%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
});

export default Signup;
