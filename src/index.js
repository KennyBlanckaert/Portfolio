import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import NextPageButton from './pages/NextPageButton';
import FullScreenButton from './pages/FullScreenButton';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">

    {/* Router */}
    <Router>

      {/* Menu */}
      <Menu />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>

      {/* Fullscreen button */}
      <FullScreenButton />

      {/* Next Page */}
      <NextPageButton />

    </Router>

  </div>
);
