import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { ICardFormProps } from "./ICardFormProps";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  StyledEngineProvider,
  Autocomplete,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ICard } from "../../models/ICard";
import { cardListLocal } from "../../services/local";
import classes from "./CardForm.module.css";
import "dayjs/locale/ru";
import CardFormSkills from "../CardFormSkills/CardFormSkills";
import { projects } from "../../services/local";
import { useProject } from "../../hooks/useProject";

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

  const changeCardTags = async (newTags: any[], key: string) => {
    setCard({ ...card, [key]: newTags });
  };

  const changeDate = async (date: Dayjs | null, key: string) => {
    setCard({ ...card, [key]: date?.toString() });
  };

  const changeSelect = async (newValue: any, key: string) => {
    setCard({ ...card, [key]: newValue });
  };

  const onCloseCard = async () => {
    onClose();
    setCard({} as ICard);
  };

  useEffect(() => {
    if (Id) {
      setCardFromLocal(Id);
    } else {
      setCard({ ...card, skills: [] });
    }
  }, [Id]);

  const project = useProject(card.project);

  return (
    <div>
      {card && (
        <StyledEngineProvider injectFirst>
          <Dialog open={isOpen} onClose={onCloseCard}>
            <DialogTitle>{card.title ? card.title : ""}</DialogTitle>
            <DialogContent>
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
              <Autocomplete
                fullWidth
                value={project}
                onChange={(event, newInputValue) => {
                  changeSelect(newInputValue?.id, "project");
                }}
                id="project"
                options={projects}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField {...params} label="Проект" variant="standard" margin="dense"/>
                )}
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
              <div className={classes.datepicker}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ru"
                >
                  <DatePicker
                    label="Дата действия"
                    className={classes.datepicker}
                    value={dayjs(card.endDate)}
                    onChange={(newValue) => changeDate(newValue, "endDate")}
                  />
                </LocalizationProvider>
              </div>
              {card.skills && (
                <CardFormSkills
                  skills={card.skills}
                  onChange={changeCardTags}
                />
              )}
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
      )}
    </div>
  );
};

export default CardForm; 
