import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SenderMessage = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

export default SenderMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFA500",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: "flex-start",
        marginLeft: "auto"
    },
    message: {
        color: "white"
    }

})