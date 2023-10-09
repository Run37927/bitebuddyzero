import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReceiverMessage = ({ message }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80' }}
            />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

export default ReceiverMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 12,
        marginLeft: 50,
        alignSelf: "flex-start",
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
        position: "absolute",
        top: 0,
        left: -50
    }
})