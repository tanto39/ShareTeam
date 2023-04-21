import React, { FC } from "react";
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
  StyledEngineProvider
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ICardListItemProps } from "./ICardListItemProps";
import classes from "./CardListItem.module.css";
import { useFormatDate } from "../../hooks/useFormatDate";

const CardListItem: FC<ICardListItemProps> = ({ card, onOpen }) => {
  const formatDate = useFormatDate(card.endDate);

  return (
    <StyledEngineProvider injectFirst>
    <Grid item md={4}>
      <Card
        variant="outlined"
        className={classes.card}
        onClick={() => onOpen(card.id)}
      >
        <CardHeader title={card.title} />
        <CardContent>
          <List dense={true}>
            <ListItem>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Контактное лицо" secondary={card.person} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Проект" secondary={card.project} />
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
                    label={skill.name} variant="outlined" 
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
