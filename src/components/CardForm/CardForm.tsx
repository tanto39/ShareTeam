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
import { useAppSelector } from "../../hooks/redux";

const CardForm: FC<ICardFormProps> = ({ Id, isOpen, onClose }) => {
  const [card, setCard] = useState<ICard>({} as ICard);
  //const [project, setProject] = useState<ICardProject>({} as ICardProject);
  const [team, setTeam] = useState<ITeam>({} as ITeam);
  const [error, setError] = useState<ICustomError | undefined>();
  const [message, setMessage] = useState<string>();

  // const setCardFromLocal = (Id: number | undefined) => {
  //   const cardFromLocal: ICard = cardListLocal.filter(
  //     (card) => card.id === Id
  //   )[0];
  //   setCard(cardFromLocal);
  // };

  const [
    createCard,
    { isLoading: isLoadingCreate, error: errorCreate, reset: resetCreate },
  ] = cardsAPI.useCreateCardMutation();

  const [
    updateCard,
    { isLoading: isLoadingUpd, error: errorUpd, reset: resetUpd },
  ] = cardsAPI.useUpdateCardMutation();

  const [
    deleteCard,
    { isLoading: isLoadingDel, error: errorDel, reset: resetDel },
  ] = cardsAPI.useDeleteCardMutation();

  const { userInfo } = useAppSelector((state) => state.appReduser);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!Id) {
      const createResult = await createCard(card).unwrap();
      if (createResult) {
        setCard(createResult);
        setMessage("Карточка создана");
      }
    } else {
      const updateResult = await updateCard(card).unwrap();
      if (updateResult) {
        setCard(updateResult);
        setMessage("Карточка сохранена");
      }
    }
  };

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const deleteResult = await deleteCard(card.id as number).unwrap();
    if (deleteResult) {
      setCard({} as ICard);
      setMessage("Карточка удалена");
    }
  };

  const {
    data: dataCard,
    error: errorCardGet,
    isLoading: isLoadingCard,
    refetch: refetch,
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
    if (userInfo) {
      if (!Id) {
        setCard({ ...card, skills: [], ownerId: userInfo.user?.id as number });
      }
      if (Id && dataCard) {
        setCard({ ...dataCard });
      }
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
  }, [Id, dataCard, errorCardGet, errorCreate, errorUpd, errorDel, userInfo]);

  //useProject(card.project, setProject);
  useTeam(card?.teamId, setTeam);

  const clearError = () => {
    setError(undefined);
    resetDel();
    resetUpd();
    resetCreate();
  };

  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={isOpen} onClose={onCloseCard}>
        {(isLoadingCard || isLoadingCreate || isLoadingUpd || isLoadingDel) && (
          <Loader />
        )}
        {(error?.data || error?.error) && (
          <CardMessage
            severity="error"
            error={error as ICustomError}
            clearMessage={clearError}
          />
        )}
        {card && (
          <div>
            <DialogTitle>{card.jobTitle ? `${card.id} ${card.jobTitle}` : ""}</DialogTitle>
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
