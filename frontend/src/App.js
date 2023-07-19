import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { Global, css } from "@emotion/react";
import { AnimatePresence } from 'framer-motion';
import 'odometer/themes/odometer-theme-default.css';

import HomePage from './components/pages/Home.jsx';
import AboutMe from './components/pages/About.jsx';
import Experience from './components/pages/Experience.jsx';
import Hobby from './components/pages/Hobby.jsx';
import Location from './components/pages/Loaction.jsx';
import PlanetInfo from './components/pages/PlanetInfo';
import PlanetFeatures from './components/pages/PlanetFeatures';
import HomeZoom from './/components/pages/HomeZoom'
import Game from './/components/pages/Game'
import './Fonts.css';
import './App.css'; 

function RouteTransition() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/homeish" element={<HomePage />} />
        <Route path="/home" element={<HomeZoom />} />
        <Route path="/about" element={<AboutMe />} /> 
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/location" element={<Location />} />
        <Route path="/:planetName/info" element={<PlanetInfo />} /> 
        <Route path="/:planetName/features" element={<PlanetFeatures />}  />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <RouteTransition />
      </Router>
    </ChakraProvider>
  );
}

export default App;
