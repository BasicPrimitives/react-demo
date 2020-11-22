import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import { Link } from '@reach/router';
import { useLocation } from "@reach/router"

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function AppDrawerNavItem(props) {
  let {
    children,
    depth,
    href,
    onClick,
    openImmediately = false,
    topLevel = false,
    title,
    linkProps,
    ...other
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(openImmediately);
  const { pathname, hash } = useLocation();
  const isActive = (`${pathname}${hash}` === href);

  useEffect(() => {
    setOpen(openImmediately);
  }, [openImmediately]);

  const handleClick = () => {
    setOpen((oldOpen) => !oldOpen);
  };

  const style = {
    paddingLeft: 8 * (3 + 2 * depth),
  };
  if (href) {
    return (
      <ListItem className={classes.itemLeaf} disableGutters {...other}>
        <Button
          component={Link}
          naked="naked"
          to={href}
          className={isActive ? clsx(classes.buttonLeaf, `depth-${depth}`, `drawer-active ${classes.active}`) : clsx(classes.buttonLeaf, `depth-${depth}`)}
          disableTouchRipple
          onClick={onClick}
          style={style}
          {...linkProps}
        >
          {title}
        </Button>
      </ListItem>
    );
  }

  return (
    <ListItem className={classes.item} disableGutters {...other}>
      <Button
        classes={{
          root: classes.button,
          label: topLevel ? 'algolia-lvl0' : '',
        }}
        onClick={handleClick}
        style={style}
      >
        {title}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </ListItem>
  );
}

AppDrawerNavItem.propTypes = {
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  linkProps: PropTypes.object,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
  topLevel: PropTypes.bool
};
