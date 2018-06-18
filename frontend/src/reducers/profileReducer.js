import { PROFILE_SELECTED, PROFILE_UPDATE_SUCCESS } from "../types";

const initialState = { profile: null };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SELECTED: {
            const { profile } = action;
            return { ...state, profile };
        }
        default:
            return state;
    }
};

export default profileReducer;