import React from 'react';
import { useParams } from 'react-router-dom'; 
import { Box, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import planetDetails from './PlanetDetails';
import backgroundImage from '../../Assets/testPlanet1.jpg';

const PlanetInfo = () => {
    const { planetName } = useParams(); 
    const planet = planetDetails.find(p => p.name === planetName);

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
            <Flex justifyContent="space-around" w="100%" color="white">
                <Text className="opensans-light">1</Text>
                <Text className="opensans-light">2</Text>
                <Text className="opensans-light">3</Text>
            </Flex>
          </Box> 
          <Footer flex="0.1"/>
        </Flex>
      </Box>
    );
};

export default PlanetInfo;
