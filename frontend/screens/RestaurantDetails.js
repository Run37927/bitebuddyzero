import { ActivityIndicator, Alert, FlatList, Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import useRestaurant from '../hooks/useRestaurant';
import { Ionicons } from '@expo/vector-icons'
import { elevation, surprise } from '../common/styles';
import useReviews from '../hooks/useReviews';
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import ShowPotentialMatches from '../components/ShowPotentialMatches';

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
            <View style={styles.backBtnContainer}>
                <Ionicons onPress={() => navigation.goBack()} name="close" size={28} color='#FFA500' />
            </View>
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

const DetailsSection = ({ details, setHasPotentialMatches, hasPotentialMatches }) => {
    const navigation = useNavigation();

    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [hasSelectedDateTime, setHasSelectedDateTime] = useState(false);

    // handler for ios: once user picked a date, set to that date, and hide the picker
    const handleDateTimePickerChange = (event, selectedDate) => {
        const pickedDate = selectedDate;
        setDate(pickedDate);
        setShowPicker(false);
        setHasPotentialMatches(true);
        setHasSelectedDateTime(true);
    };

    // handler for android
    const handleDateTimePickerChangeAndroid = (event, selectedDate) => {
        const pickedDate = selectedDate;

        // don't allow user pick a time earlier than current time
        const currentTime = new Date();
        const pickedTime = pickedDate.getHours() * 60 + pickedDate.getMinutes();
        const currentTimeValue = currentTime.getHours() * 60 + currentTime.getMinutes();

        if (pickedTime < currentTimeValue) {
            Alert.alert("Invalid Time", "Can't pick a time in the past");
            return;
        }
        setDate(pickedDate);
        setHasPotentialMatches(true);
        setHasSelectedDateTime(true);
    }

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            if (currentMode === 'date') {
                DateTimePickerAndroid.open({
                    value: date,
                    onChange: handleDateTimePickerChangeAndroid,
                    mode: currentMode,
                    is24Hour: true,
                    minimumDate: date,
                });
            } else {
                DateTimePickerAndroid.open({
                    value: date,
                    onChange: handleDateTimePickerChangeAndroid,
                    mode: currentMode,
                    is24Hour: true,
                });
            }
        } else {
            setShowPicker(true);
            setMode(currentMode);
        }
    };

    const showDatePicker = () => {
        showMode('date');
    };
    const showTimePicker = () => {
        showMode('time');
    };
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
                            <Text style={styles.openText}>Open Now🤩</Text>
                        </View>
                    ) : (
                        <View style={elevation}>
                            <Text style={styles.openText}>Closed😭 - Come back later</Text>
                        </View>
                    )}
            </View>

            <View style={styles.phoneAddressContainer}>
                <View style={styles.smallContainer}>
                    <Ionicons name="call" size={20} color='black' />
                    <Text>{details.phone}</Text>
                </View>

                <View style={styles.smallContainer}>
                    <Ionicons name="pin" size={20} color='black' />
                    <Text>{details.address.join(', ')}</Text>
                </View>
            </View>

            {/* datetime picker start */}
            <View style={styles.dateTimePickerBtnsContainer}>
                <View style={Platform.OS === 'ios' ? styles.dateTimeButton : styles.dateTimeButtonAndroid}>
                    <Button onPress={showDatePicker} title="PICK A DATE" color='#FFA500' accessibilityLabel="Pick a date" />
                </View>
                <View style={Platform.OS === 'ios' ? styles.dateTimeButton : styles.dateTimeButtonAndroid}>
                    <Button onPress={showTimePicker} title="PICK A TIME" color='#FFA500' accessibilityLabel="Pick a time" />
                </View>
            </View>

            {showPicker && Platform.OS === "ios" && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={handleDateTimePickerChange}
                    minimumDate={new Date()}
                />
            )}

            {hasSelectedDateTime ? (
                hasPotentialMatches ? (
                    <>
                        <View style={[surprise, styles.selectedDateTimeContainer]}>
                            <Text style={styles.selectedDateTime}>Check out these people who also picked {date.toLocaleDateString([], { dateStyle: 'short' })
                            } around {date.toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}👀</Text>
                        </View>
                        <ShowPotentialMatches />
                    </>
                ) : (
                    <View style={[surprise, styles.selectedDateTimeContainer]}>
                        <Text style={styles.selectedDateTime}>
                            Nobody picked this date and time yet, keep looking!
                        </Text>
                    </View>
                )
            ) : (
                null
            )}

            {/* datetime picker end */}
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

    if (reviews && reviews.length) {
        return (
            <View style={styles.reviewSection}>
                <Text style={styles.title}>Reviews</Text>
                <View>
                    {reviews.map((review) => {
                        return (
                            <View key={review.id} style={[styles.eachReview, elevation]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={styles.smallContainer}>
                                        {renderStars(review.rating)}
                                    </View>
                                    <Text style={{ fontSize: 12 }}>{review.time_created.split(' ')[0]}</Text>
                                </View>

                                <Text>{review.text}</Text>
                            </View>
                        )
                    })}
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

    const [hasPotentialMatches, setHasPotentialMatches] = useState(false);

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
        <ScrollView style={{ flex: 1, paddingHorizontal: 12, }}>
            {data && (
                <View style={{ flex: 1 }}>
                    <PhotoSlider photos={data.photos} navigation={navigation} />
                    <DetailsSection details={normalizedData} setHasPotentialMatches={setHasPotentialMatches} hasPotentialMatches={hasPotentialMatches} />
                    {/* {hasPotentialMatches && <ShowPotentialMatches />} */}
                    <ReviewsSection allReviews={reviewsData} />
                </View>
            )}
        </ScrollView>
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
    backBtnContainer: {
        backgroundColor: 'white',
        borderRadius: 14,
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        position: 'absolute',
        top: 50,
        left: 30,
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
    },
    dateTimePickerBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 4,
    },
    dateTimeButton: {
        height: 40,
        borderRadius: 12,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#FFA500'
    },
    dateTimeButtonAndroid: {
        height: 40,
    },
    phoneAddressContainer: {
        paddingVertical: 10,
    },
    selectedDateTimeContainer: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginVertical: 10,
    },
    selectedDateTime: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})