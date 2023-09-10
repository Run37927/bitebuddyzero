import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BuddyConfirmModal = ({ navigation }) => {

    const handleCancelRequest = () => {
        Alert.alert('Cancel request', 'Are you sure you want to cancel this bitebuddy request?', [
            {
                text: 'Cancel',
                onPress: () => console.log('cancel pressed'),
                style: 'cancel'
            },
            { text: "OK", onPress: () => navigation.goBack(), style: 'ok' }
        ])
    }
    return (
        <ScrollView style={styles.rootContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ fontWeight: '600' }}>Done</Text>
            </TouchableOpacity>

            <View style={styles.requestDetailContainer}>
                <Text style={styles.restaurantTitle}>Boba Bliss - Mountain View</Text>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="calendar-outline" size={30} color='black' />
                    <Text>Monday, August 21</Text>
                </View>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="time-outline" size={30} color='black' />
                    <Text>7:00 PM</Text>
                </View>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="person-circle-outline" size={30} color='black' />
                    <Text>With Emily Ganbold</Text>
                </View>

                <View style={styles.iconAndTitle}>
                    <Ionicons name="checkmark-circle-outline" size={30} color='green' />
                    <Text>BiteBuddy request sent</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.safetyInfoContainer}>
                <Text style={styles.safetyTitle}>What to know before you go</Text>
                <View style={styles.safetyContentContainer}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium culpa atque, a facilis qui incidunt vitae, placeat rerum iure porro ab dicta consequatur tempora esse ex? Repellendus aliquam laudantium corporis corrupti odit necessitatibus, dolore error! Sunt tempore sequi maxime ipsa corrupti quasi, fugit eos sapiente? Autem non reiciendis at quod ratione, doloribus odio minima, eveniet assumenda rem eos, rerum delectus quaerat labore nihil quia reprehenderit cum. Sapiente similique quasi eaque
                    </Text>
                </View>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity onPress={() => navigation.navigate('ChatPage')} style={styles.sendMsgBtn}>
                <Text style={styles.sendMsg}>Send Message</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancelRequest} style={styles.cancelBtn}>
                <Text style={styles.cancelRequestText}>Cancel Request</Text>
            </TouchableOpacity>
        </ScrollView>
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
    safetyTitle: {
        fontWeight: '500',
        fontSize: 20,
    },
    safetyContentContainer: {
        marginTop: 10,
    },
    sendMsgBtn: {
        width: '100%',
        height: 45,
        borderRadius: 12,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        marginBottom: 16,
    },
    sendMsg: {
        textAlign: 'center',
        fontSize: 18
    },
    cancelBtn: {
        width: '100%',
        height: 45,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
    },
    cancelRequestText: {
        textAlign: 'center',
        fontSize: 18
    }
})