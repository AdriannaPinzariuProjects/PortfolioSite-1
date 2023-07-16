import React from 'react';
import { Flex, Box, AspectRatio, VStack } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Planet({ size }) {
  return (
    <AspectRatio ratio={1} w={`${size}%`} h="auto">
      <Box borderRadius="50%" border="2px solid white" />
    </AspectRatio>
  );
}

function Home() {
    // Relative sizes of the planets (not to scale)
    const planetSizes = [4, 6, 6.5, 5, 8, 7, 5.5, 5];
    
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Flex justify="space-between" align="center" flex="1" pt="5%" pb="5%">
                {planetSizes.map((size, i) => (
                  <Planet key={i} size={size} />
                ))}
            </Flex>
            <Footer />
        </div>
    );
}

export default Home;
