import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { AuthReducer } from "./auth/Reducer.js";
import { cartReducer } from "./cart/Reducer.js";
import { customerProductReducer } from "./product/Reducer.js";

const rootReducers = combineReducers({
   authReducer:AuthReducer,
   customerProductReducer: customerProductReducer,
   cartReducer: cartReducer
})

export const Store = legacy_createStore(rootReducers, applyMiddleware(thunk))