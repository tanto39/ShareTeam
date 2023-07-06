import React, { FC } from "react";
//import { teams } from "../../services/local";
import { Typography } from "@mui/material";
import TeamList from "../TeamList/TeamList";
import TeamCreate from "../TeamCreate/TeamCreate";
import { useAppDispatch } from "../../hooks/redux";
import { teamAPI } from "../../services/teamApi";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";

const Teams: FC = () => {
  const {
    data: teams,
    error: errorGet,
    isLoading: isLoadingTeams,
  } = teamAPI.useFetchTeamsQuery({});

  return (
    <div>
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Команды
      </Typography>
      <TeamCreate />
      {isLoadingTeams && <Loader />}
      {errorGet && (
        <CardMessage severity="error" error={errorGet as ICustomError} />
      )}
      {teams && <TeamList teams={teams} />}
    </div>
  );
};

export default Teams;
