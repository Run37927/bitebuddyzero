import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useRestaurant from '../hooks/useRestaurant';
import { Ionicons } from '@expo/vector-icons'
import { elevation } from '../common/styles';
import useReviews from '../hooks/useReviews';

const { width } = Dimensions.get('window');

const PhotoSlider = ({ photos, navigation }) => {
    if (!photos) return null;
    const renderPhoto = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        )
    };

    return (
        <View>
            <Ionicons onPress={() => navigation.goBack()} style={styles.backBtn} name="close" size={25} color='#FFA500' />
            <FlatList
                data={photos}
                keyExtractor={(item) => item}
                renderItem={renderPhoto}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
};

const normalizeRestaurantData = (rawData) => {
    if (!rawData) {
        return {
            name: 'N/A',
            phone: 'N/A',
            rating: 'N/A',
            city: 'City not found',
            is_open_now: '',
            address: 'Address not available',
        };
    }

    return {
        name: rawData?.name ? rawData.name : 'N/A',
        phone: rawData?.display_phone ? rawData.display_phone : 'N/A',
        rating: rawData?.rating ? rawData.rating : 'N/A',
        city: rawData?.location?.city ? rawData.location.city : 'City not found',
        is_open_now: rawData?.hours && rawData?.hours[0] ? rawData.hours[0].is_open_now : 'Unknown',
        address: rawData?.location?.display_address ? rawData.location.display_address : 'Address not available',
    };
}

const DetailsSection = ({ details }) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    let nextTimeSlots = [];

    // Generate the next 3 time slots, each 30min apart
    for (let i = 0; i < 5; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setMinutes(currentMinute + (i * 30));

        // Format the time slot as HH:MM AM/PM
        const hours = nextDate.getHours() % 12 || 12;
        const minutes = nextDate.getMinutes();
        const ampm = nextDate.getHours() >= 12 ? 'PM' : 'AM';
        const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

        nextTimeSlots.push(timeString);
    }

    // console.log("Current Time:", `${currentHour}:${currentMinute}`);
    // console.log("Next Time Slots:", nextTimeSlots);

    return (
        <View style={styles.detailContainer}>
            <Text style={styles.title}>{details.name} - {details.city}</Text>

            <View style={styles.ratingAndTime}>

                <View style={styles.smallContainer}>
                    <Ionicons name="star" size={20} color='#FFA500' />
                    <Text>{details.rating}</Text>
                </View>

                {details.is_open_now ?
                    details.is_open_now === 'Unknown' ? (
                        <View style={elevation}>
                            <Text style={styles.openText}>Hour Unknown</Text>
                        </View>
                    ) : (
                        <View style={elevation}>
                            <Text style={styles.openText}>Closed😭 - Come back tomorrow</Text>
                        </View>
                    ) : (
                        <View style={elevation}>
                            <Text style={styles.openText}>Open Now🤩</Text>
                        </View>
                    )}
            </View>

            <FlatList
                data={nextTimeSlots}
                renderItem={({ item }) => <Text style={styles.clockTime}>{item}</Text>}
                style={styles.bookingTime} horizontal={true} showsHorizontalScrollIndicator={false}
            />
            {/* <Image style={styles.image} source={require("../assets/img/map.png")} /> */}

            <View>
                <Text style={styles.title}>Details</Text>

                <View style={styles.smallContainer}>
                    <Ionicons name="call" size={20} color='black' />
                    <Text>{details.phone}</Text>
                </View>

                <View style={styles.smallContainer}>
                    <Ionicons name="pin" size={20} color='black' />
                    <Text>{details.address.join(', ')}</Text>
                </View>
            </View>
        </View>
    );
};

const ReviewsSection = ({ allReviews }) => {
    if (!allReviews || !allReviews.reviews) return null;
    const reviews = allReviews.reviews;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5; // boolean
        const stars = [];

        if (halfStar) {
            stars.push(
                <Ionicons key={`half`} name="star-half" size={16} color='#FFA500' />
            );
        }

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Ionicons key={`full-${i}`} name="star" size={16} color='#FFA500' />
            );
        }
        return stars;
    };

    const renderReviews = ({ item }) => {
        return (
            <View style={[styles.eachReview, elevation]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.smallContainer}>
                        {/* <Ionicons name="star" size={20} color='#FFA500' />
                        <Text>{item.rating}</Text> */}
                        {renderStars(item.rating)}
                    </View>
                    <Text style={{ fontSize: 12 }}>{item.time_created.split(' ')[0]}</Text>
                </View>

                <Text>{item.text}</Text>
            </View>
        )
    }

    if (reviews && reviews.length) {
        return (
            <View style={styles.reviewSection}>
                <Text style={styles.title}>Reviews</Text>
                <View>
                    <FlatList
                        data={reviews}
                        renderItem={renderReviews}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
    return null;
}

const RestaurantDetails = ({ route, navigation }) => {
    const resId = route.params.restaurantId;
    const [{ data, loading, error }, searchRestaurant] = useRestaurant();
    const [{ data: reviewsData, loading: loadingReviews, error: reviewError }, searchReviews] = useReviews();

    useLayoutEffect(() => {
        searchRestaurant(resId)
        searchReviews(resId)
    }, [])
    // console.log(data, loading, error)
    // console.log(reviewsData, loadingReviews, reviewError)

    const normalizedData = normalizeRestaurantData(data);

    if (loading || loadingReviews) return <ActivityIndicator size="large" marginVertical={30} />
    if (!data || !reviewsData) return <ActivityIndicator size="large" marginVertical={30} />;
    if (error || reviewError) return <Text>{error}</Text>;

    return (
        <View style={{ flex: 1 }}>
            {data && (
                <View style={{ flex: 1 }}>
                    <PhotoSlider photos={data.photos} navigation={navigation} />
                    <DetailsSection details={normalizedData} />
                    <ReviewsSection allReviews={reviewsData} />
                </View>
            )}
        </View>
    )
}

export default RestaurantDetails

const styles = StyleSheet.create({
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 10,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: 230,
    },
    backBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        zIndex: 50,
        position: 'absolute',
        top: 30,
        left: 30,
    },
    detailContainer: {
        paddingHorizontal: 12,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
    },
    smallContainer: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
        gap: 4
    },
    ratingAndTime: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookingTime: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    clockTime: {
        backgroundColor: '#FFA500',
        marginHorizontal: 6,
        padding: 8,
        borderRadius: 12,
    },
    openText: {
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        fontWeight: 'bold'
    },
    reviewSection: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 12,
        marginBottom: 50,
    },
    eachReview: {
        borderBottomColor: '#E6E6E3',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 14,
        marginBottom: 12,
    }
})