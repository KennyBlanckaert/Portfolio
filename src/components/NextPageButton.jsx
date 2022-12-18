import React from "react";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  fullscreen: {
    position: 'absolute !important',
    bottom: 25,
    left: '50%',
    color: '#ffffff',

    "@media (max-width: 900px)": {
      visibility: 'hidden',
    }
  },
  icon: {
    color: 'white',
    transform: 'scale(2)',
  }
});

function scroll() {
  console.log("Scroll!");
}

const NextPageButton = function() {
  const classes = useStyles();

  return (
    <IconButton className={`${classes.fullscreen}`} size='large' onClick={scroll}>
      <KeyboardArrowDownRoundedIcon className={`${classes.icon}`}/>
    </IconButton>
  );
}

export default NextPageButton;
