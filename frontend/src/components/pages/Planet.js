import React from 'react';
import { Box, AspectRatio, VStack, Text } from '@chakra-ui/react';


function Planet({ size, isSun = false, planetInfo, isSelected, setSelected, isEnterPressed }) {
    const borderSize = isSun ? '0.05px' : '0.05px';
  
    const getImage = (planetName) => {
      return `url(${process.env.PUBLIC_URL}/${planetName.toLowerCase()}.png)`;
    };
  
    const planetImage = planetInfo ? getImage(planetInfo.name) : null;
    // Update the zoomSize calculation to account for isEnterPressed
    //const zoomSize = isSelected ? (isEnterPressed ? `${size * 30}%` : `${size * 2}%`) : `${size}%`;
    const zoomSize = isSelected ? (isEnterPressed ? `${size * 2}%` : `${size * 2}%`) : `${size}%`;
  
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
  transition={isEnterPressed ? 'width 1.75s .8s, background-size 2s 1s' : 'width 0.5s, background-size 0.5s'}
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
  

export default Planet;