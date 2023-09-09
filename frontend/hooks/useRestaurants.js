import { useState } from "react"
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null,
    });

    const searchRestaurants = async (term, { latitude, longitude }) => {
        setResults({
            data: null,
            loading: true,
            error: null,
        })

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term,
                    latitude,
                    longitude,
                }
            })
            console.log("API Response: ", response);
            setResults({
                data: response.data.businesses,
                loading: false,
                error: null,
            })
        } catch (error) {
            console.log("API Error: ", error);
            setResults({
                data: null,
                loading: false,
                error: error.message,
            })
        }
    }
    return [results, searchRestaurants]
}