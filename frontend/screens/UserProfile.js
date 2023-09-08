import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'
import { Ionicons } from '@expo/vector-icons'

const reviews = [
    {
        id: '1',
        reviewContent: 'Emily was a great bite buddy. We ate a lot. and food food food food food food ',
        userName: 'John Doe',
        userProfile: require('../assets/profilePic.png'),
        timestamp: '2023-09-08T12:34:56Z'
    },
    {
        id: '2',
        reviewContent: 'we shared dishes and no food was wasted',
        userName: 'Jane Smith',
        userProfile: require('../assets/profilePic.png'),
        timestamp: '2023-08-25T15:20:30Z'
    },
    {
        id: '3',
        reviewContent: 'Not what I expected, could be better.',
        userName: 'Emily Johnson',
        userProfile: require('../assets/profilePic.png'),
        timestamp: '2023-07-14T09:45:10Z'
    },
    {
        id: '4',
        reviewContent: 'will match again in the future.',
        userName: 'Lucas Brown',
        userProfile: require('../assets/profilePic.png'),
        timestamp: '2023-06-30T18:22:40Z'
    }
];

const UserProfile = () => {
    const renderReviewItem = ({ item }) => {
        return (
            <View style={styles.reviewContentCard}>
                <Text style={{ flex: 1 }}>"{item.reviewContent}"</Text>

                <View style={styles.buddyReviewBottomContainer}>
                    <Image style={styles.reviewerProfilePic} source={item.userProfile} />

                    <View>
                        <Text>{item.userName}</Text>
                        <Text>{item.timestamp}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.rootContainer}>
            <View style={[styles.reviewCard, elevation]}>
                <View style={styles.picAndName}>
                    <Image style={styles.profilePic} source={require('../assets/emilyPic.png')} />
                    <Text style={styles.userName}>Emily</Text>
                </View>

                <View style={styles.reviewContainer}>
                    <Text style={styles.reviewText}>17 Reviews</Text>
                    <View style={[styles.reviewText, { flexDirection: 'row' }]}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>4.9</Text>
                        <Ionicons name="star" size={20} color='#FFA500' />
                    </View>

                    <Text style={styles.reviewText}>20X BiteBuddies</Text>
                </View>
            </View>

            <View style={styles.userIntroContainer}>
                <Text style={styles.userIntro}>I am a very good bite buddy. I love exploring new restaurants and enjoy the experiences of meeting new people through food! Become my next bite buddy and let's eat eat eat coz I'm hungry.</Text>
            </View>

            <View style={styles.emptyDiv}></View>

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingHorizontal: 30 }}>What other bite buddies are saying about Emily</Text>
            </View>

            <View style={styles.reviewListContainer}>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id}
                    renderItem={renderReviewItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    },
    reviewCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40,
        height: 230,
        width: '80%',
        paddingHorizontal: 30,
    },
    picAndName: {
        alignItems: 'center',
        gap: 8,
    },
    profilePic: {
        width: 70,
        height: 70,
        borderRadius: 25,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    reviewContainer: {

    },
    reviewText: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
        fontWeight: '600',
        fontSize: 16,
    },
    userIntroContainer: {
        paddingHorizontal: 30,
        marginTop: 40,
    },
    userIntro: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    emptyDiv: {
        width: '80%',
        marginVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    reviewListContainer: {
        height: 200,
        marginVertical: 30,
        paddingHorizontal: 30,
    },
    reviewContentCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 10,
        padding: 12,
        borderRadius: 20,
        width: 230,
    },
    buddyReviewBottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    reviewerProfilePic: {
        width: 30,
        height: 30,
    }
})