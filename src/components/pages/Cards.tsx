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
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Потребности
      </Typography>
      <CardList cards={cardListLocal} url='/'/>
    </div>
  );

};

export default Cards;
