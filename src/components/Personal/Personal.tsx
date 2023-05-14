import React, { FC, useState, MouseEvent } from "react";
import {
  Popover,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from '@mui/icons-material/Groups';
import classes from "./Personal.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setAuth } from "../../store/reducers/ActionCreators";
import { InitialState } from "../../store/reducers/AppSlice";

const Personal: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { userInfo, isLoading } = useAppSelector((state) => state.appReduser);

  const handleOpen = async (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(
      setAuth(InitialState.userInfo)
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? "personal-popover" : undefined;

  return (
    <div>
      <IconButton
        size="large"
        aria-describedby={id}
        onClick={handleOpen}
        color="inherit"
      >
        <AccountCircleIcon fontSize="large" color="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className={classes.personal}>
          <Typography variant="h6" component="p" gutterBottom>
            Личный кабинет
          </Typography>

          <List dense={true}>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Имя пользователя" secondary={userInfo.userName} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Команда" secondary={userInfo.team} />
            </ListItem>
          </List>
          <Button variant="contained" onClick={handleLogout}>
            Выйти
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default Personal;
