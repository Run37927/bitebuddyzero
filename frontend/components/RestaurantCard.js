import { View, Text, Pressable, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'


const RestaurantCard = ({ id, name, location, rating, price, imageUrl }) => {
    const navigation = useNavigation();

    const showRestaurantDetails = () => {
        navigation.navigate('RestaurantDetails', {
            restaurantId: id,
        })
    }

    return (
        <TouchableOpacity onPress={showRestaurantDetails}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: imageUrl }} resizeMode='cover' />

                <View style={styles.infoContainer}>
                    <View style={styles.nameAndInfo}>
                        <Text style={styles.header}>{name}</Text>
                        <View style={styles.info}>
                            <Ionicons name="star" size={20} color='#FFA500' />
                            <Text style={styles.rating}>{rating}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                    </View>


                    <View style={styles.interestedUsersContainer}>
                        <View style={styles.interestedUser}></View>
                        <View style={[styles.interestedUser, { position: 'absolute', left: 14 }]}></View>
                        <View style={[styles.interestedUser, { position: 'absolute', left: 28 }]}></View>
                        <Text style={{ position: 'absolute', left: 50 }}>12 ppl want to go here👀</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    container: {
        minHeight: 100,
        marginVertical: 10,
        alignItems: 'center'
    },
    image: {
        width: '90%',
        height: 160,
        borderRadius: 20,
    },
    infoContainer: {
        flex: 1,
        width: '90%',
    },
    nameAndInfo: {
        flexDirection: 'row',
        marginVertical: 6,
        justifyContent: 'space-between',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 6,
        marginRight: 6,
        fontSize: 16,
    },
    price: {
        color: "#FFA500"
    },
    interestedUsersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    interestedUser: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#dedcdc',
        borderRadius: 10
    }
})