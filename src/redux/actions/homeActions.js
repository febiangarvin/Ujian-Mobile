import axios from 'axios';

export const getHomeListPost = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=12&sort=rating', {
                headers: {
                    "user-key": "94423638571cf727b459b29dc24fc4f2"
                }
            })

            console.log(res.data.restaurants[0])
            dispatch({
                type: 'FILL_LIST_POST',
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}