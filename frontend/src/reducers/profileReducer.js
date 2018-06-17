import { PROFILE_SELECTED } from "../types";

const initialState = { profile: null };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SELECTED: {
            const { profile } = action;
            return { ...state, profile: profile };
        }default:
            return state;
    }
};

export default profileReducer;