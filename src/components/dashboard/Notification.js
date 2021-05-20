import {makeStyles,Paper } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles({
    sidebar:{
        margin:0
      },
})

const Notification = () => {
    const classes=useStyles();
    return (
        <div className={classes.sidebar}>
          <Paper elevation={0} style={{width:400,height:500}}>

          </Paper>
          </div>
    )
}

export default Notification
