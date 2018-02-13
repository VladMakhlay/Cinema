import axios from 'axios';
import { TAKEN_SEAT_FETCH, TAKEN_SEAT_FETCH_ERROR } from '../reducers/hall';

const loadTakenSeats = () => (dispatch) => {
    axios.get('https://demo4787444.mockable.io/seats')
        .then((response) => {
            dispatch({ type: TAKEN_SEAT_FETCH, payload: response.data });
        })
        .catch((error) => {
            dispatch({ type: TAKEN_SEAT_FETCH_ERROR, error });
        });
};

export default loadTakenSeats;
