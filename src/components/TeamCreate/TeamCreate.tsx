import React, { ChangeEvent, FC, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { ITeam } from "../../models/ICard";

const TeamCreate: FC = () => {
  const [teamCreate, setTeamCreate] = useState<ITeam>({} as ITeam);

  const changeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setTeamCreate({ ...teamCreate, [key]: event.target.value });
  };

  return (
    <Grid container spacing={1} alignItems={"center"}>
      <Grid item md={4}>
        <TextField
          onChange={(event) => changeInput(event, "name")}
          value={teamCreate.name}
          margin="normal"
          fullWidth
          id="teamName"
          label="Название"
          name="teamName"
          variant="standard"
        />
      </Grid>
      <Grid item md={4}>
        <Button variant="contained" onClick={() => {}}>
          Создать команду
        </Button>
      </Grid>
    </Grid>
  );
};

export default TeamCreate;
