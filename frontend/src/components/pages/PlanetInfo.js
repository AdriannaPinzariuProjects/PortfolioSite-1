import React from 'react';
import { useParams } from 'react-router-dom'; 
import { Box, Stack, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import AnimatedNumber from "animated-number-react";
import './PlanetInfo.css'

import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet1.jpg';
import numberMask from '../../Assets/01.svg';


const PlanetInfo = () => {
    const { planetName } = useParams(); 
    const planet = planetDetails.find(p => p.name === planetName);

    
    const bgImage = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0,.9) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 90%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 1s ease-in-out',
        height: '100vh', 
    };

    const fadeImageStyle = useColorModeValue(
        {
            animation: 'fadein 6s',
            keyframes: {
                from: { opacity: 0, transform: 'scale(1.2)' },
                to: { opacity: 1, transform: 'scale(1)' }
            }
        },
        {
            animation: 'fadein 6s',
            keyframes: {
                from: { opacity: 0, transform: 'scale(1.2)' },
                to: { opacity: 1, transform: 'scale(1)' }
            }
        }
    );

    if (!planet) {
      return <div>Planet not found.</div>;
    }

  return (
    <Box style={bgImage}>
      <Flex direction="column" h="100vh" position="relative">
        <Navbar />
        <Flex 
          direction="column" 
          position="absolute"
          left="5%" 
          top="5%" 
          alignItems="flex-start" // Align items to the left
        >
          <Box
            bg="white"
            h="0.05rem"
            w="5.6rem"
            mb="1rem"
            position="absolute" // Make the line positioned absolutely
             // Adjust the top and left positions to place the line over the text
            left="0" 
            marginLeft= "65%"
            top= '40%'
          />
          <Text 
            style={{
              fontSize: "4em",
              fontWeight: 700,  
              color: "white",
              letterSpacing: ".175em",
              marginLeft: "64%",
              marginTop: '39%',
            }}
          >
         OVERVIEW
          </Text>
          <Text 
            style={{
              fontSize: "12.5em",
              fontWeight: 700,  
              background: `url(${backgroundImage})`,
              marginTop: "-50%", // Move the '01' to the left of the text
            }}
          >
            01
          </Text>
        </Flex>
          
    
            <Flex direction="column" flex="1">
              <Box style={fadeImageStyle} />
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
      );
    };
    
    export default PlanetInfo;