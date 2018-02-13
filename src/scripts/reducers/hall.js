export const TAKEN_SEAT_FETCH = 'TAKEN_SEAT_FETCH';
export const TAKEN_SEAT_FETCH_ERROR = 'TAKEN_SEAT_FETCH_ERROR';

export default function takenSeatsList(state = { taken_seats: [] }, action) {
    switch (action.type) {
    case TAKEN_SEAT_FETCH: {
        return { ...state, taken_seats: action.payload };
    }
    case TAKEN_SEAT_FETCH_ERROR: {
        return { ...state };
    }
    default:
        return state;
    }
}
