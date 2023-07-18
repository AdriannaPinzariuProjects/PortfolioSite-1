import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import { moveRightAnimation, moveLeftAnimation, textFallAnimation, shrinkAndFade, moveLeftInwardAnimation, moveRightInwardAnimation } from './Animations';
import planetDetails from './PlanetDetails';
import Planet from './Planet';
import PlanetDescription from './PlanetDescription';


const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function Home() {
  
    
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
  }, []);

  const navigate = useNavigate();
  
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
        setTimeout(() => {
          navigate(`/${selectedPlanet}/info`);
        }, 1000);
      }
    }
  
    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
  
    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlanet]);


  return (
    
    <div>
      <style>
      
      </style>
      <div
        style={{
          width: '100vw', 
          height: '100vh', 
          backgroundColor: 'black', 
          display: 'flex', 
          flexDirection: 'column',
          animation: isEnterPressed ? 'fadeOut 1s ease-out forwards' : '',
        }}
      >
      <Navbar />
      <Flex justify="space-between" align="center" flex="1" pt="5%" pb="5%" ml='4%' mr='10%' style={{ perspective: '1000px' }}>
        {planetDetails.map((planet, i) => {
          const selectedPlanetIndex = planetDetails.findIndex(p => p.name === selectedPlanet);

          //const moveDirection = i < selectedPlanetIndex ? moveLeftAnimation : moveRightAnimation;
          const moveDirection = i < selectedPlanetIndex ? moveLeftInwardAnimation : moveRightInwardAnimation;


          // check if the current planet is the selected planet
          if (selectedPlanet === planet.name) {
            return (
              <Box
        key={`planet-${i}`} // Fixed key for selected planet
        as="div"
        animation={isEnterPressed ? `${shrinkAndFade} 2s forwards` : ''}
      >
                <Planet 
  size={planetSizes[i]} 
  planetInfo={planet} 
  isSelected={selectedPlanet === planet.name} 
  setSelected={setSelectedPlanet} 
  isEnterPressed={isEnterPressed}
/>

              </Box>
            )
          }
          return (
            <Box
  key={isEnterPressed ? i : `planet-${i}`}
  as="div"
  animation={isEnterPressed && i !== selectedPlanetIndex ? `${shrinkAndFade} 0.8s cubic-bezier(0.555, 0.05, 0.855, 0.06) forwards ${Math.abs(selectedPlanetIndex - i) * 0.1}s, ${moveDirection} 0.8s cubic-bezier(0.555, 0.05, 0.855, 0.06) forwards ${Math.abs(selectedPlanetIndex - i) * 0.1}s` : ''}


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
      
      {/* NOTE: Temporarily Commenting Out For Later Use.
      
      <Box
  as="div"
  position="absolute"
  width="100%"
  top="21.5%"
  transform="translateY(-50%)"
  textAlign="center"
  fontSize="12vw"
  fontWeight="bold"
  fontFamily="'Roboto', sans-serif"
  color="white"
  letterSpacing="0.3em" 
  textTransform="uppercase"
  opacity={0}
  animation={isEnterPressed ? `${textFallAnimation} 1.75s 0.7s cubic-bezier(0.3, 0.5, 0.2, 1) forwards` : ''}
>
  {selectedPlanet}
</Box> 
{selectedPlanet && isEnterPressed && <PlanetDescription planet={planetDetails.find(planet => planet.name === selectedPlanet)} />}
*/}


      
      <Footer />
    </div>
    </div>

  );
}

export default Home;