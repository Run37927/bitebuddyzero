import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HomepageHeader from '../components/HomepageHeader'
import Search from '../components/Search'
import CategoryItem from '../components/CategoryItem'
import { allCategories } from '../common/allCategories'
import RestaurantList from '../components/RestaurantList'

const HomePage = () => {
    const [foodType, setFoodType] = useState('Burger');

    const renderCategories = ({ item, index }) => {
        return (
            <CategoryItem
                name={item.name}
                imageUrl={item.imgUrl}
                index={index}
                active={item.name === foodType}
                handlePress={() => setFoodType(item.name)}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HomepageHeader />
            <Search setFoodType={setFoodType} />
            <View>
                <FlatList
                    data={allCategories}
                    renderItem={renderCategories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                />
            </View>
            <View style={styles.container}>
                <RestaurantList term={foodType} />
            </View>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
    }
})