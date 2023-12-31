import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../../state/cart/Action";
import CartItem from "./CartItems";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartReducer } = useSelector((store) => store);

  const handleCheckout = () => {
    navigate("/checkout?step=1");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cartReducer.updateCartItem, cartReducer.removeCartItem, dispatch]);

  return (
    <div>
      {cartReducer?.cartItems.length === 0 ? (
        <div className="empty-cart h-[100vh] text-center py-20">
          <h1 className="text-2xl font-semibold">Your cart is empty</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="lg:grid top-0 my-10 lg:grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {cartReducer?.cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
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
                  <span>{`#${cartReducer?.cart?.totalPrice}`}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span>-{`#${cartReducer?.cart?.discount}`}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">{`#${cartReducer?.cart?.totalDiscountedPrice}`}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full mt-5"
                color="primary"
                variant="contained"
                sx={{
                  px: "2.5rem",
                  py: ".7rem",
                  mt: "2rem",
                  bgcolor: "RGB(145 85 253)",
                }}
              >
                CHECKOUT
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
