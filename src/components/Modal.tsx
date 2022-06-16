import React from "react";

import { Close as CloseIcon } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  IconButton,
  Modal as MuiModal,
  SxProps,
  Theme,
} from "@mui/material";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

const style: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  minWidth: 350,
};

const Modal = ({ children, open, handleClose }: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 5, right: 5 }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
