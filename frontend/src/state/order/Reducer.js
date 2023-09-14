import { GET_CART_FAILURE, GET_CART_SUCCESS } from "../cart/ActionType";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_USER_ORDER_HISTORY_FAILURE,
  GET_USER_ORDER_HISTORY_REQUEST,
  GET_USER_ORDER_HISTORY_SUCCESS,
} from "./ActionType";

const initialState = {
  orders: [],
  isloading: false,
  order: null,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, isloading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isloading: true,
        error: null,
        order: action.payload,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isloading: false,
      };

    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, isloading: true, error: null };
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        isloading: true,
        error: null,
        order: action.payload,
      };
    case GET_ORDER_BY_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        isloading: false,
      };

      case GET_USER_ORDER_HISTORY_REQUEST:
        return { ...state, isloading: true, error: null };
      case GET_USER_ORDER_HISTORY_SUCCESS:
        return {
          ...state,
          isloading: true,
          error: null,
          orders: []
        };
      case GET_USER_ORDER_HISTORY_FAILURE:
        return {
          ...state,
          error: action.payload,
          isloading: false,
        };
  

    default:
      return state;
  }
};
