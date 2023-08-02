import React from "react";
import CardList from "../CardList/CardList";
import { IGetParams } from "../../models/IGetParams";
import { Typography } from "@mui/material";
import { cardListLocal } from "../../services/local";

const Resources = () => {

  // const fetchCards = async() => {
  //   const response: Response = await fetch(
  //     'http://1348377-ch44360.tw1.ru/cards',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'ContentType': 'application/json',
  //       }
  //     });
  
  //   const data: any = await response.json();
  // };

  // fetchCards();


  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Ресурсы
      </Typography>
      <CardList cards={cardListLocal} url="/resources"/>
    </div>
  );
};

export default Resources;
