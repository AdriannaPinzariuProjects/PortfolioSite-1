import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';


function PlanetDescription({ planet }) {
    if (!planet) {
      return null;
    }
  
    return (
      <Box 
        position="absolute" 
        left="10%" 
        top="55%" 
        color="white" 
        width="50%"
        fontSize="1.3vw"
      >
        <Text lineHeight="1.7">{planet.description}</Text>
        <Flex mt={5} wrap="wrap" align="center" justify="space-between">
          <Flex direction="row" align="center">
            <Text color="white" fontWeight="bold" fontSize="0.7em">DAY</Text>
            <Text color="white" fontSize="1.1em" ml={3}>{planet.day}</Text>
          </Flex>
          <Flex direction="row" align="center">
            <Text color="white" fontWeight="bold" fontSize="0.7em">RADIUS</Text>
            <Text color="white" fontSize="1.1em" ml={3}>{planet.radius}</Text>
          </Flex>
          <Flex direction="row" align="center">
            <Text color="white" fontWeight="bold" fontSize="0.7em">MOONS</Text>
            <Text color="white" fontSize="1.1em" ml={3}>{planet.moons}</Text>
          </Flex>
          <Flex direction="row" align="center">
            <Text color="white" fontWeight="bold" fontSize="0.7em">TYPE</Text>
            <Text color="white" fontSize="1.1em" ml={3}>{planet.planetType}</Text>
          </Flex>
        </Flex>
      </Box>
    );
  }

  export default PlanetDescription;