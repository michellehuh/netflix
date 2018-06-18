import { MOST_RECENT_MOVIE_OF_GENRE_SUCCESS,
    NESTED_AGGREGATION_SUCCESS
} from '../types';

const initialState = { isLoading: false, result: null, agg: null};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOST_RECENT_MOVIE_OF_GENRE_SUCCESS: {
            const { data } = action;
            return { ...state, result: data };
        }
        case NESTED_AGGREGATION_SUCCESS: {
            const { data } = action;
            return { ...state, agg: data };
        }
        default: return state;
    }
};
export default testReducer;