import React, { useState, useEffect } from 'react';

const withFadeIn = (WrappedComponent) => {
  return (props) => {
    const [componentOpacity, setComponentOpacity] = useState(0);

    useEffect(() => {
      const fadeEffect = setInterval(() => {
        if (componentOpacity < 1) {
          setComponentOpacity(prevComponentOpacity => prevComponentOpacity + 0.02);
        } else {
          clearInterval(fadeEffect);
        }
      }, 20); // adjust this value to control the speed of the animation

      return () => clearInterval(fadeEffect);
    }, [componentOpacity]);

    return (
      <div
        style={{
          opacity: componentOpacity,
          position: 'relative' // Change position to 'relative'
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeIn;
