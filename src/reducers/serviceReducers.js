import {
  GET_SERVICES_FAIL,
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
} from "../constants";

export const serviceReducers = (state = { services: [] }, action) => {
  switch (action.type) {
    case GET_SERVICES_REQUEST:
      return {
        loading: true,
      };
    case GET_SERVICES_SUCCESS:
      return {
        loading: false,
        services: action.payload,
      };
    case GET_SERVICES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
