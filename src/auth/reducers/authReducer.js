import { types } from "./types/types.js";

const initialState = {
  username: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      console.log("123123123");
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case types.logout:
      return {
        ...state,
        isLoggedIn: false,
        username: null,
      };
    default:
      return state;
  }
};
