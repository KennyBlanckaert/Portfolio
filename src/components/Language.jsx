import React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';

const useStyles = (props) => makeStyles({
  language: {
    color: 'white',
    margin: '0px !important',
    maxWidth: '100%',
    height: 50,
    marginBottom: '-5px !important',
  },
  languageName: {
    width: '125px !important',
    height: '40px !important',
    margin: '0px !important',
    float: 'left',
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
  },
  languageSlider: {
    color: 'white',
    maxWidth: 300,
    height: 20,
    marginTop: 20,
    marginLeft: '0px !important',
    borderTop: '1.5px solid white',
    float: 'left',

    "@media (max-width: 600px)": {
      maxWidth: '50vw !important',
    }
  },
  languageSliderMarker: {
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
  languageSliderMarkerDot: {
    maxWidth: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 20,
  }
});

const Language = function({ name, percentage }) {
  const props = {
    percentage: percentage
  }
  const classes = useStyles(props)();

  return (
    <Container className={`${classes.language}`} maxWidth={false} disableGutters>
      <Container className={`${classes.languageName}`} maxWidth={false} disableGutters>{name}</Container>
      <Container className={`${classes.languageSlider}`} maxWidth={false} disableGutters>
        <Container className={`${classes.languageSliderMarker}`} maxWidth={false} disableGutters>
          <Container className={`${classes.languageSliderMarkerDot}`} maxWidth={false} disableGutters></Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Language;
