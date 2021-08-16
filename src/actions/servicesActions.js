import axios from "axios";
import {
  GET_SERVICES_FAIL,
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
} from "../constants";

export const getServices = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SERVICES_REQUEST });

    const { data } = await axios.get("https://admin.naxa.com.np/api/services");

    dispatch({ type: GET_SERVICES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SERVICES_FAIL,
      payload: error.message,
    });
  }
};
