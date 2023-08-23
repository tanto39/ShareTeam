import React, { FC, useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { IResourceFormProps } from "./IResourceFormProps";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  StyledEngineProvider,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import classes from "./ResourceForm.module.css";
import "dayjs/locale/ru";
import CardFormSkills from "../CardFormSkills/CardFormSkills";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";
import { useAppSelector } from "../../hooks/redux";
import { IResource } from "../../models/IResource";
import { resourceAPI } from "../../services/resourceApi";

const ResourceForm: FC<IResourceFormProps> = ({ Id, isOpen, onClose }) => {
  const [resource, setResource] = useState<IResource>({} as IResource);
  const [error, setError] = useState<ICustomError | undefined>();
  const [message, setMessage] = useState<string>();

  const [
    createResource,
    { isLoading: isLoadingCreate, error: errorCreate, reset: resetCreate },
  ] = resourceAPI.useCreateResourceMutation();

  const [
    updateResource,
    { isLoading: isLoadingUpd, error: errorUpd, reset: resetUpd },
  ] = resourceAPI.useUpdateResourceMutation();

  const [
    deleteResource,
    { isLoading: isLoadingDel, error: errorDel, reset: resetDel },
  ] = resourceAPI.useDeleteResourceMutation();

  const { userInfo } = useAppSelector((state) => state.appReduser);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!Id) {
      const createResult = await createResource(resource).unwrap();
      if (createResult) {
        setResource(createResult);
        setMessage("Карточка создана");
      }
    } else {
      const updateResult = await updateResource(resource).unwrap();
      if (updateResult) {
        setResource(updateResult);
        setMessage("Карточка сохранена");
      }
    }
  };

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const deleteResult = await deleteResource(resource.id as number).unwrap();
    if (deleteResult) {
      setResource({} as IResource);
      setMessage("Карточка удалена");
    }
  };

  const {
    data: dataResource,
    error: errorCardGet,
    isLoading: isLoadingCard,
  } = resourceAPI.useFetchResourceQuery(Id as number, {
    skip: !Id,
  });

  const changeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setResource({ ...resource, [key]: event.target.value });
  };

  const changeCardTags = async (newTags: any[], key: string) => {
    setResource({ ...resource, [key]: newTags });
  };

  const changeDate = async (date: Dayjs | null, key: string) => {
    setResource({ ...resource, [key]: date?.toString() });
  };

  const changeSelect = async (newValue: any, key: string) => {
    setResource({ ...resource, [key]: newValue });
  };

  const onCloseResource = async () => {
    onClose();
    setResource({} as IResource);
  };

  useEffect(() => {
    if (userInfo) {
      if (!Id) {
        setResource({
          ...resource,
          skills: [],
          ownerId: userInfo.user?.id as number,
          teammateId: userInfo.user?.id as number,
        });
      }
      if (Id && dataResource) {
        setResource({ ...dataResource });
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
  }, [
    Id,
    dataResource,
    errorCardGet,
    errorCreate,
    errorUpd,
    errorDel,
    userInfo,
  ]);

  const clearError = () => {
    setError(undefined);
    resetDel();
    resetUpd();
    resetCreate();
  };

  return (
    <StyledEngineProvider injectFirst>
      <Dialog open={isOpen} onClose={onCloseResource}>
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
        {resource && (
          <div>
            <DialogTitle>
              {resource.cardTitle ? `${resource.id} ${resource.cardTitle}` : ""}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="jobTitle"
                label="Заголовок"
                type="text"
                fullWidth
                variant="standard"
                value={resource.cardTitle ? resource.cardTitle : ""}
                onChange={(event) => changeInput(event, "cardTitle")}
              />
              <TextField
                margin="dense"
                id="person"
                label="Контактное лицо"
                type="text"
                fullWidth
                variant="standard"
                value={`${resource.ownerDetail?.firstname} ${resource.ownerDetail?.lastname}`}
                disabled
                // onChange={(event) => changeInput(event, "person")}
              />
              <TextField
                margin="dense"
                id="rank"
                label="Ранг"
                type="text"
                fullWidth
                variant="standard"
                value={resource.rank ? resource.rank : ""}
                onChange={(event) => changeInput(event, "rank")}
              />
              <TextField
                margin="dense"
                id="locationWorked"
                label="Место работы"
                type="text"
                fullWidth
                variant="standard"
                value={resource.locationWorked ? resource.locationWorked : ""}
                onChange={(event) => changeInput(event, "locationWorked")}
              />
              <TextField
                margin="dense"
                id="description"
                label="Описание"
                type="text"
                fullWidth
                variant="standard"
                multiline
                maxRows={10}
                value={resource.description ? resource.description : ""}
                onChange={(event) => changeInput(event, "description")}
              />
              <div className={classes.datepicker}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ru"
                >
                  <DatePicker
                    label="Дата с"
                    className={classes.datepicker}
                    value={dayjs(resource.fromFree)}
                    onChange={(newValue) => changeDate(newValue, "fromFree")}
                  />
                </LocalizationProvider>
              </div>
              <div className={classes.datepicker}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ru"
                >
                  <DatePicker
                    label="Дата по"
                    className={classes.datepicker}
                    value={dayjs(resource.endFree)}
                    onChange={(newValue) => changeDate(newValue, "endFree")}
                  />
                </LocalizationProvider>
              </div>
              {resource.skills && (
                <CardFormSkills
                  skills={resource.skills}
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

export default ResourceForm;
