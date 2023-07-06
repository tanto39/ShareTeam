import React, {FC} from 'react';
import { Button, Grid } from "@mui/material";
import { ITopBlock } from './ITopBlock';
import classes from './TopBlock.module.css';

const TopBlock: FC<ITopBlock> = ({onOpen}) => {
  return (
    <Grid container spacing={2} className={classes.topblock}>
      <Grid item md={4}>
        <Button variant="contained" onClick={() => onOpen(undefined)}>Создать карточку</Button>
      </Grid>
    </Grid>
  )
}

export default TopBlock;