import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-9 my-6 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Women Kurta and Pant Set Art Silk</p>
          <p className="opacity-70 mt-2">Size: L White</p>
          <p className="opacity-70">Seller: Wumite collections</p>
          <div className="flex items-center space-x-5 text-lg lg:text-xl text-gray-900 mt-6 ">
            <p className="font-semibold">#199</p>
            <p className="line-through opacity-50">#256</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-20 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 rounded-sm border">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
