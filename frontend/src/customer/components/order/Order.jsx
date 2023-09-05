import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Return", value: "return" },
];

const Order = () => {
  return (
    <div className="lg:px-20 px-5">
        {/* FITER GRID  */}
      <Grid container sx={{ justifyContent: "space-between", my: 10}}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg border p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="mt-10 space-y-4">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultValue={option.value}
                    className=" h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-400"
                  />
                  <label className="ml-3 text-sm tex-grey-600">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
         {/* carts history  */}
         <Grid item xs={9} >
          {[1,1,1,1].map( (item) => <OrderCard/>  )}
         </Grid>
      </Grid>
    </div>
  );
};

export default Order;
