import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Global, css } from "@emotion/react";
import 'odometer/themes/odometer-theme-default.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomePage from './components/pages/Home.jsx';
import AboutMe from './components/pages/About.jsx';
import Experience from './components/pages/Experience.jsx';
import Hobby from './components/pages/Hobby.jsx';
import Location from './components/pages/Loaction.jsx';
import PlanetInfo from './components/pages/PlanetInfo';
//import './App.css';
import './Fonts.css';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              overflow-x: hidden;
            }
            .fade-enter {
              opacity: 0;
            }
            .fade-enter-active {
              opacity: 1;
              transition: opacity 1000ms;
            }
            .fade-exit {
              opacity: 1;
            }
            .fade-exit-active {
              opacity: 0;
              transition: opacity 1000ms;
            }
          `}
        />
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={1000} // Transition time in ms
              classNames="fade"
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMe />} /> 
                <Route path="/experience" element={<Experience />} />
                <Route path="/hobby" element={<Hobby />} />
                <Route path="/location" element={<Location />} />
                <Route path="/:planetName/info" element={<PlanetInfo />} /> 
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    </ChakraProvider>
  );
}

export default App;