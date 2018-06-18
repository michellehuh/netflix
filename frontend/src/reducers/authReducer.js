import {
    USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, PROFILES_RETRIEVE_SUCCESS, PROFILES_RETRIEVE_FAILURE,
    PROFILE_UPDATE_SUCCESS, PROFILE_CREATE_SUCCESS, PROFILE_DELETE_SUCCESS
} from "../types";

const initialState = { isLoggedIn: false, user: null, authError: null, profiles: [] };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user } = action;
      return { ...state, isLoggedIn: true, user };
    }
      case USER_LOGIN_FAILURE: {
      const { error } = action;
      console.log(error.message);
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        authError: error.message
      };
    }
      case PROFILES_RETRIEVE_SUCCESS: {
          const { profiles } = action;
          return { ...state, profiles };
      }
      case PROFILES_RETRIEVE_FAILURE: {
          return { ...state, profiles: [] };
      }
      case PROFILE_UPDATE_SUCCESS: {
          const { profile } = action;
          const newState = Object.assign({}, state);
          const { profiles } = newState;
          return { ...state, profiles };
      }
      case PROFILE_CREATE_SUCCESS: {
          const { profile } = action;
          const newState = Object.assign({}, state);
          const { profiles } = newState;
          // profiles.append(profile);
          return { ...state, profiles };
      }
      case PROFILE_DELETE_SUCCESS: {
          const { profile } = action;
          const newState = Object.assign({}, state);
          let { profiles } = newState;
          return { ...state, profiles };
      }

    default:
      return state;
  }
};

export default authReducer;
