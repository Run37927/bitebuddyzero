import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserAccount = () => {
    return (
        <View style={styles.container}>
            <Text>UserAccount</Text>
        </View>
    )
}

export default UserAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})