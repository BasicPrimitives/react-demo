import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

export default function ApplicationBar(props) {
  const { open, className, handleDrawerOpen } = props;
  const classes = useStyles();
  return (
    <AppBar
    position="fixed"
    className={className}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <div className={classes.grow}>
        <Typography variant="h6" noWrap>
          Basic Primitives
        </Typography>
      </div>
      <IconButton 
        color="inherit"
        edge="end"
        aria-label="GitHub repos."
      >
        <Link
          color="inherit"
          href="https://github.com/BasicPrimitives"
        >
          <GitHubIcon />
        </Link>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}
