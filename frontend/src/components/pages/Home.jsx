import React, { useState, useEffect } from 'react';
import { Flex, Box, AspectRatio, VStack, Text } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Planet({ size, isSun = false, planetInfo, isSelected, setSelected }) {
    const borderSize = isSun ? '0.05px' : '0.05px';
  
    const getImage = (planetName) => {
      try {
        return `url(${process.env.PUBLIC_URL}/${planetName.toLowerCase()}.png)`;
      } catch {
        return null;
      }
    };
  
    const planetImage = planetInfo ? getImage(planetInfo.name) : null;
    
    // Increase size if selected
    const zoomSize = isSelected ? `${size * 2}%` : `${size}%`;
    
    return (
      <VStack spacing="1em" align="center" onClick={() => setSelected(planetInfo.name)}>
        {planetInfo && <Text color="white">{planetInfo.au}</Text>}
        <Box 
          position="relative" 
          w={zoomSize}
          h="auto"
          _hover={{ backgroundImage: planetImage ? planetImage : '' , backgroundSize: 'cover' }}
          transition="background-image 0.5s, width 0.5s"
        >
          <AspectRatio ratio={1}>
            <Box borderRadius="50%" border={`${borderSize} solid white`} position="absolute" left={isSun ? '50%' : '0'} right="0" top="0" bottom="0"/>
          </AspectRatio>
        </Box>
        {planetInfo && 
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
    const planetSizes = [40, 50, 55, 45, 70, 60, 50, 45, 40];

    const [selectedPlanet, setSelectedPlanet] = useState(null);
  
  // Add an effect that runs once when the component mounts
  useEffect(() => {
    function handleKeyDown(e) {
      const currentIndex = planetDetails.findIndex(p => p.name === selectedPlanet);
      
      // Check if left or right arrow was pressed
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % planetDetails.length;
        setSelectedPlanet(planetDetails[nextIndex].name);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + planetDetails.length) % planetDetails.length;
        setSelectedPlanet(planetDetails[prevIndex].name);
      }
    }

    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPlanet, planetDetails]);

    
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Flex justify="space-between" align="center" flex="1" pt="5%" pb="5%" ml='4%' mr='10%'>
          {planetDetails.map((planet, i) => (
            <Planet 
              key={i} 
              size={planetSizes[i]} 
              planetInfo={planet} 
              isSelected={selectedPlanet === planet.name} 
              setSelected={setSelectedPlanet} 
            />
          ))}
      </Flex>
      <Box position="absolute" right="10%" top="50%" transform="translateY(-50%)">
        <Planet size={500} isSun />
      </Box>
      <Footer />
    </div>
  );
}


export default Home;
