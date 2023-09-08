import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  outline:"none",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ openAuthModal, handleCloseAuthModal }) => {
const location = useLocation()
  return (
    <div>
      <Modal
        open={openAuthModal}
        onClose={handleCloseAuthModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {location.pathname === "/login" ?  <LoginForm/> :  <RegistrationForm/>  }
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
