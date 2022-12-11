import React from "react";
import Container from '@mui/material/Container'
import Stack from '@mui/material//Stack';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  menu: {
    position: 'absolute',
    height: 40,
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    top: 0,
    left: 0,
  },
  stack: {
    width: 500,
    height: 15,
    margin: 10,
  },
  item: {
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    height: 15,
    textDecoration: 'none',

    "&:hover": {
      color: '#0c3e52',
    }
  },
  active: {
    color: '#0c3e52',
  },
});

const Menu = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.menu}`} maxWidth={false} disableGutters>
      <Stack className={`${classes.stack}`} direction="row" justifyContent="space-around">
        <Link className={`${classes.item} ${classes.active}`} to="/">Home</Link>
        <Link className={`${classes.item}`} to="/about">About</Link>
        <Link className={`${classes.item}`} to="/resume">Resume</Link>
        <Link className={`${classes.item}`} to="/portfolio">Portfolio</Link>
      </Stack>
    </Container>
  );
}

export default Menu;
