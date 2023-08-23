import React from "react";
import { Typography } from "@mui/material";
import { resourceAPI } from "../../services/resourceApi";
import { useGetParams } from "../../hooks/useGetParams";
import Loader from "../Loader/Loader";
import CardMessage from "../CardMessage/CardMessage";
import { ICustomError } from "../../models/IError";
import ResourceList from "../ResourceList/ResourceList";

const Resources = () => {
  const getParams = useGetParams();

  const {
    data: resourсes,
    error: errorGet,
    isLoading,
  } = resourceAPI.useFetchResourcesQuery(getParams);

  return (
    <div>
      {isLoading && <Loader />}
      {errorGet && (
        <CardMessage severity="error" error={errorGet as ICustomError} />
      )}
      <Typography variant="h1" fontSize={"2rem"} component="h1" gutterBottom>
        Ресурсы
      </Typography>
      {resourсes && <ResourceList resources={resourсes} />}
    </div>
  );
};

export default Resources;
