import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BuddyConfirmModal = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.requestDetailContainer}>
                <Text>Boba Bliss - Mountain View</Text>

                <View>
                    <Ionicons name="calendar" size={20} color='black' />
                    <Text>Monday, August 21</Text>
                </View>

                <View>
                    <Ionicons name="alarm" size={20} color='black' />
                    <Text>7:00 PM</Text>
                </View>

                <View>
                    <Ionicons name="person" size={20} color='black' />
                    <Text>With Emily Ganbold</Text>
                </View>
            </View>

            <View style={styles.safetyInfo}>

            </View>

            <TouchableOpacity>
                <Text>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BuddyConfirmModal

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    requestDetailContainer: {

    },
    safetyInfo: {

    }
})