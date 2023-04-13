import React from "react";
import CardList from "../CardList/CardList";
import { IGetParams } from "../../models/IGetParams";
import { Typography } from '@mui/material';
import { cardListLocal } from "../../services/local";

const Cards = () => {
  const GetParams: IGetParams = {
    $format: 'json'
  };

  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} gutterBottom>
        Потребности
      </Typography>
      <CardList cards={cardListLocal}/>
    </div>
  );

};

export default Cards;
