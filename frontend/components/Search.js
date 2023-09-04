import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { elevation } from '../common/styles'

const Search = ({ setFoodType }) => {
    const [input, setInput] = useState('');

    const handleEndEditing = () => {
        if (!input) return;
        setFoodType(input)
        setInput('');
    }

    return (
        <View style={[styles.inputContainer, elevation]}>
            <Ionicons name="search" size={25} color='black' />
            <TextInput
                value={input}
                style={styles.input}
                placeholder='What are you craving?'
                onChangeText={setInput}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        padding: 15,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
    }
})