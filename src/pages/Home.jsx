import React from 'react';
import Container from '@mui/material/Container'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

import BannerImage from '../images/cropped-banner.png';
import MobileImage from '../images/mobile-banner.png';

import NextPageButton from '../components/NextPageButton';
import SocialMediaBar from '../components/SocialMediaBar';

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',

    "@media (orientation: portrait)": {
      backgroundImage: `url(${MobileImage})`,
      backgroundSize: 'cover',
    }
  },
  firstname: {
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: '3.13vw',
    color: '#ffffff',
    margin: 0,
    paddingTop: '30vh',
    paddingLeft: 'calc(13% - 2px)',

    "@media (max-width: 900px)": {
      fontSize: 30,
      // paddingTop: 190,
    }
  },
  lastname: {
    fontFamily: 'Motor Oil 1937 M54',
    fontWeight: 'bold',
    fontSize: '4.17vw',
    color: '#ffffff',
    marginLeft: 0,
    marginTop: -15,
    paddingTop: 0,
    paddingLeft: 'calc(13% - 3px)',

    "@media (max-width: 1000px)": {
      marginTop: -10,
    },
    "@media (max-width: 900px)": {
      fontSize: 40,
      marginTop: -5,
    }
  },
  function: {
    fontFamily: 'Athiti',
    fontSize: '2.09vw',
    letterSpacing: 'calc(0.9vh)',
    color: '#ffffff',
    marginLeft: 0,
    marginTop: -15,
    paddingTop: 0,
    paddingLeft: 'calc(13%)',

    "@media (max-width: 1000px)": {
      marginTop: -10,
    },
    "@media (max-width: 900px)": {
      fontSize: 20,
      letterSpacing: 4,
      marginTop: -5,
    }
  },
  buttonGroup: {
    maxWidth: 1000,
    height: 50,
    marginTop: 'calc(10px + 5vh) !important',
    paddingTop: 0,
    paddingLeft: 'calc(13%)',
    margin: '0px !important',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    maxWidth: '11.5vw !important',
    height: 'calc(30px + 2.5vh) !important',
    border: '2px solid',
    borderRadius: 22,
    color: '#ffffff',
    fontFamily: 'Motor Oil 1937 M54',
    fontSize: '1.3vw',
    textAlign: 'center',
    lineHeight: '45px',
    marginLeft: '1vw !important',
    marginRight: '1vw !important',
    display: 'inline-block !important',
    letterSpacing: 3,

    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
      color: 'rgba(0, 0, 0, 1) !important',
      border: 'none'
    },
    "@media (max-width: 900px)": {
      maxWidth: '120px !important',
      fontSize: 12,
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
        <Link className={`${classes.link}`} to="/projects">
          <Container className={`${classes.button}`} maxWidth={false} disableGutters>
            Projects
          </Container>
        </Link>
      </Container>
      

      {/* Social media and Contacts icons */}
      <SocialMediaBar />

      {/* Next Page */}
      <NextPageButton />

    </Container>
  );
};

export default Home;
