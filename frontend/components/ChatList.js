import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChatList = () => {
    const navigation = useNavigation();

    const chats = [
        {
            id: 'a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890',
            userName: 'John Bird',
            photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            foodTrip: '2023-10-01, 12:30 PM',
            lastMessage: 'Hey, looking forward to our food trip! hau dhuiehiuhcsiuhiuschiuhiuhuihciuciuhuidhiushcsiuhiudshciudhdsiuchciudshcsiuhiuhiu'
        },
        {
            id: 'c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012',
            userName: 'Emily Johnson',
            photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            foodTrip: '2023-10-03, 6:30 PM',
            lastMessage: 'Can we reschedule?'
        },
        {
            id: 'd4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123',
            userName: 'Lucas Brown',
            photoUrl: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
            foodTrip: '2023-10-04, 7:00 PM',
            lastMessage: 'Great! See you then.'
        },
        {
            id: 'e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234',
            userName: 'Sarah Williams',
            photoUrl: 'https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            foodTrip: '2023-10-05, 5:45 PM',
            lastMessage: 'Awesome, can\'t wait!'
        },
        {
            id: 'f6a7b8c9-d012-3456-f6a7-b8c9d0123456',
            userName: 'Olivia Thompson',
            photoUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            foodTrip: '2023-10-06, 4:30 PM',
            lastMessage: 'I had to cancel, sorry!'
        },
        {
            id: 'a7b8c9d0-1234-5678-a7b8-c9d012345678',
            userName: 'Ethan Wilson',
            photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            foodTrip: '2023-10-07, 2:15 PM',
            lastMessage: 'See you soon!'
        },
        {
            id: 'b8c9d012-3456-7890-b8c9-d01234567890',
            userName: 'Sophia Davis',
            photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
            foodTrip: '2023-10-08, 1:00 PM',
            lastMessage: 'u want hotpot?'
        },
        {
            id: 'c9d01234-5678-9012-c9d0-123456789012',
            userName: 'Mason Clark',
            photoUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80',
            foodTrip: '2023-10-09, 3:20 PM',
            lastMessage: 'I\'m running a bit late, sorry!'
        },
        {
            id: 'd0123456-7890-1234-d012-345678901234',
            userName: 'Isabella Lewis',
            photoUrl: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80',
            foodTrip: '2023-10-10, 11:45 AM',
            lastMessage: 'I\'ve booked the table!'
        }

    ];

    const renderChatListItem = ({ item }) => {
        return (
            <View style={styles.chatRow}>
                <TouchableOpacity onPressOut={() => navigation.navigate("Message")}>
                    <Image source={{ uri: item.photoUrl }} style={styles.userPhoto} />
                </TouchableOpacity>
                <View style={styles.chatTextContainer}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.lastMsg}>{item.lastMessage || 'Say hi!'}</Text>
                    <Text style={styles.foodTrip}>Foodtrip · {item.foodTrip}</Text>
                </View>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            {chats.length > 0 ? (
                <FlatList
                    data={chats}
                    keyExtractor={(item) => item.id}
                    renderItem={renderChatListItem}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.noBuddyTextContainer}>
                    <Text style={styles.text}>No BiteBuddies at the moment😭</Text>
                </View>
            )}
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    noBuddyTextContainer: {
        paddingVertical: 20
    },
    text: {
        fontSize: 20
    },
    chatRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 4,
    },
    userPhoto: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    chatTextContainer: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    userName: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5,
    },
    lastMsg: {
        fontSize: 14,
        marginBottom: 5,
    },
    foodTrip: {
        color: '#808080',
        fontSize: 12
    }
})