import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../types";

const initialState = { isLoggedIn: false, user: null, authError: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const { user } = action;
      return { ...state, isLoggedIn: true, user };
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

    default:
      return state;
  }
};

export default authReducer;
