import { Alert, AlertTitle, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../state/order/Action";
import { verifyPayment } from "../../../state/payment/Action";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "../order/OrderTracker";
import Product from "../product/Product";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [reference, setReference] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { orderReducer } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("paymentId"));
    // setPaymentStatus(urlParam.get("payment-link_status"));
  },[]);

  useEffect(() => {
    const data = { orderId, reference } 
    dispatch(getOrderById(orderId));
    dispatch(verifyPayment(data))
  },[orderId, dispatch, reference])
 
  return <div className="px-2 lg:px-36"> 
     <div className="flex flex-col justify-center items-center">
      <Alert variant="filled" severity="success" sx={{mb:6, width:"fit-content"}} >
        <AlertTitle>Payment Success</AlertTitle>
        Congratulations ur order has been placed
      </Alert>
    
     </div>
     {/* tracker */}
     <OrderTracker activeStep={1}  /> 
      {/* orderItems Grid */}
     <Grid container className="space-y-5 py-5 pt-20" >
      {[1,1,2,3].map((item, index )=> (
        <Grid key={index} container iten className="shadow-xl rounded-md p-5 " sx={{alignItems:"center", justifyContent:"space-between"}} >
        <Grid item xs={6}>
         <div className="flex items-center">
           <img className="w-[5rem] h-[5rem] object-cover object-top"  
           src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70" alt="" />
            <div className="ml-5 space-y-2">
              <p>item.product.title</p>
                <div className="opacity-50 text-xl font-semibold space-x-5 ">
                   <span>Color:item.color </span>
                   <span>Size:item.size</span>
                </div>
                <p>Seller: </p>
                <p>₦ item.price</p>
            </div>
         </div>
        </Grid>
        <Grid>
           <AddressCard address={""} />
         </Grid>

      </Grid>
      ) )} 
     </Grid>
  </div>;
};

export default PaymentSuccess;
