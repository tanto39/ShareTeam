import React, { FC, useState, ChangeEvent } from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Grid,
  Button,
  Autocomplete,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./Filter.module.css";
import { projects, teams } from "../../services/local";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import CardFormSkills from "../CardFormSkills/CardFormSkills";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFilter } from "../../store/reducers/ActionCreators";
import { InitialState } from "../../store/reducers/FilterSlice";
import { useProject } from "../../hooks/useProject";
import { ICardProject, ITeam } from "../../models/ICard";
import { useTeam } from "../../hooks/useTeam";
import { IFilterProps } from "./IFilterProps";

const Filter: FC<IFilterProps> = ({ isResource }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { filter } = useAppSelector((state) => state.filterReduser);
  const [project, setProject] = useState<ICardProject>({} as ICardProject);
  const [team, setTeam] = useState<ITeam>({} as ITeam);
  const dispatch = useAppDispatch();

  const changeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    dispatch(setFilter({ ...filter, [key]: event.target.value }));
  };

  const changeTags = async (newTags: any[], key: string) => {
    dispatch(setFilter({ ...filter, [key]: newTags }));
  };

  const changeSelect = async (newValue: any, key: string) => {
    dispatch(setFilter({ ...filter, [key]: newValue }));
  };

  const changeDate = async (date: Dayjs | null, key: string) => {
    dispatch(setFilter({ ...filter, [key]: date?.format("YYYY-MM-DD") }));
  };

  const clearFilter = async () => {
    dispatch(setFilter(InitialState.filter));
  };

  // useProject(filter.project, setProject);
  // useTeam(filter.teamId, setTeam);

  const setOpen =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panelFilter"}
      onChange={setOpen("panelFilter")}
      className={classes.filter}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography variant="h6" component="p">
          Фильтр
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form" autoComplete="off">
          <Grid container spacing={1}>
            {isResource && (
              <Grid item md={4}>
                <TextField
                  className={classes.filter__field}
                  id="filterCardTitle"
                  label="Заголовок"
                  variant="outlined"
                  value={filter.cardTitle}
                  onChange={(event) => changeInput(event, "cardTitle")}
                />
              </Grid>
            )}
             {isResource && (
              <Grid item md={4}>
                <TextField
                  className={classes.filter__field}
                  id="filterlocationWorked"
                  label="Место работы"
                  variant="outlined"
                  value={filter.locationWorked}
                  onChange={(event) => changeInput(event, "locationWorked")}
                />
              </Grid>
            )}
            {isResource && (
              <Grid item md={4}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ru"
                >
                  <DatePicker
                    className={classes.filter__field}
                    label="Дата"
                    value={filter.needBefore ? dayjs(filter.endFree) : null}
                    onChange={(newValue) => changeDate(newValue, "endFree")}
                  />
                </LocalizationProvider>
              </Grid>
            )}
            {!isResource && (
              <Grid item md={4}>
                <TextField
                  className={classes.filter__field}
                  id="filterJobTitle"
                  label="Заголовок"
                  variant="outlined"
                  value={filter.jobTitle}
                  onChange={(event) => changeInput(event, "jobTitle")}
                />
              </Grid>
            )}
            {!isResource && (
              <Grid item md={4}>
                <TextField
                  className={classes.filter__field}
                  id="filterProjectName"
                  label="Проект"
                  variant="outlined"
                  value={filter.projectName}
                  onChange={(event) => changeInput(event, "projectName")}
                />
              </Grid>
            )}
            {!isResource && (
              <Grid item md={4}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ru"
                >
                  <DatePicker
                    className={classes.filter__field}
                    label="Дата действия"
                    value={filter.needBefore ? dayjs(filter.needBefore) : null}
                    onChange={(newValue) => changeDate(newValue, "needBefore")}
                  />
                </LocalizationProvider>
              </Grid>
            )}

            <Grid item md={4} marginTop={"1rem"}>
              <TextField
                className={classes.filter__field}
                id="filterDescription"
                label="Описание"
                variant="outlined"
                value={filter.description}
                onChange={(event) => changeInput(event, "description")}
              />
            </Grid>

            {/* <Grid item md={4}>
              <Autocomplete
                value={project}
                onChange={(event, newInputValue) => {
                  changeSelect(newInputValue?.id, "project");
                }}
                className={classes.filter__field}
                id="filterProject"
                options={projects}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField {...params} label="Проект" variant="outlined" />
                )}
              />
            </Grid> */}
            {/* <Grid item md={4}>
            <Autocomplete
                value={team}
                onChange={(event, newInputValue) => {
                  changeSelect(newInputValue?.id, "teamId");
                }}
                className={classes.filter__field}
                id="filterTeam"
                options={teams}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField {...params} label="Команда" variant="outlined" />
                )}
              />
            </Grid> */}

            <Grid item md={8}>
              <div className={classes.filter__field}>
                <CardFormSkills skills={filter.skills} onChange={changeTags} />
              </div>
            </Grid>
          </Grid>
          <Box display={"flex"}>
            <div className={classes.filterButton}>
              <Button variant="contained" onClick={() => {}}>
                Найти
              </Button>
            </div>
            <div className={classes.filterButton}>
              <Button variant="contained" onClick={clearFilter}>
                Сбросить
              </Button>
            </div>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
