import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FIALURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FIALURE,
} from "./ActionType";
import { api } from "../../config/apiConfig";

// export const findProduct = (requestData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCTS_REQUEST });
//   const {
//     category,
//     color,
//     size,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     sort,
//     stock,
//     pageNumber,
//     pageSize,
//   } = requestData;

//   try {
//     const { data } = await api.get(
//       `api/products?minDiscount=${minDiscount}&color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&stock=${stock}`
//     );

//     console.log("Products data: ", data);
//     console.log("Products data: ", category);
//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     console.log(error.response);
//     dispatch({ type: FIND_PRODUCTS_FIALURE, payload: error.message });
//   }
// };

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
    // Modify the API request to handle null values for minPrice and maxPrice
    const params = {
      minDiscount,
      color,
      size,
      category,
      sort,
      pageNumber,
      pageSize,
      stock,
    };

    if (minPrice !== null) {
      params.minPrice = minPrice;
    }

    if (maxPrice !== null) {
      params.maxPrice = maxPrice;
    }

    const { data } = await api.get('api/products',  `api/products?minDiscount=${minDiscount}&color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&stock=${stock}`);

    console.log("Products data: ", data);
    console.log("Products data: ", category);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FIND_PRODUCTS_FIALURE, payload: error.message });
  }
};


export const findProductById = (requestData) => async (dispatch) => {
  const { productId } = requestData;
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST, payload: productId });
  try {
    const response = await api.get(`api/product/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FIALURE, payload: error.message });
  }
};
