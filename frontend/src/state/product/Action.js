import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FIALURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FIALURE,
} from "./ActionType";
import { api } from "../../config/apiConfig";

export const findProduct = (requestData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    category,
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = requestData;
  try {
    const { data } = api.get(
      `api/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&
      minDiscount=${minDiscount}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&stock=${stock}`
    );
    dispatch({type: FIND_PRODUCTS_SUCCESS, payload:data});
  } catch (error) {
    dispatch({type: FIND_PRODUCTS_FIALURE, payload: error.message})
  }
};

export const findProductById = (requestData) => async ( dispatch ) =>{
   const {productId} = requestData;
   dispatch({type:FIND_PRODUCT_BY_ID_REQUEST, payload:productId });

  try{
    const response = api.get(`api/product/${productId}`);
    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload: response.data})
  }catch(error){
     dispatch({type:FIND_PRODUCT_BY_ID_FIALURE, payload:error.message});
  }
}