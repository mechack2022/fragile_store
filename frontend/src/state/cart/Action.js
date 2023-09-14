import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToCart = (requestData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST, payload: requestData });
  try {
    const response = await api.post("api/cart/add", requestData);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.mesage });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  try {
    const response = await api.post(`api/cart/`);
    dispatch({ type: GET_CART_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

export const updateCartItem = (requestData) => async (dispatch) => {
  const { cartItemId } = requestData;
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  try {
    const response = await api.put(`api/cartItem/${cartItemId}`);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (requestData) => async (dispatch) => {
  const { cartItemId } = requestData;
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
  try {
    const response = await api.delete(`api/cartItem/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};
