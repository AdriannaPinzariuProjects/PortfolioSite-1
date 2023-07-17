import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Box, Stack, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import AnimatedNumber from "animated-number-react";
import { motion, AnimatePresence } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';
import { zoomInAndOut } from './Animations';
import PlanetFeatures from './PlanetFeatures';
import './PlanetInfo.css'



import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet1.jpg';
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

const PlanetInfo = () => {

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
      }, 1.25);
  
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

    // Navigation to the Next Page via Enter Keypress
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyPress = (event) => {
          // Change 'Enter' to whatever key you want to listen for
          if (event.key === 'Enter') {
            navigate('/features'); // add the path to your PlanetFeatures page
          }
        };
    

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    if (navigateToPlanetFeatures) {
        return <PlanetFeatures />;
    }

   

    if (!planet) {
      return <div>Planet not found.</div>;
    }

  return (
    <Box style={{position: 'relative'}}>
           <Box style={bgImage} className="zoom-out"></Box>
            <Box style={gradientOverlay}></Box>
            <Box style={contentStyle}>
     <Overlay opacity={opacity} />
      <Flex direction="column" h="100vh" position="relative">
      <Navbar />
        <Flex 
  direction="column" 
  position="absolute"
  left="5%" 
  top="10%" 
  alignItems="flex-start" // Align items to the left
>
  <Flex direction="column">
  <AnimatePresence>
  <MotionBox
  bg="white"
  h="0.05rem"
  w="5.6rem"
  mb="1rem"
  position="absolute"
  left="0" 
  marginLeft= "21.5%"
  top= '31.5%'
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
/>
<MotionText  
  style={{
    fontSize: "5em",
    fontWeight: 700,  
    color: "white",
    letterSpacing: ".175em",
    marginLeft: "21.5%",
    marginTop: '7.5%',
    width: '100%',
  }}
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  OVERVIEW
</MotionText>
    
    <MotionText 
  style={{
    fontSize: ".05em",
    fontWeight: 500,  
    color: "white",
    letterSpacing: ".1em",
    marginLeft: "21.5%",
    marginTop: ".5%",
    width: '30%',
  }}
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
      This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet.This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. This is a description of the planet.
      </MotionText>

      <MotionText 
  style={{
    fontSize: ".05em",
    fontWeight: 500,  
    color: "white",
    letterSpacing: ".1em",
    marginLeft: "21.5%",
    marginTop: "1%",
    width: '30%',
  }}
  variants={animationVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
      This is a description of the planet. It provides some important information about the planet. This is a description of the planet. It provides some important information about the planet. 
      </MotionText>
      </AnimatePresence>
  </Flex>
  <Text 
    style={{
      fontSize: "12.5em",
      fontWeight: 700,  
      background: `url(${backgroundImage})`,
      marginTop: '-30%', // Adjust this value to make sure the '01' is in the correct place
      
    }}
  >
    01
  </Text>
</Flex>

    
            <Flex direction="column" flex="1">
              
            </Flex>
            <Box 
              pos="relative"
              bg="black" 
              flex="0.4"
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0,.9) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 90%)`,
                maskImage: `url(${numberMask})`,
                maskSize: 'cover',
                maskPosition: 'center',
                zIndex: 1,
              }}
            >
              <Flex justifyContent="space-around" alignItems="center" w="100%" color="white" h="100%" pos="relative" zIndex={2}>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">ONE WAY LIGHT TIME TO SUN MINS</Text>
                  <Text className="opensans-light" >
                    <AnimatedNumber start={43.810231} value={44.909316} duration={3000} formatValue={n => n.toFixed(6)} />
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">DISTANCE TO SUN MILES</Text>
                  <Text className="opensans-light">
                    <AnimatedNumber start={5023149120} value={5023149307} duration={3000} formatValue={n => Math.floor(n).toLocaleString()} />
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">LENGTH OF YEAR</Text>
                  <Flex alignItems="center">
                    <Text className="opensans-light">
                      <AnimatedNumber start={4301} value={4333} duration={3000} formatValue={n => Math.floor(n).toLocaleString()} />
                      {" Earth days"}
                    </Text>
                  </Flex>
                </Stack>
              </Flex>
            </Box> 
            <Footer flex="0.1"/> 
          </Flex>
          </Box>
        </Box>
      );
    };
    
    export default PlanetInfo;