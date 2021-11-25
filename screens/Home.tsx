import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainpageParams, mainpageProp } from "../constants/Types";
import Feeds from "./Feeds";
import ViewImage from "../components/ViewImage";
import Nottification from "./Nottification";

const Stack = createNativeStackNavigator<MainpageParams>();
const Home = ({route, navigation}: mainpageProp) => {
 console.log("state " + navigation.getState().routeNames)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Feeds"
    >
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="ViewImage" component={ViewImage} />
      <Stack.Screen name="Nottification" component={Nottification} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "space-mono",
    backgroundColor: "yellow",
  },
});

export default Home;
