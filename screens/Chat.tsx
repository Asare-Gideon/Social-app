import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import { ChatNavParams } from '../constants/Types';
import InitialChatScreen from './InitialChatScreen';
import InnerChat from './InnerChat';

const Stack = createNativeStackNavigator<ChatNavParams>();

const Chat = () => {
    return (
       <Stack.Navigator 
       screenOptions={{
           headerShown: false
       }}
       initialRouteName="InitialChat"
       >
           <Stack.Screen name="InitialChat" component={InitialChatScreen} />
           <Stack.Screen name="InnerChat" component={InnerChat} />
       </Stack.Navigator> 
    )
}

export default Chat
