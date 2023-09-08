import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { elevation } from '../common/styles';

const dummyUsers = [
    {
        id: 1,
        name: "Emily Ganbold",
        profilePic: require('../assets/profilePic.png'),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        name: "Lucy Chu",
        profilePic: require('../assets/profilePic.png'),
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        name: "Jacky Williams",
        profilePic: require('../assets/profilePic.png'),
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        id: 4,
        name: "Nicole de la cruz",
        profilePic: require('../assets/profilePic.png'),
        description: "Nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        name: "Eve Splas",
        profilePic: require('../assets/profilePic.png'),
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
    {
        id: 6,
        name: "Johston Portfolio",
        profilePic: require('../assets/profilePic.png'),
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    }
];

const ShowMatchesModal = ({ navigation }) => {
    const renderUsers = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.userContainer}>
                    <Image style={styles.userProfilePic} source={item.profilePic} />

                    <View>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.rootContainer}>
            <Ionicons onPress={() => navigation.goBack()} style={styles.backBtn} name="close" size={25} color='#FFA500' />
            <View style={[styles.matchesContainer, elevation]}>
                <Image style={styles.confetti} source={require('../assets/confetti.png')} />
                <Text style={styles.title}>Great! These people selected this place at this time as well!</Text>

                <View style={{ flex: 1, paddingHorizontal: 14, marginVertical: 20 }}>
                    <FlatList
                        data={dummyUsers}
                        renderItem={renderUsers}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}

export default ShowMatchesModal

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    backBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        zIndex: 50,
        position: 'absolute',
        top: 30,
    },
    matchesContainer: {
        height: '80%',
        width: '90%',
        alignItems: 'center',
        position: 'relative',
    },
    confetti: {
        width: '88%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 8,
        marginBottom: 6,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,

    },
    userProfilePic: {
        width: 40,
        height: 40,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    }
})