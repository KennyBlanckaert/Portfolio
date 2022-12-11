import React from "react";
import IconButton from '@mui/material/IconButton';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  fullscreen: {
    position: 'absolute !important',
    bottom: 25,
    right: 25,
    color: '#ffffff',
  },
  icon: {
    color: 'white',
    transform: 'scale(1.8)',
  }
});

function fullscreen() {
  console.log("Fullscreen!");
}

const FullScreenIcon = function() {
  const classes = useStyles();

  return (
    <IconButton className={`${classes.fullscreen}`} size='large' onClick={fullscreen}>
      <FullscreenRoundedIcon className={`${classes.icon}`}/>
    </IconButton>
  );
}

export default FullScreenIcon;
