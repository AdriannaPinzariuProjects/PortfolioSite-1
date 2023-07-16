import { keyframes } from '@emotion/react';

export const moveRightAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(100vw, 0, 1000px) scale(3); opacity: 0; }
`;

export const moveLeftAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(-100vw, 0, 1000px) scale(3); opacity: 0; }
`;

export const textFallAnimation = keyframes`
  0% { 
    transform: translateZ(-500px) scale(5);
    opacity: 0; 
  }
  100% { 
    transform: translateZ(0) scale(1);
    opacity: 1; 
  }
`;

/* 
const moveRightAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(100vw, 0, 1000px) scale(3); opacity: 0; }
`;

const moveLeftAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(-100vw, 0, 1000px) scale(3); opacity: 0; }
`;

const textFallAnimation = keyframes`
  0% { 
    transform: translateZ(-500px) scale(5);
    opacity: 0; 
  }
  100% { 
    transform: translateZ(0) scale(1);
    opacity: 1; 
  }
`;
*/