import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer"
import testReducer from "./reducers/testReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  test: testReducer
});
