import { View, Text, Pressable, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { elevation } from '../common/styles'
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
            <View style={[styles.container, elevation]}>
                <Image style={styles.image} source={{ uri: imageUrl }} />

                <View style={styles.infoContainer}>
                    <Text style={styles.header}>{name}</Text>

                    <View style={styles.info}>
                        <Ionicons name="star" size={20} color='#FFA500' />
                        <Text style={styles.rating}>{rating}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>

                    <View style={styles.interestedUsersContainer}>
                        <View style={styles.interestedUser}></View>
                        <View style={[styles.interestedUser, { position: 'absolute', left: 14 }]}></View>
                        <View style={[styles.interestedUser, { position: 'absolute', left: 28 }]}></View>
                        <Text style={{ position: 'absolute', left: 50 }}>12 ppl interested👀</Text>
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
        alignSelf: "stretch",
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 4,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 6,
        marginRight: 20,
        fontSize: 16,
    },
    price: {
        color: "#FFA500"
    },
    interestedUsersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: 4,
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