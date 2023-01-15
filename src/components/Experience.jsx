import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  experience: {
    maxWidth: 400,
    height: 80,
    marginBottom: '25px !important',
    marginLeft: '0px !important'
  },
  companyLogoContainer: {
    maxWidth: 58,
    height: 58,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: '10px !important',
    marginLeft: '20px !important',
    borderRadius: 50,
    float: 'left',
    textAlign: 'center',
  },
  companyLogo: {
    maxWidth: 60,
    height: 60,
    marginTop: -1,
    marginLeft: -1
  },
  line: {
    position: 'relative',
    top: 78,
    left: -150,
    maxWidth: '1px !important',
    height: 25,
    backgroundColor: '#fff'
  },
  experienceInformation: {
    maxWidth: 250,
    height: 80,
    float: 'left',
    marginLeft: '20px !important'
  },
  experienceTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  experienceSubtitle: {
    color: '#999',
    marginTop: '-12px !important',
    fontSize: 14
  },
  experienceTimeline: {
    color: '#777',
    marginTop: '-12px !important',
    fontSize: 13
  }
});

const Experience = function({ image, timeline, title, subtitle, last }) {
  const classes = useStyles();

  return (
    <Container className={`${classes.experience}`} maxWidth={false} disableGutters>
      <Container className={`${classes.companyLogoContainer}`} maxWidth={false} disableGutters>
        <img className={`${classes.companyLogo}`} src={image}/>
      </Container>
      <Container className={`${classes.experienceInformation}`} maxWidth={false} disableGutters>
        <p className={`${classes.experienceTitle}`}>{title}</p>
        <p className={`${classes.experienceSubtitle}`}>{subtitle}</p>
        <p className={`${classes.experienceTimeline}`}>{timeline}</p>
      </Container>
      { 
        last ? <Container className={`${classes.line}`} maxWidth={false} disableGutters/> : ''
      }
    </Container>
  );
}

export default Experience;
