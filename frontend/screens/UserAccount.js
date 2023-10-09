import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import { Ionicons } from '@expo/vector-icons'

const dummyMyself =
{
    id: 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890',
    userName: 'Run',
    photoUrl: 'https://avatars.githubusercontent.com/u/97194954?v=4',
}
const UserAccount = () => {
    const { user, signOut } = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Profile</Text>

                <ScrollView>
                    <View style={styles.topPart}>
                        <Image source={{ uri: dummyMyself.photoUrl }} style={styles.userPhoto} />
                        <Text style={styles.myEmail}>{user?.email}</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.smallContainer}>
                            <Ionicons name="file-tray-outline" size={34} color="#FFA500" />
                            <Text>Terms of Service</Text>
                        </View>
                        <View style={styles.smallContainer}>
                            <Ionicons name="file-tray-outline" size={34} color="#FFA500" />
                            <Text>Privacy Policy</Text>
                        </View>
                        <View style={styles.smallContainer}>
                            <Ionicons name="settings-outline" size={34} color="#FFA500" />
                            <Text>Settings</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.signOutBtn} onPress={signOut}>
                        <Text style={styles.signoutText}>Sign out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default UserAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    innerContainer: {
        paddingHorizontal: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    topPart: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    userPhoto: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    myEmail: {
        fontSize: 24,
    },
    section: {
        paddingVertical: 16
    },
    smallContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    signOutBtn: {
        paddingVertical: 16,
    },
    signoutText: {
        color: '#FFA500',
    }
})