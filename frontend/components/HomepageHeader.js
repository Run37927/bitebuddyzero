import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomepageHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Find your</Text>
            <Text style={styles.boldHeader}>BiteBuddy Today!</Text>
        </View>
    )
}

export default HomepageHeader

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 25,
    },
    lightHeader: {
        fontSize: 36,
    },
    boldHeader: {
        fontSize: 36,
        fontWeight: 'bold',
    }
})