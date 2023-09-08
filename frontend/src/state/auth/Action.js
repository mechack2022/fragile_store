import {
     REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
     REGISTER_FIALURE, LOGIN_SUCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT } from "./ActionType";
import axios from 'axios';
import { BASE_URL } from "../../config/apiConfig";

// const token = localStorage.getItem("jwt")
export const registerRequest = () => ({type: REGISTER_REQUEST});
export const registerSucces  = (user) => ({type: REGISTER_SUCCESS, payload: user});
export const registerFailure = (error) =>({type: REGISTER_FIALURE, payload: error})

export const register = ( userData ) => async(dispatch) => {
    dispatch(registerRequest);
    try{
     const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
     const user = await response.data;
     if(user.jwt){
        localStorage.setItem("jwt", user.jwt)
     }
     console.log("user", user)
     dispatch(registerSucces(user.jwt))
    }catch(error){
        console.log(error.response.data)
        dispatch(registerFailure(error.message))
    }
};

export const loginRequest = () => ({type: LOGIN_REQUEST});
export const loginSucces  = (loginData) => ({type: LOGIN_SUCESS, payload: loginData});
export const loginFailure = (error) =>({type: LOGIN_FAILURE, payload: error})

export const login = ( loginData ) => async(dispatch) => {
    dispatch(loginRequest);
    try{
     const response = await axios.post(`${BASE_URL}/auth/login`, loginData);
     const user = await response.data;
     if(user.jwt){
        localStorage.setItem("jwt", user.jwt)
     }
     console.log("user", user)
     dispatch(loginSucces(user.jwt))
    }catch(error){
        console.log(error)
        dispatch(loginFailure(error.message))
    }
} 

// export const getUserRequest = () => ({type: GET_USER_REQUEST});
// export const getUserSucces  = () => ({type: GET_USER_SUCCESS});
// export const getUserFailure = (error) =>({type: GET_USER_FAILURE, payload: error})

// export const getUser = (jwt ) => async(dispatch) => {
//     dispatch(getUserRequest);
//     try{
//      const response = await axios.get(`${BASE_URL}/api/users/profile`, {
//         headers: {  "Authorization" : `Bearer ${jwt}`}
//      } );
//      const user = await response.data;
//      if(user.jwt){
//         localStorage.setItem("jwt", user.jwt)
//      }
//      console.log("user", user)
//      dispatch(getUserSucces(user))
//     }catch(error){
//         dispatch(getUserFailure(error.message))
//     }
// } 
export const getUserRequest = () => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
export const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest()); // Call the function to dispatch the action
  try {
    const response = await axios.get(`${BASE_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    const user = await response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.log(error.user.data)
    dispatch(getUserFailure(error.message));
  }
};



export const logout = () => (dispatch) => {
     dispatch({type: LOGOUT, payload:null})
     localStorage.clear();
} 