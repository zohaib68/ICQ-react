import { combineReducers } from "redux";
import { userReducer } from "../user/user.reducer";
import { LOGOUT } from "../user/user.types";

export const appReducer = combineReducers({
  user: userReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    appReducer(undefined, action);
    localStorage.clear();
  }

  return appReducer(state, action);
};
