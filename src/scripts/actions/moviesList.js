import axios from 'axios';
import { MOVIE_FETCH, MOVIE_FETCH_ERROR } from '../reducers/moviesList';

const loadMovies = () => (dispatch) => {
    axios.get('http://demo4787444.mockable.io/posters')
        .then((response) => {
            dispatch({ type: MOVIE_FETCH, payload: response.data });
        })
        .catch((error) => {
            dispatch({ type: MOVIE_FETCH_ERROR, error });
        });
};

export default loadMovies;

