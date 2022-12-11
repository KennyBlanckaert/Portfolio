import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    page: {
      width: '100%',
      height: '100%',
    }
});

const Portfolio = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.page}`} maxWidth={false} disableGutters>

    </Container>
  );
};

export default Portfolio;