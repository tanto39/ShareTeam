import React, { FC } from "react";
import { ICardFormSkillsProps } from "./ICardFormSkillsProps";
import { Autocomplete, TextField, Checkbox } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import classes from "./CardFormSkills.module.css";
import { skills as skillsLocal } from "../../services/local";

const CardFormSkills: FC<ICardFormSkillsProps> = ({ skills, onChange }) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div className={classes.tags}>
      <Autocomplete
        value={skills}
        onChange={(event, newInputValue) => {
          onChange(newInputValue, "skills")
        }}
        multiple
        id="skill-tags"
        options={skillsLocal}
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
        renderInput={(params) => (
          <TextField {...params} label="Навыки"/>
        )}
      />
    </div>
  );
};

export default CardFormSkills;
