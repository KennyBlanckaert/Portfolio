import React from "react";
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { makeStyles } from '@mui/styles';

import { ReactComponent as MailIcon } from '../images/svg/mail.svg';
import { ReactComponent as GithubIcon } from '../images/svg/github.svg';
import { ReactComponent as LinkedInIcon } from '../images/svg/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../images/svg/facebook.svg';
import { ReactComponent as WhatsappIcon } from '../images/svg/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../images/svg/instagram.svg';

const useStyles = makeStyles({
  iconBar: {
    position: 'absolute',
    bottom: 40,
    left: 150,
    maxWidth: '400px !important'
  },
  iconButton: {

  },
  muiIcon: {
    color: 'white',
    transform: 'scale(1.2)',
  },
  svgIcon: {
    color: 'white',
    
  },
  facebook: {
    transform: 'scale(0.8)',
  },
  linkedin: {
    transform: 'scale(0.8)',
  },
  github: {
    transform: 'scale(0.8)',
    marginLeft: '-3px !important'
  },
  mail: {
    transform: 'scale(0.9)',
    marginLeft: '-3px !important'
  },
  instagram: {
    transform: 'scale(0.9)',
  },
  whatsapp: {
    transform: 'scale(1)',
    marginLeft: '-3px !important'
  }
});

function facebook() {
  console.log("Facebook!");
}

function linkedin() {
  console.log("LinkedIn!");
}

function github() {
  console.log("Github!");
}

function mail() {
  console.log("Mail!");
}

function instagram() {
  console.log("Instagram!");
}

function whatsapp() {
  console.log("Whatsapp!");
}

const SocialMediaBar = function() {
  const classes = useStyles();

  return (
    <Container className={`${classes.iconBar}`}>
      <IconButton className={`${classes.iconButton} ${classes.facebook}`} size='medium' onClick={facebook}>
        <SvgIcon className={`${classes.svgIcon}`} component={FacebookIcon} viewBox="0 0 300 500" />  
      </IconButton>
      <IconButton className={`${classes.iconButton} ${classes.linkedin}`} size='medium' onClick={linkedin}>
        <SvgIcon className={`${classes.svgIcon}`} component={LinkedInIcon} viewBox="0 0 500 500"/>
      </IconButton>
      <IconButton className={`${classes.iconButton} ${classes.github}`} size='medium' onClick={github}>
        <SvgIcon className={`${classes.svgIcon}`} component={GithubIcon} viewBox="0 0 500 500" />
      </IconButton>
      <IconButton className={`${classes.iconButton} ${classes.mail}`} size='medium' onClick={mail}>
        <SvgIcon className={`${classes.svgIcon}`} component={MailIcon} viewBox="0 0 500 500" />
      </IconButton>
      <IconButton className={`${classes.iconButton} ${classes.instagram}`} size='medium' onClick={instagram}>
        <SvgIcon className={`${classes.svgIcon}`} component={InstagramIcon} viewBox="0 0 500 500" />
      </IconButton>
      <IconButton className={`${classes.iconButton} ${classes.whatsapp}`} size='medium' onClick={whatsapp}>
        <SvgIcon className={`${classes.svgIcon}`} component={WhatsappIcon} viewBox="0 0 500 500" />
      </IconButton>
    </Container>

  );
}

export default SocialMediaBar;