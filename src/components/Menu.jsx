import React, { useState } from "react";
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import useScrollbarSize from 'react-scrollbar-size';

const useStyles = (props) => makeStyles({
  menu: {
    position: 'absolute',
    maxWidth: `calc(100vw - ${props.scrollBarWidth}px) !important`,
    height: 40,
    backgroundColor: 'rgba(10, 10, 10, 0.2)',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  icon: {
    color: 'white'
  },
  stack: {
    maxWidth: 'inherit',
    position: 'absolute !important',
    top: 10,
    left: 10,

    // Media query: 500px
    "@media (max-width: 500px)": {
      position: 'absolute',
      top: 10,
      left: 10,
    },
  },
  item: {
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    height: 15,
    textDecoration: 'none',
    width: '100% !important',
    maxWidth: '100% !important',
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,

    // Hover action
    "&:hover": {
      color: '#0c3e52',
    },

    // Media query: 500px
    "@media (max-width: 600px)": {
      marginLeft: '5vw',
      marginRight: '5vw',
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
      <Stack className={`${classes.stack}`} direction="row" justifyContent="space-around">
        <Link className={`${classes.item} ${location.pathname === '/' ? classes.active : classes.inactive}`} to="/">Home</Link>
        <Link className={`${classes.item} ${location.pathname === '/about' ? classes.active : classes.inactive}`} to="/about">About</Link>
        <Link className={`${classes.item} ${location.pathname === '/resume' ? classes.active : classes.inactive}`} to="/resume">Resume</Link>
        <Link className={`${classes.item} ${location.pathname === '/portfolio' ? classes.active : classes.inactive}`} to="/portfolio">Portfolio</Link>
      </Stack>
    </Container>
  );
}

export default Menu;
