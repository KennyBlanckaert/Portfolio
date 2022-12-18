import React from 'react';
import Container from '@mui/material/Container'
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { makeStyles } from '@mui/styles';

import Menu from './components/Menu';
import FullScreenButton from './components/FullScreenButton';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  fullscreenArea: {
    height: '100%',
    width: '100%',
  }
});

const App = function() {
  const classes = useStyles();
  const handle = useFullScreenHandle();

  return (
    <Container className={`${classes.wrapper}`} maxWidth={false} disableGutters>

      {/* Router */}
      <Router>

        {/* Fullscreen content */}
        <FullScreen className={`${classes.fullscreenArea}`} handle={handle}>

          {/* Menu */}
          <Menu />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Portfolio/>} />
          </Routes>

          {/* Fullscreen button */}
          <FullScreenButton handle={handle}/>

        </FullScreen>

      </Router>

    </Container>
  );
};

export default App;
