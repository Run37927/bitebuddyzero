import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RequestPage = () => {
    return (
        <View style={styles.container}>
            <Text>RequestPage</Text>
        </View>
    )
}

export default RequestPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})