import * as types from "../types";

const initialState = {
  data: "Unknown",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
