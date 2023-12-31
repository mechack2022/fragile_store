import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/auth/Action";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const loginData = {
      password: data.get("password"),
      email: data.get("email"),
    };
    dispatch(login(loginData))
    // console.log("user data :", loginData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ padding: ".9rem 0", bgcolor: "#9155FD" }}
              className="w-full bg-[#9155FD]"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center ">
        <div className="flex items-center py-3">
          <p>if you have don not have an account ? </p>
          <Button
            className="ml-5"
            size="small"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
