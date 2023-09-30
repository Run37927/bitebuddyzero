import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignInScreen</Text>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})