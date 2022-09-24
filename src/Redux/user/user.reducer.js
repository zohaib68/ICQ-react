import { SIGIN } from "./user.types";

const initialState = {
  user: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGIN:
      console.log(action.payLoad, "payLOad");
      return { ...state, user: action.payLoad };
    default:
      return state;
  }
};
