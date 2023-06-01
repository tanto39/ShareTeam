import { SerializedError } from "@reduxjs/toolkit";
import { ICustomError } from "../../models/IError";
import { AlertColor } from "@mui/material";

export interface ICardMessageProps {
  severity: AlertColor,
  message:ICustomError
}