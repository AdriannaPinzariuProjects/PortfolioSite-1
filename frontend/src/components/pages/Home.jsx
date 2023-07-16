import React from 'react';
import { Flex, Box, AspectRatio, VStack, Text } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Planet({ size, isSun = false, planetInfo }) {
  const borderSize = isSun ? '.25px' : '.25px';

  return (
    <VStack spacing="1em" align="center">
      {!isSun && <Text color="white">{planetInfo.au}</Text>}
      <Box position="relative" w={`${size}%`} h="auto">
        <AspectRatio ratio={1}>
          <Box borderRadius="50%" border={`${borderSize} solid white`} position="absolute" left={isSun ? '50%' : '0'} right="0" top="0" bottom="0"/>
        </AspectRatio>
      </Box>
      {!isSun && 
        <>
          <Text color="white">{planetInfo.name}</Text>
          <Text color="white">{planetInfo.moons} Moons</Text>
        </>
      }
    </VStack>
  );
}

function Home() {
    // Planet details
    const planetDetails = [
      {name: 'Pluto', au: '39.5 AU', moons: 5},
      {name: 'Neptune', au: '30.07 AU', moons: 14},
      {name: 'Uranus', au: '19.18 AU', moons: 27},
      {name: 'Saturn', au: '9.58 AU', moons: 82},
      {name: 'Jupiter', au: '5.20 AU', moons: 79},
      {name: 'Mars', au: '1.52 AU', moons: 2},
      {name: 'Earth', au: '1 AU', moons: 1},
      {name: 'Venus', au: '0.72 AU', moons: 0},
      {name: 'Mercury', au: '0.39 AU', moons: 0},
    ];
    
    // Relative sizes of the planets (not to scale)
    const planetSizes = [4, 6, 6.5, 5, 8, 7, 5.5, 5, 4];

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex justify="space-between" align="center" flex="1" pt="5%" pb="5%" ml='4%'>
                {planetDetails.map((planet, i) => (
                  <Planet key={i} size={planetSizes[i]} planetInfo={planet} />
                ))}
                <Planet size={35} ml='30%' isSun />
            </Flex>
            <Footer />
        </div>
    );
}

export default Home;
