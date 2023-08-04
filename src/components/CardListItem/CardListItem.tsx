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
import { ICardListItemProps } from "./ICardListItemProps";
import classes from "./CardListItem.module.css";
import { useFormatDate } from "../../hooks/useFormatDate";
// import { ICardProject, ITeam } from "../../models/ICard";
// import { projects } from "../../services/local";
// import { useProject } from "../../hooks/useProject";
import { useTeam } from "../../hooks/useTeam";
import { ITeam } from "../../models/ICard";

const CardListItem: FC<ICardListItemProps> = ({ card, onOpen }) => {
  const formatDate = useFormatDate(card.needBefore);
  //const [project, setProject] = useState<ICardProject>({} as ICardProject);
  const [team, setTeam] = useState<ITeam>({} as ITeam);

  //useProject(card.project, setProject);
  useTeam(card.teamId, setTeam);

  return (
    <StyledEngineProvider injectFirst>
      <Grid item md={4}>
        <Card
          variant="outlined"
          className={classes.card}
          onClick={() => onOpen(card.id)}
        >
          <CardHeader title={card.jobTitle} />
          <CardContent>
            <List dense={true}>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Контактное лицо"
                  secondary={`${card.ownerDetail?.firstname} ${card.ownerDetail?.lastname}`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Команда" secondary={team.name} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Проект" secondary={card.projectName} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Ранг" secondary={card.rank} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Место работы" secondary={card.locationWorked} />
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
                  primary="Описание вакансии"
                  secondary={card.description}
                />
              </ListItem>
              <ListItem>
                <div className={classes.tags}>
                  {card.skills.map((skill) => (
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

export default CardListItem;
