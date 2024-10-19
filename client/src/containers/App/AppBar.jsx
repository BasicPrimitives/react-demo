import React from 'react';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';

export default function ApplicationBar(props) {
  const { open, className, handleDrawerOpen } = props;
  return (
    <AppBar
    position="fixed"
    className={className}
    sx={{
      width: null,
      transition: (theme) => theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, display: open ? 'none' : 'flex' }}
      >
        <MenuIcon />
      </IconButton>
      <div style={{ flexGrow: 1 }}>
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
