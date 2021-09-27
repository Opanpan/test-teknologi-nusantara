import * as types from "../types";
import Axios from "axios";

export function getData() {
  return (dispatch) => {
    return Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      dispatch({
        type: types.GET_DATA,
        payload: res.data,
      })
    );
  };
}
