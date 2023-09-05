import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const RegistrationForm = () => {
  return (
    <div>
      <form >
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
    </div>
  );
};

export default RegistrationForm;
