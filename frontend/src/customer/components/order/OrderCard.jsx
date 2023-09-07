import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/account/order/${2}`) } className="border p-5 shadow-md shadow-black mb-4 hover:shadow-2xl">
      <Grid
        container
        border
        spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="h-[5rem] w-[5rem] object-cover object-top "
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p>Women Kurta and Pant Set Art Silk</p>
              <p className="opacity-50 text-xs font-semibold">Size: L</p>
              <p className='"opacity-50 text-xs font-semibold'>Color: Red</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>#1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  className="text-green-600 mr-2 text-sm"
                  sx={{ width: "15px", height: "15px" }}
                />
                <span>Expected to delivere on march 30</span>
              </p>
              <p className="text-sm">Your Item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected to delivere on march 30</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
