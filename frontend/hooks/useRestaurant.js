import { useState } from "react"
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState({
        data: null,
        isLoading: false,
        error: null,
    });

    const searchRestaurant = async (restId) => {
        setResult({
            data: null,
            loading: true,
            error: null,
        })

        try {
            const response = await yelp.get(`/${restId}`, {})
            setResult({
                data: response.data,
                loading: false,
                error: null,
            })
        } catch (error) {
            setResult({
                data: null,
                loading: false,
                error: error,
            })
        }
    }
    return [result, searchRestaurant]
}