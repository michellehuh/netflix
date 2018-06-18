import { MOST_RECENT_MOVIE_OF_GENRE_SUCCESS } from '../types';

const initialState = { isLoading: false, result: null};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOST_RECENT_MOVIE_OF_GENRE_SUCCESS: {
            const { data } = action;
            return { ...state, result: data };
        }
        default: return state;
    }
};
export default testReducer;