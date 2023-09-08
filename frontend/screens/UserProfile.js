import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserProfile = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>UserProfile</Text>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})