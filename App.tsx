import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Home from './screens/Home';
import IntroScreen from './screens/IntroScreen';



export default function App() {
  const isLoadingComplete = useCachedResources();
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <IntroScreen />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
