import React, { FC } from "react";
import { CircularProgress } from "@mui/material";
import classes from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={classes.cardLoader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
