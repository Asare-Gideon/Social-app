import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { NavigationContainer } from "@react-navigation/native";
import Initital from "./navigation/Initital";
import Main from "./navigation/Main";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (isLogin) {
      return (
        <NavigationContainer>
          <Main />
          <StatusBar />
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Initital />
          <StatusBar />
        </NavigationContainer>
      );
    }
  }
}
