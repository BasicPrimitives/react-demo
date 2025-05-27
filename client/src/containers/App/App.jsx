import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Helmet from 'react-helmet';
import { Outlet } from 'react-router-dom';
import AppDrawer from './AppDrawer';
import Version from './Version';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from './AppBar';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftStatic: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    overflowX: "auto"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  contentStatic: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflowX: "auto"
  }
}));

const App = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(() => !isSmallScreen);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div className={classes.root}>
      <Helmet titleTemplate="Basic Primitives Diagrams %s" />
      <CssBaseline />
      {/* For larger screens */}
      {!isSmallScreen && (
        <>
          <AppBar open={open} className={clsx(classes.appBar, {[classes.appBarShift]: open})} handleDrawerOpen={handleDrawerOpen}
          />
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              {Version()}  
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <AppDrawer onClose={() => setOpen(!isSmallScreen)} />
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Outlet />
          </main>
        </>
      )}
      {/* For smaller screens */}
      {isSmallScreen && (
        <>
          <AppBar open={open} className={classes.appBarShiftStatic} handleDrawerOpen={handleDrawerOpen} />
          <Drawer
            className={classes.drawer}
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              {Version()}  
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <AppDrawer onClose={() => setOpen(!isSmallScreen)} />
          </Drawer>
          <main className={classes.contentStatic} >
            <div className={classes.drawerHeader} />
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}


export default App;
