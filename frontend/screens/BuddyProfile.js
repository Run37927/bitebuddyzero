import { StyleSheet, SafeAreaView, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/BackButton'

const reviews = [
    {
        id: '1',
        reviewContent: 'Emily was a great bite buddy. We ate a lot of food and food food food food food ',
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

const BuddyProfile = ({ navigation }) => {
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
        <>
            <View style={styles.backBtn} >
                <BackButton />
            </View>
            <SafeAreaView style={styles.rootContainer}>
                <View style={[styles.reviewCard, elevation]}>
                    <View style={styles.picAndName}>
                        <Image style={styles.profilePic} source={require('../assets/emilyPic.png')} />
                        <Text style={styles.userName}>Emily</Text>
                    </View>

                    <View>
                        <View style={styles.textWrapper}>
                            <Text style={styles.reviewText}>17</Text>
                            <Text>Reviews</Text>
                        </View>
                        <View style={[styles.textWrapper, { borderBottomWidth: 0 }]}>
                            <Text style={styles.reviewText}>4.9</Text>
                            <Ionicons name="star" size={20} color='#FFA500' />
                        </View>
                    </View>
                </View>

                <View style={styles.userIntroContainer}>
                    <Text style={styles.userIntro}>I am a very good bite buddy. I love exploring new restaurants and enjoy the experiences of meeting new people through food! Become my next bite buddy and let's eat eat eat coz I'm hungry.</Text>
                </View>
                <View style={styles.emptyDiv}></View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingHorizontal: 30 }}>20+ bitebuddies says this about Emily...</Text>
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

                <View style={styles.stickyBottomDiv}>
                    <Text>Wednesday - Sep 26 @ 7:00 PM</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ChatPage')} style={styles.stickyBottomTextContainer}>
                        <Text style={styles.stickyBottomText}>Message</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default BuddyProfile

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    backBtn: {
        marginTop: 50,
        marginBottom: 10,
    },
    reviewCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40,
        height: 180,
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
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    reviewText: {
        paddingVertical: 8,
        fontWeight: '600',
        fontSize: 20,
    },
    userIntroContainer: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
    userIntro: {
        fontSize: 16,
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
    },
    stickyBottomDiv: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    stickyBottomTextContainer: {
        height: 50,
        borderRadius: 20,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    stickyBottomText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
