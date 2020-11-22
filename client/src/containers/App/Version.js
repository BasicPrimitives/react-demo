import React from 'react';
import primitives from 'basicprimitives';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="current-version-subheader"
      subheader={
        <ListSubheader component="div" id="current-version-subheader">
          Current Version: {primitives.common.version} 
        </ListSubheader>
      }
      className={classes.root}
    >
    </List>
  );
}
