import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { AuthReducer } from "./auth/Reducer.js";

const rootReducers = combineReducers({
   authReducer:AuthReducer
})

export const Store = legacy_createStore(rootReducers, applyMiddleware(thunk))