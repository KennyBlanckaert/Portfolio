import React from "react";
import IconButton from '@mui/material/IconButton';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
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

const FullScreenIcon = function({ handle }) {
  const classes = useStyles();

  return (
    <IconButton className={`${classes.button}`} size='large' onClick={handle.enter}>
      <FullscreenRoundedIcon className={`${classes.icon}`}/>
    </IconButton>
  );
}

export default FullScreenIcon;
