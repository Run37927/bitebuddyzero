import { SafeAreaView, StyleSheet, Text, Keyboard, TextInput, View, Button, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import SenderMessage from '../components/SenderMessage';
import ReceiverMessage from '../components/ReceiverMessage';

const messages = [
    {
        id: 'msg1',
        userId: 'user1',
        content: 'Hey, how are you?'
    },
    {
        id: 'msg2',
        userId: 'user2',
        content: 'good, thanks! How about you?'
    },
    {
        id: 'msg3',
        userId: 'user1',
        content: 'Doing well, excited for our food trip!'
    },
    {
        id: 'msg4',
        userId: 'user2',
        content: 'Me too! Cant wait.'
    },
    {
        id: 'msg5',
        userId: 'user1',
        content: 'What time should we meet?'
    },
    {
        id: 'msg6',
        userId: 'user2',
        content: 'How about 6 PM?'
    }
];

const MessageScreen = () => {
    const [input, setInput] = useState("");

    const sendMessage = () => {
        console.log("sending message...");
        setInput("")
    };
    return (
        <SafeAreaView style={styles.rootContainer}>
            <BackButton />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView} keyboardVerticalOffset={10}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <FlatList
                        data={messages}
                        // inverted={-1}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => item.userId == 'user1' ? (
                            <SenderMessage message={item.content} />
                        ) : (
                            <ReceiverMessage message={item.content} />
                        )}
                    />
                </TouchableWithoutFeedback>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Send message...'
                        onChangeText={setInput}
                        onSubmitEditing={sendMessage}
                        value={input}
                    />
                    <Button onPress={sendMessage} title='Send' color="#FFA500" />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
        paddingHorizontal: 10,
    },
    inputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 40,
    },
    inputText: {
        height: 60,
        fontSize: 20
    },
})