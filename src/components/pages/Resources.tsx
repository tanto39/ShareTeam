import React from "react";
import CardList from "../CardList/CardList";
import { IGetParams } from "../../models/IGetParams";
import { Typography } from "@mui/material";
import { cardListLocal } from "../../services/local";

const Resources = () => {
  const GetParams: IGetParams = {
    $format: "json",
  };

  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} gutterBottom>
        Ресурсы
      </Typography>
      <CardList cards={cardListLocal}/>
    </div>
  );
};

export default Resources;
