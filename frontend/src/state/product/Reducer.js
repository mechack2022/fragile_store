import {
  FIND_PRODUCTS_FIALURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FIALURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  isloading: false,
  error: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return { ...state, isloading: true, error: null };
      
    case FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        products: action.payload,
        error: null,
      };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        isloading: false,
        product: action.payload,
        error: null,
      };

    case FIND_PRODUCTS_FIALURE:
    case FIND_PRODUCT_BY_ID_FIALURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
