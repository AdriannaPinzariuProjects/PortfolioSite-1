import React, { useState, useEffect, useMemo } from 'react';
import { Flex, Box, AspectRatio, VStack, Text } from '@chakra-ui/react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { keyframes } from '@emotion/react';

const moveRightAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(100vw, 0, 1000px) scale(3); opacity: 0; }
`;

const moveLeftAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(-100vw, 0, 1000px) scale(3); opacity: 0; }
`;





function Planet({ size, isSun = false, planetInfo, isSelected, setSelected }) {
    const borderSize = isSun ? '0.05px' : '0.05px';
  
    const getImage = (planetName) => {
      return `url(${process.env.PUBLIC_URL}/${planetName.toLowerCase()}.png)`;
    };
  
    const planetImage = planetInfo ? getImage(planetInfo.name) : null;
    const zoomSize = isSelected ? `${size * 2}%` : `${size}%`;
  
    return (
      <VStack spacing="1em" align="center" onClick={() => setSelected(planetInfo.name)}>
        {planetInfo && <Text color="white">{planetInfo.au}</Text>}
        <Box 
          position="relative" 
          w={zoomSize}
          h="auto"
          backgroundImage={isSelected ? planetImage : ''}
          backgroundSize={isSelected ? 'cover' : '0 0'}
          _hover={{ backgroundSize: 'cover' }}
          transition="background-size 0.5s, width 0.5s"
        >
          <AspectRatio ratio={1}>
            <Box 
              borderRadius="50%" 
              border={isSelected ? 'none' : `${borderSize} solid white`} 
              position="absolute" 
              left={isSun ? '50%' : '0'} 
              right="0" 
              top="0" 
              bottom="0"
            />
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
    const planetDetails = useMemo(() => [
        {name: 'Pluto', au: '39.5 AU', moons: 5},
        {name: 'Neptune', au: '30.07 AU', moons: 14},
        {name: 'Uranus', au: '19.18 AU', moons: 27},
        {name: 'Saturn', au: '9.58 AU', moons: 82},
        {name: 'Jupiter', au: '5.20 AU', moons: 79},
        {name: 'Mars', au: '1.52 AU', moons: 2},
        {name: 'Earth', au: '1 AU', moons: 1},
        {name: 'Venus', au: '0.72 AU', moons: 0},
        {name: 'Mercury', au: '0.39 AU', moons: 0},
      ], []);
    
    // Relative sizes of the planets (not to scale)
    const planetSizes = [40, 50, 55, 45, 70, 60, 50, 45, 40];

    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isEnterPressed, setIsEnterPressed] = useState(false);
      
     // Image preloading
  useEffect(() => {
    planetDetails.forEach((planet) => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/${planet.name.toLowerCase()}.png`;
    });
  }, [planetDetails]);
  
  useEffect(() => {
    function handleKeyDown(e) {
      const currentIndex = planetDetails.findIndex(p => p.name === selectedPlanet);
      
      // Check if left or right arrow was pressed
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % planetDetails.length;
        setSelectedPlanet(planetDetails[nextIndex].name);
        setIsEnterPressed(false); // Reset the state when an arrow key is pressed
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + planetDetails.length) % planetDetails.length;
        setSelectedPlanet(planetDetails[prevIndex].name);
        setIsEnterPressed(false); // Reset the state when an arrow key is pressed
      } else if (e.key === "Enter") {
        // Set isEnterPressed to true when Enter key is pressed
        setIsEnterPressed(true);
      }
    }
  
    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
  
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlanet, planetDetails]);


  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Flex justify="space-between" align="center" flex="1" pt="5%" pb="5%" ml='4%' mr='10%' style={{ perspective: '1000px' }}>
        {planetDetails.map((planet, i) => {
          const selectedPlanetIndex = planetDetails.findIndex(p => p.name === selectedPlanet);
          const moveDirection = i < selectedPlanetIndex ? moveLeftAnimation : moveRightAnimation;
          // check if the current planet is the selected planet
          if (selectedPlanet === planet.name) {
            return (
              <Box
                key={`planet-${i}`} // Fixed key for selected planet
                as="div"
              >
                <Planet 
                  size={planetSizes[i]} 
                  planetInfo={planet} 
                  isSelected={selectedPlanet === planet.name} 
                  setSelected={setSelectedPlanet} 
                />
              </Box>
            )
          }
          return (
            <Box
  key={isEnterPressed ? i : `planet-${i}`} 
  as="div"
  animation={isEnterPressed ? `${moveDirection} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(planetDetails.length - Math.abs(selectedPlanetIndex - i)) * 0.1}s forwards` : ''}
  style={{ willChange: 'transform, opacity' }}
>
  <Planet 
    size={planetSizes[i]} 
    planetInfo={planet} 
    isSelected={selectedPlanet === planet.name} 
    setSelected={setSelectedPlanet} 
  />
  </Box>
          )
        })}
      </Flex>
      <Box position="absolute" right="10%" top="50%" transform="translateY(-50%)">
        <Planet size={500} isSun />
      </Box>
      <Footer />
    </div>
  );
}

export default Home;