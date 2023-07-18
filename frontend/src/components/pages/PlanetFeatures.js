import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Box, Stack, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import AnimatedNumber from "animated-number-react";
import { motion, AnimatePresence } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';
import { zoomInAndOut } from './Animations';
import './PlanetInfo.css'



import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet2.jpg';
import numberMask from '../../Assets/01.svg';
import Overlay from './Overlay';
import withFadeIn from './FadeIn';


const MotionText = motion(Text);
const MotionBox = motion(Box);

const animationVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: .25 },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 1 },
    },
};

const PlanetFeatures = () => {

    const { planetName } = useParams(); 
    const planet = planetDetails.find(p => p.name === planetName);
    const [navigateToPlanetFeatures, setNavigateToPlanetFeatures] = useState(false);
    const [flip, set] = useState(false);
    const props = useSpring({
        to: { transform: 'scale(1)' },
        from: { transform: 'scale(3)' },
        reset: true,
        reverse: flip,
        delay: 200,
        config: { tension: 2 },
        onRest: () => set(!flip),
    });
    

    // Overlay Fading In Transition 
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
      const fadeEffect = setInterval(() => {
        if (opacity > 0) {
          setOpacity(prevOpacity => prevOpacity - 0.08);
        }
      }, 2);
  
      return () => clearInterval(fadeEffect);
    }, [opacity]);
  
    
    const bgImage = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
      };
      
    // Gradient Overlay
    const gradientOverlay = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0,.9) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 90%)',
        height: '100vh',
        position: 'absolute',
        width: '100%',
        zIndex: 2
    };

    // Content
    const contentStyle = {
        position: 'relative',
        zIndex: 3
    }

    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Enter') {
            setTimeout(() => {
              navigate(`/home`);
            }, 1000);  // timeout to match exit transition duration
          }
        };
      
        window.addEventListener('keydown', handleKeyPress);
      
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
   

    if (!planet) {
      return <div>Planet not found.</div>;
    }

    return (
        <Box style={{position: 'relative'}}>
          <Box
        style={{
          position: 'absolute',
          height: '110%', 
          width: '160%', 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translate(-5%, -5%)', 
          top: '10%',
          left: '-30%',
          zIndex: 1,
        }}
        className="zoom-out"
      ></Box>
          {/*<Box style={gradientOverlay}></Box>*/}
          <Box style={contentStyle}>
            <Overlay opacity={opacity} />
            <Flex direction="column" h="100vh" position="relative">
              <Navbar />
              <Text 
                style={{
                  fontSize: "10em",
                  fontWeight: 700,  
                  position: 'absolute',
                  top: '4.5%',
                  right: "10.5%",
                  zIndex: 2,
                  color: '#0246e3',
                }}
              >
                02
              </Text>
              <Box 
                pos="absolute"
                bg="black" 
                w="100%"
                h="16.75rem"
                top="0%"  
              />
              <Flex direction="column">
                <AnimatePresence>
                

  <MotionBox
  bg="white"
  h="0.05rem"
  w="5.65rem"
  mb="1rem"
  position="absolute"
  left="0" 
  marginLeft= "65.61%"
  top= '10.5%'
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
/>
<MotionText textAlign="right"
  style={{
    fontSize: "4.5em",
    fontWeight: 700,  
    color: "white",
    letterSpacing: ".175em",
    marginLeft: "-27%",
    marginTop: '.5%',
    width: '100%',
    zIndex: "1",
  }}
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  FEATURES
</MotionText>
    
    <MotionText textAlign="right"
  style={{
    fontSize: ".05em",
    fontWeight: 500,  
    color: "white",
    letterSpacing: ".1em",
    marginLeft: "44.5%",
    marginTop: "-.25%",
    width: '27.5%',
    lineHeight: "1.5",
    zIndex: "1",
  }}
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
      This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet.
      </MotionText>
      </AnimatePresence>
  </Flex>



    
            <Flex flex="1">
            </Flex>
            <Box 
                pos="absolute"
                bg="black" 
                w="100%"
                h="6rem"
                bottom="0%" 
              />
       
            <Footer flex="0.1"/> 
          </Flex>
          </Box>
        </Box>
      );
    };
    
    export default PlanetFeatures;