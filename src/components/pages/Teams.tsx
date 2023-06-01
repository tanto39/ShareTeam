import React, { FC } from "react";
import { teams } from "../../services/local";
import { Typography } from "@mui/material";
import TeamList from "../TeamList/TeamList";
import TeamCreate from "../TeamCreate/TeamCreate";

const Teams: FC = () => {
  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Команды
      </Typography>
      <TeamCreate/>
      <TeamList teams={teams}/>
    </div>
  );
};

export default Teams;
