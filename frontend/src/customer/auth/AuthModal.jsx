import { Box, Modal, Typography } from "@mui/material";
import React from "react";
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

const AuthModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {/* <RegistrationForm/> */}
         <LoginForm/>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
