import { ActivityIndicator, FlatList, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantCard from './RestaurantCard';
import * as Location from 'expo-location';


const RestaurantList = ({ term }) => {
    const [{ data, loading, error }, searchRestaurants] = useRestaurants();

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Unknown Location!', 'You need to grant location to use the app')
            return {
                latitude: 49.2827,
                longitude: -123.1207
            };
        }
        const location = await Location.getCurrentPositionAsync({});

        return {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
    }

    useLayoutEffect(() => {
        const fetchData = async () => {
            const { latitude, longitude } = await getLocation();
            searchRestaurants(term, { latitude, longitude });
        };
        fetchData();
    }, [term]);

    // console.log({ data: data, loading, error })

    if (loading) return <ActivityIndicator size="large" marginVertical={30} />
    if (error) return (
        <View style={styles.container}>
            <Text style={styles.header}>{error}</Text>
        </View>
    )

    const renderRestaurantCard = ({ item }) => {
        return (
            <RestaurantCard
                id={item.id}
                name={item.name}
                location={item.location}
                rating={item.rating}
                imageUrl={item.image_url}
                price={item.price}
            />
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderRestaurantCard}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 25,
        paddingBottom: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    }
})