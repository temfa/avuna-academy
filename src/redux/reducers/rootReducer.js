import { combineReducers } from "redux";
import registerReducer from "./register";
import userProfileReducer from "./userProfile";

const appReducer = combineReducers({
  registerReducer: registerReducer,
  userProfileReducer: userProfileReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_START") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
