import React from 'react';
import Container from '@mui/material/Container'
import { CircularProgressbar } from 'react-circular-progressbar'; 
import { makeStyles } from '@mui/styles';

import 'react-circular-progressbar/dist/styles.css'

const useStyles = makeStyles({
  speedometer: {
    maxWidth: 70,
    heigth: 70,
    float: 'left',
  },
  speedometerText: {
    maxWidth: 150,
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: 12,
    padding: '0px !important',
    display: 'inline-block',
    textAlign: 'center',
    color: '#fff'
  },
  firstRow: {
    marginLeft: '100px !important',
    marginRight: '15px !important',
    marginBottom: '20px !important',
    marginTop: '20px !important',

    "@media (max-width: 600px)": {
      marginLeft: '7.5vw !important',
      marginRight: '7.5vw !important',
    }
  },
  secondRow: {
    marginLeft: '190px !important',
    marginRight: '-70px !important',
    marginBottom: '20px !important',
    marginTop: '20px !important',

    "@media (max-width: 600px)": {
      marginLeft: '21vw !important',
      marginRight: '-5vw !important',
    }
  }
});

const SkillSpeedometer = function({ name, percentage, row }) {
  const classes = useStyles();
  const firstRow = (row < 1);

  return (
    <Container className={`${classes.speedometer} ${firstRow ? classes.firstRow : classes.secondRow}`} maxWidth={false} disableGutters>
      <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      circleRatio={0.7}
      styles={{
        trail: {
          strokeLineCap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
          strokeWidth: 0
        },
        path: {
          strokeLineCap: 'butt',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
          stroke: '#0c3e52',
          strokeWidth: 7
        },
        text: {
          fill: '#ddd'
        }
      }}

      />
      <Container className={`${classes.speedometerText}`}>{name}</Container>
  </Container>
  );
}

export default SkillSpeedometer;
