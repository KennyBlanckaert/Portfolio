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
  experienceTimeline: {
    maxWidth: 70,
    height: 70,
    backgroundColor: '#0c3e52',
    marginLeft: '20px !important',
    borderRadius: 50,
    float: 'left',
    textAlign: 'center',
  },
  experienceTimelineText: {
    height: 40,
    marginTop: '15px !important',
    fontSize: 12,
    color: '#ddd'
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
  line: {
    position: 'relative',
    top: 78,
    left: -145,
    maxWidth: '1px !important',
    height: 20,
    backgroundColor: '#fff'
  }
});

const Experience = function({ timelineStart, timelineEnd, title, subtitle, last }) {
  const classes = useStyles();

  return (
    <Container className={`${classes.experience}`} maxWidth={false} disableGutters>
      <Container className={`${classes.experienceTimeline}`} maxWidth={false} disableGutters>
        <p className={`${classes.experienceTimelineText}`}> 
          {timelineEnd} <br/>
          - <br/>
          {timelineStart} <br/>
        </p> 
      </Container>
      <Container className={`${classes.experienceInformation}`} maxWidth={false} disableGutters>
        <p className={`${classes.experienceTitle}`}>{title}</p>
        <p className={`${classes.experienceSubtitle}`}>{subtitle}</p>
      </Container>
      { 
        last ? <Container className={`${classes.line}`} maxWidth={false} disableGutters/> : ''
      }
    </Container>
  );
}

export default Experience;
