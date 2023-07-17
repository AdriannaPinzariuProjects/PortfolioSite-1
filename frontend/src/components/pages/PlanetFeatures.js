import React from 'react';
import { Box, Stack, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedNumber from "animated-number-react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet2.jpg'; // new background image for the features page
import './PlanetInfo.css'

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
    const planet = planetDetails.find(p => p.name === 'Earth'); // Replace 'Earth' with the correct planet name
    const bgImage = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    };
    const gradientOverlay = {
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0,.9) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 90%)',
        height: '100vh',
        position: 'absolute',
        width: '100%',
        zIndex: 2
    };
    const contentStyle = {
        position: 'relative',
        zIndex: 3
    };

    return (
        <Box style={{position: 'relative'}}>
            <Box style={bgImage} className="zoom-out"></Box>
            <Box style={gradientOverlay}></Box>
            <Box style={contentStyle}>
                <Navbar />
                <Flex 
                    direction="column" 
                    position="relative"
                    left="5%" 
                    top="5%" 
                    alignItems="flex-start"
                >
                    <Flex direction="column">
                        <MotionBox
                            bg="white"
                            h="0.05rem"
                            w="5.6rem"
                            mb="1rem"
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
                                marginTop: '7.5%',
                                width: '100%',
                            }}
                            variants={animationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            FEATURES
                        </MotionText>
                        <Text 
                            style={{
                                fontSize: "12.5em",
                                fontWeight: 700,  
                                background: `url(${backgroundImage})`,
                                marginTop: '-30%',
                            }}
                        >
                            02
                        </Text>
                    </Flex>
                    <MotionText 
                        style={{
                            fontSize: ".05em",
                            fontWeight: 500,  
                            color: "white",
                            letterSpacing: ".1em",
                            marginTop: "1%",
                            width: '30%',
                        }}
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        This is a description of the planet's features. It provides some important information about the planet's features...
                    </MotionText>
                </Flex>
                <Box 
                    pos="relative"
                    bg="black" 
                    _after={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0,.9) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 90%)`,
                        zIndex: 1,
                    }}
                >
                    {/* ... similar code for the AnimatedNumber components as in PlanetInfo */}
                </Box> 
                <Footer /> 
            </Box>
        </Box>
    );
};

export default PlanetFeatures;
