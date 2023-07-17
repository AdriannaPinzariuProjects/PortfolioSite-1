import { keyframes } from '@emotion/react';

export const moveRightAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(100vw, 0, 1000px) scale(3); opacity: 0; }
`;

export const moveLeftAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(-100vw, 0, 1000px) scale(3); opacity: 0; }
`;

export const moveRightInwardAnimation = keyframes`
  0% {
    transform: translateX(0) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateZ(-1000px);
    opacity: 0;
  }
`;

export const moveLeftInwardAnimation = keyframes`
  0% {
    transform: translateX(0) translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateX(50%) translateZ(-1000px);
    opacity: 0;
  }
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

export const moveTowardCenterAnimation = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
  100% { transform: translate3d(0, 0, 0) scale(0.5); opacity: 0; }
`;

export const shrinkAndFade = keyframes`
  0% { transform: scale(1); opacity: 1; }
  80% { opacity: 0; }
  100% { transform: scale(0); opacity: 0; }
`;


/*
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const fadeOutAnimation = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;*/





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