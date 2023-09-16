import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";
import { useParams } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();


  const handleDeleteCartItem = () =>{
    dispatch(removeCartItem(item.id)) 
  }

  // const handleUpdateCartItem = (num) =>{
  //    const data = {
  //       data : { quantity: item.quantity + num } ,
  //       cartItemId: item?.id
  //    }
  //    dispatch(updateCartItem(data))
  // }

  const handleUpdateCartItem = (num) => {
    const updatedQuantity = item.quantity + num;
    const data = {
      quantity: updatedQuantity,
    };
    dispatch(updateCartItem(item.id, data)); // Assuming item.id is the cart item's ID
  };
  

  return (
    <div className="p-9 my-6 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.description}</p>
          <p className="opacity-70 mt-2">{`Size: ${item.size} ${item.product.color} `}</p>
          <p className="opacity-70">{`Seller: ${item.product.brand}`}</p>
          <div className="flex items-center space-x-5 text-lg lg:text-xl text-gray-900 mt-6 ">
            <p className="font-semibold">{`#${item.product.discountedPrice}`}</p>
            <p className="line-through opacity-50">{`#${item.product.price}`}</p>
            <p className="text-green-600 font-semibold">
              ${item.product.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-20 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disable={item.quantity <=1}  >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 rounded-sm border">{item.quantity}</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }} onClick={()=>handleUpdateCartItem(1)}  >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button onClick={handleDeleteCartItem} sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
