import React from "react";
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
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
    left: 100,
    maxWidth: '300px !important',

    // Media query: 1000px
    "@media (max-width: 1000px)": {
      position: 'absolute',
      bottom: 30,
      left: 20,
    }
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

const SocialMediaBar = function() {
  const classes = useStyles();

  const facebook = () => window.open("https://m.me/kenny.blanckaert", "_blank");
  const linkedin = () => window.open("https://www.linkedin.com/in/kenny-blanckaert-a82975131", "_blank");
  const github = () => window.open("https://github.com/KennyBlanckaert", "_blank");
  const mail = () => window.open("mailto:kennyblanckaert@hotmail.com", "_blank");
  const instagram = () => window.open("https://www.instagram.com/kennyblanckaert", "_blank");
  const whatsapp = () => window.open("https://wa.me/032497067156", "_blank");

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
