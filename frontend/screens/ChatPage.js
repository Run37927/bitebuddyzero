import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'

const ChatPage = () => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Inbox</Text>
                <ChatList />
            </View>
        </SafeAreaView>

    )
}

export default ChatPage

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})