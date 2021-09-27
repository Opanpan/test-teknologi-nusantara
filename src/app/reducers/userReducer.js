import * as types from "../types";

const initialState = {
  user: "Unknown",
  age: "17",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
