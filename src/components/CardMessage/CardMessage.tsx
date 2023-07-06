import React, { FC, useState, useEffect } from "react";
import { ICardMessageProps } from "./ICardMessageProps";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { error } from "console";

const CardMessage: FC<ICardMessageProps> = ({ severity, error, message, clearMessage }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [msg, setMsg] = useState<String>('');

  useEffect(() => {
    if ( message ) {
      setMsg(message)
    }
    else if ( error ) {
      setMsg(error.data.error);
    }
    else {
      setMsg(JSON.stringify(error))
    };
  }, [message]);

  const handleClose = async () => {
    setOpen(false);
    if (clearMessage) {
      clearMessage();
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {msg}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default CardMessage;
