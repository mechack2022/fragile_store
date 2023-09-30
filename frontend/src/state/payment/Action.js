import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYEMENT_FAILURE, UPDATE_PAYEMENT_REQUEST } from "./ActionType"


export const createPayment = (orderId) => async(dispatch) => {
   //   const {orderId } = requestData
      dispatch({type: CREATE_PAYMENT_REQUEST })
    try{
     const {data} = await api.post(`/paystack/payment/${orderId}`,{})
     console.log("createPaymentRepsonse", data)
    // Check if the response contains the authorization_url
    if (data.data && data.data.authorization_url) {
      // Redirect the user to the authorization_url
      window.location.href = data.data.authorization_url;
    } else {
      // Handle the case where authorization_url is not found in the response
      dispatch({ type: CREATE_PAYMENT_FAILURE, payload: "Authorization URL not found in response" });
    }
    }catch(error){
     dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message})
    }
}

export const verifyPayment = (requestData) => async(dispatch) => {
    const {orderId, reference } = requestData;
     dispatch({type: UPDATE_PAYEMENT_REQUEST})
   try{ 
    const {data} = await api.get(`/paystack/payments?reference=${reference}&orderId=${orderId}`)
    console.log("verify payment data - ", data)
   }catch(error){
    dispatch({type: UPDATE_PAYEMENT_FAILURE, payload: error.message})
   }
}