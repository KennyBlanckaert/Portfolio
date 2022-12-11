import React from 'react';
import Container from '@mui/material/Container'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

import BannerImage from '../images/cropped-banner.png';

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  },
  firstname: {
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: 70,
    color: '#ffffff',
    margin: 0,
    paddingTop: 425,
    paddingLeft: 250,
  },
  lastname: {
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: 90,
    color: '#ffffff',
    marginLeft: 0,
    marginTop: -20,
    paddingTop: 0,
    paddingLeft: 250,
  },
  function: {
    fontFamily: 'Athiti',
    fontSize: 50,
    letterSpacing: 8.5,
    color: '#ffffff',
    marginLeft: 0,
    marginTop: -20,
    paddingTop: 0,
    paddingLeft: 250,
  },
  buttonGroup: {
    width: 1500,
    maxWidth: 1500,
    height: 50,
    marginTop: '50px !important',
    paddingTop: 0,
    paddingLeft: 250,
    margin: '0px !important',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    width: 250,
    maxWidth: 250,
    height: 50,
    border: '2px solid',
    borderRadius: 22,
    color: '#ffffff',
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: 25,
    textAlign: 'center',
    marginLeft: '20px !important',
    marginRight: '20px !important',
    paddingTop: 8,
    display: 'inline-block !important',
    letterSpacing: 3,

    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
      color: 'rgba(0, 0, 0, 1) !important',
      border: 'none'
    }
  },
});

const Home = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.banner}`} maxWidth={false} disableGutters>

      {/* Firstname */}
      <Container className={`${classes.firstname}`} maxWidth={false} disableGutters>
        KENNY
      </Container>
      {/* Lastname */}
      <Container className={`${classes.lastname}`} maxWidth={false} disableGutters>
        BLANCKAERT
      </Container>
      {/* Function */}
      <Container className={`${classes.function}`} maxWidth={false} disableGutters>
        Full Stack Developer
      </Container>

      {/* Resume and Projects buttons */}
      <Container className={`${classes.buttonGroup}`} maxWidth={false} disableGutters>
        <Link className={`${classes.link}`} to="/resume">
          <Container className={`${classes.button}`} maxWidth={false} disableGutters>
            Resume
          </Container>
        </Link>
        <Link className={`${classes.link}`} to="/portfolio">
          <Container className={`${classes.button}`} maxWidth={false} disableGutters>
            Portfolio
          </Container>
        </Link>
      </Container>
      

      {/* Social media and Contacts icons */}

    </Container>
  );
};

export default Home;
