import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const dummyUsers = [
    {
        id: 1,
        name: "Emily Ganbold",
        profilePic: require('../assets/profilePic.png'),
        rating: 4.5,
        selectedTimeSlot: "5:30PM",
    },
    {
        id: 2,
        name: "Lucy Chu",
        profilePic: require('../assets/profilePic.png'),
        rating: 4.5,
        selectedTimeSlot: "5:30PM",
    },
    {
        id: 3,
        name: "Jacky Williams",
        profilePic: require('../assets/profilePic.png'),
        rating: 4.5,
        selectedTimeSlot: "5:30PM",
    },
    {
        id: 4,
        name: "Nicole de la cruz",
        profilePic: require('../assets/profilePic.png'),
        rating: 4.5,
        selectedTimeSlot: "5:30PM",
    },
];

const ShowPotentialMatches = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.rootContainer}>
            {/* <View>
                <Text style={styles.title}>Check out these potential bite buddies!</Text>
            </View> */}

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    {dummyUsers.map((user) => {
                        return (
                            <TouchableOpacity key={user.id} style={styles.userContainer} onPress={() => navigation.navigate('BuddyProfile')}>
                                <Image style={styles.userProfilePic} source={user.profilePic} />
                                <View>
                                    <Text>{user.name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>{user.rating}</Text>
                                        <Ionicons name="star" size={15} color='#FFA500' />
                                    </View>
                                    <Text>{user.selectedTimeSlot}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default ShowPotentialMatches

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 8,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        minWidth: 170,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 10,
    },
    userProfilePic: {
        width: 40,
        height: 40,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})