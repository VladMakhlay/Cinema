import { combineReducers } from 'redux';
import moviesList from './moviesList';
import hall from './hall';

export default combineReducers({
    moviesList,
    hall,
});
