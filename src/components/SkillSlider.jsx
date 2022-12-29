import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

const useStyles = (props) => makeStyles({
  skill: {
    color: 'white',
    margin: '0px !important',
    maxWidth: '100%',
    height: 50,
    marginBottom: '3px !important',
  },
  skillIcon: {
    maxWidth: '40px !important',
    height: '40px !important',
    marginTop: '0px !important',
    marginLeft: '20px !important',
    marginRight: '0px !important',
    paddingTop: '10px !important',
    textAlign: 'center',
    border: '2px solid white',
    borderRadius: 6,
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: 12,
    fontWeight: 'bold',
    float: 'left',
  },
  skillName: {
    width: '125px !important',
    height: '40px !important',
    margin: '0px !important',
    float: 'left',
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
  },
  skillSlider: {
    color: 'white',
    maxWidth: 300,
    height: 20,
    marginTop: 20,
    marginLeft: '60px !important',
    borderTop: '1.5px solid white',
    float: 'left',

    "@media (max-width: 600px)": {
      maxWidth: '40vw !important',
      marginLeft: '10px !important',
    }
  },
  skillSliderMarker: {
    maxWidth: 18,
    height: 18,
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
    marginRight: '0px !important',
    marginLeft: `calc(${props.percentage}% - 8px) !important`,
    marginTop: -11,
    border: '1px solid white',
    borderRadius: 10
  },
  skillSliderMarkerDot: {
    maxWidth: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 20,
  }
});

const SkillSlider = function({ name, abbreviation, percentage }) {
  const props = {
    percentage: percentage
  }
  const classes = useStyles(props)();

  return (
    <Container className={`${classes.skill}`} maxWidth={false} disableGutters>
      <Container className={`${classes.skillIcon}`} maxWidth={false} disableGutters>{abbreviation}</Container>
      <Container className={`${classes.skillName}`} maxWidth={false} disableGutters>{name}</Container>
      <Container className={`${classes.skillSlider}`} maxWidth={false} disableGutters>
        <Container className={`${classes.skillSliderMarker}`} maxWidth={false} disableGutters>
          <Container className={`${classes.skillSliderMarkerDot}`} maxWidth={false} disableGutters></Container>
        </Container>
      </Container>
    </Container>
  );
}

export default SkillSlider;
