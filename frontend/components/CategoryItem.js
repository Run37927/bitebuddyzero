import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { elevation } from '../common/styles'

const CategoryItem = ({ index, name, imageUrl, active, handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[elevation, styles.container, index === 0 ? { marginLeft: 25 } : { marginLeft: 15 }, active ? { backgroundColor: '#FFA500' } : { backgroundColor: 'white' }]}>
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={styles.image} />
                </View>
                <Text numberOfLines={1} style={styles.categoryText}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 90,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 5,
        borderRadius: 50,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    categoryText: {
        fontWeight: 'bold',
        fontSize: 12,
    }
})