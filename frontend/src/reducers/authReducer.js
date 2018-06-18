import {
    USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, PROFILES_RETRIEVE_SUCCESS, PROFILES_RETRIEVE_FAILURE,
    PROFILE_UPDATE_SUCCESS
} from "../types";

const initialState = { isLoggedIn: false, user: null, authError: null, profiles: [] };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user } = action;
      return { ...state, isLoggedIn: true, user: user.id };
    }
      case USER_LOGIN_FAILURE: {
      const { error } = action;
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        authError: error.message
      };
    }
      case PROFILES_RETRIEVE_SUCCESS: {
          const { profiles } = action;
          console.log("PROFILES_RETRIEVE_SUCCESS", profiles);
          return { ...state, profiles };
      }
      case PROFILES_RETRIEVE_FAILURE: {
          return { ...state, profiles: [] };
      }
      case PROFILE_UPDATE_SUCCESS: {
          const { profile } = action;
          const newState = Object.assign({}, state);
          const { profiles } = newState;
          profiles.forEach((p)=>{
            if (p.id === profile.id) {
              p.name = profile.name;
              p.age = profile.age;
            }
          });
          return { ...state, profiles };
      }

    default:
      return state;
  }
};

export default authReducer;
