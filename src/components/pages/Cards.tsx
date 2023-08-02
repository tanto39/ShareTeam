import React from "react";
import CardList from "../CardList/CardList";
//import { IGetParams } from "../../models/IGetParams";
import { Typography } from "@mui/material";
//import { cardListLocal } from "../../services/local";
import { cardsAPI } from "../../services/cardsApi";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";
import { useGetParams } from "../../hooks/useGetParams";

const Cards = () => {
  // const GetParams: IGetParams = {
  //   $format: 'json'
  // };
   
  const getParams = useGetParams();

  const {
    data: cards,
    error: errorGet,
    isLoading,
  } = cardsAPI.useFetchCardsQuery(getParams);

  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Потребности
      </Typography>
      {isLoading && <Loader />}
      {errorGet && (
        <CardMessage severity="error" error={errorGet as ICustomError} />
      )}
      {cards && <CardList cards={cards} url="/" />}
    </div>
  );
};

export default Cards;
