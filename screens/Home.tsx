import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home: React.FC = () => {
    return (
        <View style={style.main}>
            <Text>welcome home</Text>
            <Text>let's do this </Text>
        </View>
    )
}

const style = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "space-mono",
    backgroundColor: "yellow"
  }
})

export default Home
