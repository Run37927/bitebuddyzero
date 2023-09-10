import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BuddyConfirmModal = ({ navigation }) => {
    return (
        <View style={styles.rootContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Cancel</Text>
            </TouchableOpacity>

            <View style={styles.requestDetailContainer}>
                <Text style={styles.restaurantTitle}>Boba Bliss - Mountain View</Text>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="calendar" size={30} color='black' />
                    <Text>Monday, August 21</Text>
                </View>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="time-outline" size={30} color='black' />
                    <Text>7:00 PM</Text>
                </View>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="person" size={30} color='black' />
                    <Text>With Emily Ganbold</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.safetyInfo}>
                <Text style={styles.safetyTitle}>What to know before you go</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium culpa atque, a facilis qui incidunt vitae, placeat rerum iure porro ab dicta consequatur tempora esse ex? Repellendus aliquam laudantium corporis corrupti odit necessitatibus, dolore error! Sunt tempore sequi maxime ipsa corrupti quasi, fugit eos sapiente? Autem non reiciendis at quod ratione, doloribus odio minima, eveniet assumenda rem eos, rerum delectus quaerat labore nihil quia reprehenderit cum. Sapiente similique quasi eaque
                </Text>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.confirmBtn}>
                <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BuddyConfirmModal

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30
    },
    requestDetailContainer: {

    },
    restaurantTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 30,
        paddingBottom: 10,
    },
    iconAndTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    divider: {
        marginVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    safetyInfo: {

    },
    safetyTitle: {
        fontWeight: '500',
        fontSize: 20,
    },
    confirmBtn: {
        width: '100%',
        height: 40,
        borderRadius: 12,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
    },
    confirmText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
})