import React, { Component } from 'react';
import { Flex, Button, Spacer, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import  './Component.css'

const MotionButton = motion(Button);

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function Navbar() {
  return (
    <Flex alignItems="center" pt='1.5%' bg="transparent" color="white" boxShadow="md" position="sticky" top={0} zIndex={3}>

      <Text fontSize=".7rem" ml="2%" fontWeight="bold">MyPortfolio</Text>
      <Spacer />
      <Link to="/">
        <MotionButton
          mr="4"
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
          mr="4"
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
          mr="4"
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
          mr="4"
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
          mr="4"
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
    </Flex>
  );
}


export default Navbar;
