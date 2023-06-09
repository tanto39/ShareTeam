import React, { FC, useState, useEffect, ChangeEvent, MouseEvent } from "react";
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
import { ICard, ICardProject, ITeam } from "../../models/ICard";
import { cardListLocal, teams } from "../../services/local";
import classes from "./CardForm.module.css";
import "dayjs/locale/ru";
import CardFormSkills from "../CardFormSkills/CardFormSkills";
//import { projects } from "../../services/local";
//import { useProject } from "../../hooks/useProject";
import { useTeam } from "../../hooks/useTeam";
import { cardsAPI } from "../../services/cardsApi";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";

const CardForm: FC<ICardFormProps> = ({ Id, isOpen, onClose }) => {
  const [card, setCard] = useState<ICard>({} as ICard);
  //const [project, setProject] = useState<ICardProject>({} as ICardProject);
  const [team, setTeam] = useState<ITeam>({} as ITeam);
  const [error, setError] = useState<ICustomError>();
  const [message, setMessage] = useState<string>();

  // const setCardFromLocal = (Id: number | undefined) => {
  //   const cardFromLocal: ICard = cardListLocal.filter(
  //     (card) => card.id === Id
  //   )[0];
  //   setCard(cardFromLocal);
  // };

  const [createCard, { isLoading: isLoadingCreate, error: errorCreate }] =
    cardsAPI.useCreateCardMutation();

  const [updateCard, { isLoading: isLoadingUpd, error: errorUpd }] =
    cardsAPI.useUpdateCardMutation();

  const [deleteCard, { isLoading: isLoadingDel, error: errorDel }] =
    cardsAPI.useDeleteCardMutation();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!Id) {
      const createResult = await createCard(card).unwrap();
      if (createResult) {
        setCard(createResult);
        setMessage("Карточка создана");
      };
    } else {
      const updateResult = await updateCard(card).unwrap();
      if (updateResult) {
        setCard(updateResult);
        setMessage("Карточка сохранена");
      };
    };
  };

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const deleteResult = await deleteCard(card.id as number).unwrap();
      if (deleteResult) {
        setCard({} as ICard);
        setMessage("Карточка удалена");
      };
    } catch (e: any) {
      setError(e as ICustomError);
    }
  };

  const {
    data: dataCard,
    error: errorCardGet,
    isLoading: isLoadingCard,
  } = cardsAPI.useFetchCardQuery(Id as number, {
    skip: !Id,
  });

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
    if (!Id) {
      setCard({ ...card, skills: [] });
    }
    if (Id && dataCard) {
      setCard(dataCard);
    }
    if (errorCardGet) {
      setError(errorCardGet as ICustomError);
    }
    if (errorCreate) {
      setError(errorCreate as ICustomError);
    }
    if (errorUpd) {
      setError(errorUpd as ICustomError);
    }
    if (errorDel) {
      setError(errorDel as ICustomError);
    }
  }, [Id, dataCard, errorCardGet, errorCreate, errorUpd, errorDel]);

  //useProject(card.project, setProject);
  useTeam(card?.teamId, setTeam);

  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={isOpen} onClose={onCloseCard}>
        {(isLoadingCard || isLoadingCreate || isLoadingUpd || isLoadingDel) && <Loader />}
        {error && (
          <CardMessage
            severity="error"
            error={error as ICustomError}
            clearMessage={() => setError(undefined)}
          />
        )}
        {card && (
          <div>
            <DialogTitle>{card.jobTitle ? card.jobTitle : ""}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="jobTitle"
                label="Заголовок"
                type="text"
                fullWidth
                variant="standard"
                value={card.jobTitle ? card.jobTitle : ""}
                onChange={(event) => changeCardInput(event, "jobTitle")}
              />
              <TextField
                margin="dense"
                id="person"
                label="Контактное лицо"
                type="text"
                fullWidth
                variant="standard"
                value={card.person ? card.person : ""}
                onChange={(event) => changeCardInput(event, "person")}
              />
              <Autocomplete
                fullWidth
                value={team}
                onChange={(event, newInputValue) => {
                  changeSelect(newInputValue?.id, "teamId");
                }}
                id="teamId"
                options={teams}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Команда"
                    variant="standard"
                    margin="dense"
                  />
                )}
              />
              {/* <Autocomplete
                fullWidth
                value={project}
                onChange={(event, newInputValue) => {
                  changeSelect(newInputValue?.id, "project");
                }}
                id="project"
                options={projects}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Проект"
                    variant="standard"
                    margin="dense"
                  />
                )}
              /> */}
              <TextField
                margin="dense"
                id="projectName"
                label="Проект"
                type="text"
                fullWidth
                variant="standard"
                value={card.projectName ? card.projectName : ""}
                onChange={(event) => changeCardInput(event, "projectName")}
              />
              <TextField
                margin="dense"
                id="rank"
                label="Ранг"
                type="text"
                fullWidth
                variant="standard"
                value={card.rank ? card.rank : ""}
                onChange={(event) => changeCardInput(event, "rank")}
              />
              <TextField
                margin="dense"
                id="locationWorked"
                label="Место работы"
                type="text"
                fullWidth
                variant="standard"
                value={card.locationWorked ? card.locationWorked : ""}
                onChange={(event) => changeCardInput(event, "locationWorked")}
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
                value={card.description ? card.description : ""}
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
                    value={dayjs(card.needBefore)}
                    onChange={(newValue) => changeDate(newValue, "needBefore")}
                  />
                </LocalizationProvider>
              </div>
              {card.skills && (
                <CardFormSkills
                  skills={card.skills}
                  onChange={changeCardTags}
                />
              )}
              {message && (
                <CardMessage
                  severity="info"
                  message={message}
                  clearMessage={() => setMessage(undefined)}
                />
              )}
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={onClose}>
                Отменить
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Сохранить
              </Button>
              <Button variant="contained" onClick={handleDelete}>
                Удалить
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </StyledEngineProvider>
  );
};

export default CardForm;
