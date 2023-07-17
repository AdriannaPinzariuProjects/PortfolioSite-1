import React from 'react';

const Overlay = ({ opacity }) => {
  return (
    <div style={{
      position: 'fixed', 
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      opacity: opacity,
      zIndex: 3,
      transition: 'opacity .5s ease-in-out'
    }} />
  );
};

export default Overlay;
