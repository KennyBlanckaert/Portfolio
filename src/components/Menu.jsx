import React, { useState } from "react";
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import useScrollbarSize from 'react-scrollbar-size';

const useStyles = (props) => makeStyles({
  menu: {
    position: 'absolute',
    maxWidth: `calc(100vw - ${props.scrollBarWidth}px) !important`,
    height: 40,
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    top: 0,
    left: 0,
    zIndex: 100,

    // Media query: 500px
    "@media (max-width: 500px)": {
      maxWidth: '100% !important',
      backgroundColor: 'rgba(10, 10, 10, 0)',
    },
  },
  icon: {
    color: 'white'
  },
  menuOpen: {
    position: 'absolute !important',
    top: 10,
    left: 10,
    visibility: 'hidden',

    // Media query: 500px
    "@media (max-width: 500px)": {
      maxWidth: 100,
      position: 'absolute',
      top: 10,
      left: 10,
      visibility: 'hidden'
    },
  },
  menuClosed: {
    position: 'absolute !important',
    top: 10,
    left: 10,
    visibility: 'hidden',

    // Media query: 500px
    "@media (max-width: 500px)": {
      maxWidth: 100,
      position: 'absolute',
      top: 10,
      left: 10,
      visibility: 'visible'
    },
  },
  stackOpen: {
    width: 500,
    height: 100,
    position: 'absolute',
    top: 10,
    left: 10,

    // Media query: 500px
    "@media (max-width: 500px)": {
      maxWidth: 250,
      position: 'absolute',
      top: 30,
      left: 80,
      visibility: 'visible',
      display: 'inline-grid !important',
      marginTop: 20,
    },
  },
  stackClosed: {
    width: 500,
    height: 15,
    position: 'absolute',
    top: 10,
    left: 10,

    // Media query: 500px
    "@media (max-width: 500px)": {
      maxWidth: 200,
      position: 'absolute',
      top: 30,
      left: -10,
      visibility: 'hidden',
      display: 'inline-grid !important',
    },
  },
  item: {
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    height: 15,
    textDecoration: 'none',

    // Hover action
    "&:hover": {
      color: '#0c3e52',
    },

    // Media query: 500px
    "@media (max-width: 500px)": {
      width: '300px !important',
      maxWidth: '300px !important',
      marginTop: 0,
      marginLeft: 10,
      marginRight: 10,

    },
  },
  active: {
    color: '#0c3e52',
  },
  inactive: {
    color: 'white',
  },
});

const Menu = function() {
  const { height, width } = useScrollbarSize();
  console.log(width);
  const props = {
    scrollBarWidth: width
  };
  const classes = useStyles(props)();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(current => !current);
    console.log(location)
  };

  return (
    <Container className={`${classes.menu}`} maxWidth={false} disableGutters>
      <IconButton className={`${ isOpen ? classes.menuOpen : classes.menuClosed}`} size='large' onClick={toggle}>
        <MenuIcon className={`${classes.icon}`}/>
      </IconButton>
      <IconButton className={`${ isOpen ? classes.menuClosed : classes.menuOpen}`} size='large' onClick={toggle}>
        <CloseIcon className={`${classes.icon}`}/>
      </IconButton>
      <Stack className={`${ isOpen ? classes.stackOpen : classes.stackClosed}`} direction="row" justifyContent="space-around">
        <Link className={`${classes.item} ${location.pathname === '/' ? classes.active : classes.inactive}`} to="/">Home</Link>
        <Link className={`${classes.item} ${location.pathname === '/about' ? classes.active : classes.inactive}`} to="/about">About</Link>
        <Link className={`${classes.item} ${location.pathname === '/resume' ? classes.active : classes.inactive}`} to="/resume">Resume</Link>
        <Link className={`${classes.item} ${location.pathname === '/portfolio' ? classes.active : classes.inactive}`} to="/portfolio">Portfolio</Link>
      </Stack>
    </Container>
  );
}

export default Menu;
