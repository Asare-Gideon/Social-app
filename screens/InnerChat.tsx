import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Sizes } from '../constants/Layout'

const InnerChat = () => {
    return (
        <View style={styles.main}>
            <Text>inner Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
       backgroundColor: Colors.warmWhite,
       width: Sizes.width,
       flex: 1,
       
    }
})

export default InnerChat
