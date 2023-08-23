import React, { FC, useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  StyledEngineProvider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IResourceListItemProps } from "./IResourceListItemProps";
import classes from "./ResourceListItem.module.css";
import { useFormatDate } from "../../hooks/useFormatDate";

const ResourceListItem: FC<IResourceListItemProps> = ({ resource, onOpen }) => {
  const formatDate = useFormatDate(resource.endFree);

  return (
    <StyledEngineProvider injectFirst>
      <Grid item md={4}>
        <Card
          variant="outlined"
          className={classes.resource}
          onClick={() => onOpen(resource.id)}
        >
          <CardHeader title={resource.cardTitle} />
          <CardContent>
            <List dense={true}>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Контактное лицо"
                  secondary={`${resource.ownerDetail?.firstname} ${resource.ownerDetail?.lastname}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Ранг" secondary={resource.rank} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Место работы" secondary={resource.locationWorked} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Дата действия" secondary={formatDate} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Описание"
                  secondary={resource.description}
                />
              </ListItem>
              <ListItem>
                <div className={classes.tags}>
                  {resource.skills.map((skill) => (
                    <Chip
                      key={skill.id}
                      className={classes.tags__item}
                      label={skill.skill}
                      variant="outlined"
                    />
                  ))}
                </div>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ResourceListItem;
