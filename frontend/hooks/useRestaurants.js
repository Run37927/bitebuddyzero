import { useState } from "react"
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState({
        data: [],
        loading: false,
        error: null,
    });

    const searchRestaurants = async (term, currentPage, { latitude, longitude }) => {
        setResults(prevResults => ({
            data: currentPage === 1 ? [] : prevResults.data,
            loading: true,
            error: null,
        }));

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    offset: (currentPage - 1) * 10,
                    term,
                    latitude,
                    longitude,
                }
            })
            // console.log("API Response: ", response);
            setResults(prevResults => ({
                data: [...prevResults.data, ...response.data.businesses],
                loading: false,
                error: null,
            }));
        } catch (error) {
            console.log("API Error: ", error);
            setResults({
                data: [],
                loading: false,
                error: error.message,
            })
        }
    }
    return [results, searchRestaurants]
}