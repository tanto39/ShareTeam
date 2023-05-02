import React, { FC, useState } from "react";
import { IFilterProps } from "./IFilterProps";
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
import { projects } from "../../services/local";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import CardFormSkills from "../CardFormSkills/CardFormSkills";

const Filter: FC<IFilterProps> = ({ cards }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

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
            <Grid item md={4}>
              <TextField
                className={classes.filter__field}
                id="filterPerson"
                label="Контактное лицо"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <Autocomplete
                disablePortal
                className={classes.filter__field}
                id="filterProject"
                options={projects}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField {...params} label="Проект" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                className={classes.filter__field}
                id="FilterDescr"
                label="Описание"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} marginTop={"1rem"}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="ru"
              >
                <DatePicker
                  className={classes.filter__field}
                  label="Дата действия"
                  onChange={() => {}}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={8}>
              <div className={classes.filter__field}>
                <CardFormSkills skills={[]} onChange={() => {}} />
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
              <Button variant="contained" onClick={() => {}}>
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
