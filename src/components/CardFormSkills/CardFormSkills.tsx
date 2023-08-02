import React, { FC, useState, useEffect } from "react";
import { ICardFormSkillsProps } from "./ICardFormSkillsProps";
import { Autocomplete, TextField, Checkbox } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import classes from "./CardFormSkills.module.css";
//import { skills as skillsLocal } from "../../services/local";
import { skillAPI } from "../../services/skillApi";
import { ICardSkill } from "../../models/ICard";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";
import { useAppSelector } from "../../hooks/redux";

const CardFormSkills: FC<ICardFormSkillsProps> = ({ skills, onChange }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { userInfo } = useAppSelector((state) => state.appReduser);
  
  const { data: allSkills, error: errorSkills } = skillAPI.useFetchSkillsQuery(
    userInfo.accessToken as string,
    { skip: !userInfo.accessToken }
  );
  const [error, setError] = useState<ICustomError>();

  useEffect(() => {
    if (errorSkills) {
      setError(errorSkills as ICustomError);
    }
  }, [errorSkills]);

  return (
    <div className={classes.tags}>
      {error && (
        <CardMessage
          severity="error"
          error={error}
          clearMessage={() => setError(undefined)}
        />
      )}
      {allSkills && (
        <Autocomplete
          value={skills}
          onChange={(event, newInputValue) => {
            onChange(newInputValue, "skills");
          }}
          multiple
          id="skill-tags"
          options={allSkills as ICardSkill[]}
          disableCloseOnSelect
          getOptionLabel={(option) => option.skill}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.skill}
            </li>
          )}
          renderInput={(params) => <TextField {...params} label="Навыки" />}
        />
      )}
    </div>
  );
};

export default CardFormSkills;
