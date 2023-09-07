import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Grid } from "@mui/material";
import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <div className="px-5 py-10 lg:px-20">
      <div className="">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5" >
      {[1, 1, 1, 1, 1].map((item, index) => (
        <Grid
          item
          key={index} // Add a unique key for each item in the map
          container
          className="shadow-xl border  p-5 rounded-md"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="h-[5rem] w-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
                alt=""
              />
              <div className="ml-5 space-x-2">
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className="space-x-5 opacity-50 text-xs">
                  <span>Color: Pink</span> <span>Size: M</span>
                </p>
                <p>Seller: Loverthi</p>
                <p>#1099</p>
                </div>
            </div>
          </Grid>
          <Grid item>
            <Box>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default OrderDetails;
