import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { ICardFormProps } from "./ICardFormProps";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ICard } from "../../models/ICard";
import { cardListLocal } from "../../services/local";
import classes from "./CardForm.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import 'dayjs/locale/ru';

const CardForm: FC<ICardFormProps> = ({ Id, isOpen, onClose }) => {
  const [card, setCard] = useState<ICard>({} as ICard);

  const setCardFromLocal = (Id: string | boolean) => {
    const cardFromLocal: ICard = cardListLocal.filter(
      (card) => card.id === Id
    )[0];
    setCard(cardFromLocal);
  };

  const changeCardInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setCard({ ...card, [key]: event.target.value });
  };

  const changeDate = async (date: Dayjs | null, key: string) => {
    setCard({ ...card, [key]: date?.toString() });
  };

  const onCloseCard = async () => {
    onClose();
    setCard({} as ICard);
  };

  useEffect(() => {
    if (Id) {
      setCardFromLocal(Id);
    }
  }, [Id]);

  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={isOpen} onClose={onCloseCard}>
        <DialogTitle>{card.title ? card.title : ""}</DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Заголовок"
            type="text"
            fullWidth
            variant="standard"
            value={card.title}
            onChange={(event) => changeCardInput(event, "title")}
          />
          <TextField
            margin="dense"
            id="person"
            label="Контактное лицо"
            type="text"
            fullWidth
            variant="standard"
            value={card.person}
            onChange={(event) => changeCardInput(event, "person")}
          />
          <TextField
            margin="dense"
            id="project"
            label="Проект"
            type="text"
            fullWidth
            variant="standard"
            value={card.project}
            onChange={(event) => changeCardInput(event, "project")}
          />
          <TextField
            margin="dense"
            id="description"
            label="Описание вакансии"
            type="text"
            fullWidth
            variant="standard"
            multiline
            maxRows={10}
            value={card.description}
            onChange={(event) => changeCardInput(event, "description")}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <DatePicker
              label="Дата действия"
              className={classes.datePicker}
              value={dayjs(card.endDate)}
              onChange={(newValue) => changeDate(newValue, "endDate")}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>
            Отменить
          </Button>
          <Button variant="contained" onClick={onClose}>
            Сохранить
          </Button>
          <Button variant="contained" onClick={onClose}>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </StyledEngineProvider>
  );
};

export default CardForm;
