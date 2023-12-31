import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../state/order/Action";
import { createPayment } from "../../../state/payment/Action";
import AddressCard from "../addressCard/AddressCard";
import CartItem from "../cart/CartItems";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { orderReducer } = useSelector((store) => store);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const navigate = useNavigate();

  console.log(orderReducer.order);

  useEffect(() => {
    dispatch(getOrderById);
  }, [orderId, dispatch]);

  // const handleCheckout = () =>{
  //   console.log("orderId :", orderId);
  //   dispatch(createPayment(orderId));
  //   navigate(`/payment/verifyPayment/${orderId}`)
  // }
  const handleCheckout = async () => {
    console.log("orderId :", orderId);
    // Dispatch createPayment and capture the response
    const response = await dispatch(createPayment(orderId));
    // Extract the reference from the response
    const reference = response.data.data.reference;
    console.log("reference :", reference);
    // Redirect to the payment verification page with reference and orderId as URL parameters
    navigate(`/payment/verifyPayment?reference=${reference}&orderId=${orderId}`);
  };
  
  
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={orderReducer.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid top-0 my-10 lg:grid-cols-3 relative">
          <div className="col-span-2">
            {orderReducer.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="h-[100vh] px-5 mt-5 lg:mt-0">
            <div className="border">
              <p className="font-bold opacity-60 pb-4 uppercase">
                Price Details
              </p>
              <hr />
              <div className="font-semibold space-y-3 mx-2 mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>{`#${orderReducer?.order?.totalPrice}`}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span>{`#${orderReducer?.order?.discount}`}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">{`#${orderReducer?.order?.totalDiscountedPrice}`}</span>
                </div>
              </div>
              <Button
                className="w-full mt-5"
                color="primary"
                variant="contained"
                sx={{
                  px: "2.5rem",
                  py: ".7rem",
                  mt: "2rem",
                  bgcolor: "RGB(145 85 253)",
                }}
                onClick ={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
