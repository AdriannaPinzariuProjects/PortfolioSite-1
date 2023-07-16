import React from 'react';
import { useParams } from 'react-router-dom'; 
import { Box, Stack, useColorModeValue, Flex, Text } from '@chakra-ui/react';
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
            <Flex justifyContent="space-around" alignItems="center" w="100%" color="white" h="100%">
                <Stack spacing={1}>
                <Text className="opensans-extralight" fontSize="1vw" textTransform="uppercase"> ONE WAY LIGHT TIME TO SUN MINS</Text>
<Text className="opensans-light">44.909316</Text>

                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize="1vw" textTransform="uppercase">DISTANCE TO SUN MILES</Text>
                  <Text className="opensans-light" >502,314,9307</Text>
                </Stack>
                <Stack spacing={1}>
                  <Text className="opensans-extralight" fontSize="1vw" textTransform="uppercase">LENGTH OF YEAR</Text>
                  <Text className="opensans-light" >4,333 Earth days</Text>
                </Stack>
            </Flex>
          </Box> 
          <Footer flex="0.1"/>
        </Flex>
      </Box>

    );
};

export default PlanetInfo;
