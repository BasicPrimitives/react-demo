import React from 'react';
import { makeStyles } from '@mui/styles';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  versionRoot: {
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
  const version = useSelector(state => state.pages.version); 
  return (
    <List
      component="nav"
      aria-labelledby="current-version-subheader"
      subheader={
        <ListSubheader component="div" id="current-version-subheader">
          Current Version: {version} 
        </ListSubheader>
      }
      className={classes.versionRoot}
    >
    </List>
  );
}
