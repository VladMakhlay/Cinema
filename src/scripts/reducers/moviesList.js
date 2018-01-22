export const MOVIE_FETCH = 'MOVIE_FETCH';
export const MOVIE_FETCH_ERROR = 'MOVIE_FETCH_ERROR';

export default function movieList(state = { movies: [] }, action) {
    switch (action.type) {
    case MOVIE_FETCH: {
        return { ...state, movies: action.payload };
    }
    case MOVIE_FETCH_ERROR: {
        return { ...state };
    }
    default:
        return state;
    }
}
