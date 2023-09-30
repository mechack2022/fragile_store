import { Button } from "@mui/base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyPayment } from "../../../state/payment/Action";

export const VerifyPayment = () => {
  const { orderReducer } = useSelector((store) => store);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("orderId");
  const reference = searchParams.get("reference");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyPayment = () => {
    const data = { reference, orderId };
    dispatch(verifyPayment(data));
    navigate(`/payment/${orderId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Button onClick={ handleVerifyPayment} className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded">
        Verify payment
      </Button>
    </div>
  );
};
