import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  education: {
    maxWidth: 600,
    height: 40,
    marginTop: '-20px !important',
    marginBottom: '60px !important',
    marginLeft: '0px !important'
  },
  educationInformation: {
    maxWidth: 600,
    height: 60,
    float: 'left',
    marginLeft: '20px !important'
  },
  educationTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  educationSubtitle: {
    color: '#999',
    marginTop: '-12px !important',
    fontSize: 14
  },
  educationSubsubtitle: {
    color: '#777',
    marginTop: '-12px !important',
    fontSize: 13
  }
});

const Education = function({ title, subtitle, subsubtitle }) {
  const classes = useStyles();

  return (
    <Container className={`${classes.education}`} maxWidth={false} disableGutters>
      <Container className={`${classes.educationInformation}`} maxWidth={false} disableGutters>
        <p className={`${classes.educationTitle}`}>{title}</p>
        <p className={`${classes.educationSubtitle}`}>{subtitle}</p>
        <p className={`${classes.educationSubsubtitle}`}>{subsubtitle}</p>
      </Container>
    </Container>
  );
}

export default Education;
