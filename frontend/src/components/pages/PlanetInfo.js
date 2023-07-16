import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Box, Stack, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import AnimatedNumber from "animated-number-react";


import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet1.jpg';

const PlanetInfo = () => {
    const { planetName } = useParams(); 
    const planet = planetDetails.find(p => p.name === planetName);

    const [distanceToSun, setDistanceToSun] = useState(5023149120);
    const [lightTimeToSun, setLightTimeToSun] = useState(43.810231);
    const [lengthOfYear, setLengthOfYear] = useState(4301);

    useEffect(() => {
        const timer1 = setTimeout(() => setLightTimeToSun(44.909316), 1000);
        const timer2 = setTimeout(() => setDistanceToSun(5023149307), 1000);
        const timer3 = setTimeout(() => setLengthOfYear(4333), 1000);

        // cleanup function
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);


    const bgImage = {
        backgroundImage: `url(${backgroundImage})`,
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
        <Flex direction="column" h="100vh">
        <Navbar />
          <Flex direction="column" flex="1">
            <Box style={fadeImageStyle}>
            </Box>
          </Flex>
          <Box bg="black" flex="0.4">
            <Flex justifyContent="space-around" alignItems="center" w="100%" color="white" h="100%">
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">ONE WAY LIGHT TIME TO SUN MINS</Text>
                  <Text className="opensans-light" >
                    <AnimatedNumber value={lightTimeToSun} duration={3000} formatValue={n => n.toFixed(6)} />
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">DISTANCE TO SUN MILES</Text>
                  <Text className="opensans-light">
                    <AnimatedNumber value={distanceToSun} duration={3000} formatValue={n => Math.floor(n).toLocaleString()} />
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize=".85vw" textTransform="uppercase">LENGTH OF YEAR</Text>
                  <Flex alignItems="center">
                  <Text className="opensans-light"  >
                    <AnimatedNumber value={lengthOfYear} duration={3000} formatValue={n => Math.floor(n).toLocaleString()} />
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
}

export default PlanetInfo;
