import React, { FC } from "react";
import { Grid } from "@mui/material";
import classes from "./CardList.module.css";
import { ICardListProps } from "./ICardListProps";
import CardListItem from "../CardListItem/CardListItem";
import CardForm from "../CardForm/CardForm";
import TopBlock from "../TopBlock/TopBlock";
import Filter from "../Filter/Filter";
import CardsPagination from "../CardsPagination/CardsPagination";

const CardList: FC<ICardListProps> = ({ cards, url }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [openCardId, setOpenCardId] = React.useState<number | undefined>();
  const [cardId, setCardId] = React.useState<number | undefined>();

  const handleOpen = async (Id: number | undefined) => {
    setOpen(true);
    setCardId(Id);
  };

  const handleClose = () => {
    setOpen(false);
    setCardId(0);
  };

  return (
    <div>
      <TopBlock onOpen={handleOpen}/>
      <Filter cards={cards.content}/>
      <Grid container spacing={2}>
        {cards.content.map((card, index) => (
          <CardListItem key={card.id} card={card} onOpen={handleOpen} />
        ))}
      </Grid>
      <CardsPagination url={url}/>

      <CardForm Id={cardId} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default CardList;
