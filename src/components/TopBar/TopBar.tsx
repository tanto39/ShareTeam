import React, { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { topBarLinks } from "./TopBarLinks";
import { Link } from "react-router-dom";
import classes from './TopBar.module.css';

const TopBar: FC = () => {
  return (
    <div>
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box display={"flex"} sx={{flexGrow: 1}}>
        {
          topBarLinks.map(link =>
            <Typography variant="h6" component="div" sx={{flexGrow: 0.03}}>
              <Link key={link.link} to={link.link}>{link.title}</Link>
            </Typography>
          )
        }
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    </div>
  );

};

export default TopBar;
