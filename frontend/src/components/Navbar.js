import React, { Component } from 'react';
import { Flex, Button, Spacer, Text, Box, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import  './Component.css'
import planetImg from './Vector.svg';


const MotionButton = motion(Button);

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function CustomBarIcon() {
  return (
    <Box>
      <Box bg="white" h="0.05rem" w="1rem" mb="0.4rem"/>
      <Box bg="white" h="0.05rem" w="1rem"/>
    </Box>
  );
}


function Navbar() {
  return (
    <Flex alignItems="center" pt='.5%' pb='1%' bg="black" color="white" boxShadow="md" position="sticky" top={0} zIndex={3}>
      <Box ml="5.75%">
        <img src={planetImg} alt="Planet" />
      </Box>
      <Text fontSize="1rem" ml="1.3%" fontWeight="bold">MyPortfolio</Text>
      <Spacer />
      <Link to="/">
        <MotionButton
          mr="20"
          mt=".5rem"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          colorScheme="black"
          size="lg"
          color="white"
          style={{ fontFamily: 'Josefin Sans', fontSize: '65%', letterSpacing: '0.15em' }}
        >
          HOME
        </MotionButton>
      </Link>
      <Link to="/about">
        <MotionButton
          mr="20"
          mt=".5rem"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          colorScheme="black"
          size="lg"
          color="white"
          style={{ fontFamily: 'Josefin Sans', fontSize: '65%', letterSpacing: '0.15em' }}
        >
          ABOUT
        </MotionButton>
      </Link>
      <Link to="/experience">
        <MotionButton
          mr="20"
          mt=".5rem"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          colorScheme="black"
          size="lg"
          color="white"
          style={{ fontFamily: 'Josefin Sans', fontSize: '65%', letterSpacing: '0.15em' }}
        >
          EXPERIENCES
        </MotionButton>
      </Link>
      <Link to="/hobby">
        <MotionButton
          mt=".5rem"
          mr="20"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          colorScheme="black"
          size="lg"
          color="white"
          style={{ fontFamily: 'Josefin Sans', fontSize: '65%', letterSpacing: '0.15em' }}
        >
          HOBBIES
        </MotionButton>
      </Link>
      <Link to="/location">
        <MotionButton
          mr="125"
          mt=".5rem"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          colorScheme="black"
          size="lg"
          color="white"
          style={{ fontFamily: 'Josefin Sans', fontSize: '65%', letterSpacing: '0.15em' }}
        >
          LOCATION
        </MotionButton>
      </Link>
      <CustomBarIcon/>
      <Box mr="6%" />
    </Flex>
  );
}


export default Navbar;
