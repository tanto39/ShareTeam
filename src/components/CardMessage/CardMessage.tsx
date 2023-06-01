import React, { FC, useState, useEffect } from "react";
import { ICardMessageProps } from "./ICardMessageProps";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CardMessage: FC<ICardMessageProps> = ({ severity, message }) => {
  const [open, setOpen] = useState<boolean>(true);

  const [msg, setMsg] = useState<String>('');

  useEffect(() => {
    if (message.data.error !== undefined) {
      setMsg(message.data.error.message.value);
    }
    else {
      setMsg(JSON.stringify(message))
    };
  }, [message]);

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
              onClick={() => { setOpen(false);}}
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
