import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate();

   const handleSubmit = (e) =>{
       e.prventDefault();

       const data = new FormData(e.currentTarget)
       const  userData = {
          firstName:data.get("firstName"),
          lastName:data.get("LastName"),
          password:data.get("password"),
          email: data.get("email"),
       }
       console.log("user data :", userData);
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lasttName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="passsword"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" size="large" sx={{padding:".9rem 0", bgcolor:"#9155FD"}} className="w-full bg-[#9155FD]" >
                Regiter
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center ">
        <div className="flex items-center py-3">
          <p>if you have already have an account ? </p>
          <Button
            className="ml-5"
            size="small"
            onClick={() => navigate("/login")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
