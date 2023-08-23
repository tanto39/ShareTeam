import React, { FC } from "react";
import { Grid } from "@mui/material";
import classes from "./ResourceList.module.css";
import { IResourceListProps } from "./IResourceListProps";
import TopBlock from "../TopBlock/TopBlock";
import Filter from "../Filter/Filter";
import CardsPagination from "../CardsPagination/CardsPagination";
import ResourceListItem from "../ResourceListItem/ResourceListItem";
import ResourceForm from "../ResourceForm/ResourceForm";

const ResourceList: FC<IResourceListProps> = ({ resources }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [resourceId, setResourceId] = React.useState<number | undefined>();

  const handleOpen = async (Id: number | undefined) => {
    setOpen(true);
    setResourceId(Id);
  };

  const handleClose = () => {
    setOpen(false);
    setResourceId(0);
  };

  return (
    <div>
      <TopBlock onOpen={handleOpen}/>
      <Filter isResource={true} />
      <Grid container spacing={2}>
        {resources.content.map((resource, index) => (
          <ResourceListItem key={resource.id} resource={resource} onOpen={handleOpen} />
        ))}
      </Grid>
      <CardsPagination totalPages={resources.totalPages}/>

      <ResourceForm Id={resourceId} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ResourceList;
