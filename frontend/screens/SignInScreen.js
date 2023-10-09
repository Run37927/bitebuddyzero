import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';

const SignInScreen = () => {
    const { signIn, signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        signUp(email, password);
    }

    const handleSignIn = () => {
        signIn(email, password);
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidView} keyboardVerticalOffset={10}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.titleText}>
                        <Text style={styles.title}>BiteBuddy</Text>
                        <Text style={styles.tagline}>Never Eat Alone</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Email'
                        value={email}
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        style={styles.textInput}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signinBtn} onPress={handleSignIn}>
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
                        <Text style={styles.text}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    imgBackground: {
        flex: 1,
        alignItems: 'center',
    },
    keyboardAvoidView: {
        width: '80%',
    },
    titleText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 100
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 24,
        fontStyle: 'italic'
    },
    inputContainer: {
        marginBottom: 20
    },
    textInput: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 12,
        marginTop: 5,
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 10
    },
    signinBtn: {
        borderRadius: 12,
        backgroundColor: '#FFA500',
        width: '80%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupBtn: {
        borderRadius: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FFA500',
        width: '80%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600',
        fontSize: 18
    }
})