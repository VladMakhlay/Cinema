// import axios from 'axios';
// import { MOVIE_FETCH, MOVIE_FETCH_ERROR } from '../reducers/moviesList';

import { MOVIE_FETCH } from '../reducers/moviesList';
import APP from '../../../config/firebase';


const db = APP.database().ref();
const moviesRef = db.child('movies');


// const loadMovies = () => (dispatch) => {
//     axios.get('https://demo4787444.mockable.io/posters')
//         .then((response) => {
//             dispatch({ type: MOVIE_FETCH, payload: response.data });
//         })
//         .catch((error) => {
//             dispatch({ type: MOVIE_FETCH_ERROR, error });
//         });
// };

const loadMovies = () => (dispatch) => {
    moviesRef.on('value', (snapshot) => {
        dispatch({ type: MOVIE_FETCH, payload: snapshot.val() });
    });
};

export default loadMovies;

