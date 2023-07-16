import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Planet({ size, position }) {
  useFrame(({ clock }) => {
    // Rotation logic if needed
  });
  
  return (
    <mesh position={position}>
      <Sphere args={[size, 32, 32]}>
        <meshBasicMaterial color="white" wireframe />
      </Sphere>
    </mesh>
  )
}

function Home() {
    // Relative sizes of the planets (not to scale)
    const planetSizes = [0.3, 0.75, 0.8, 0.4, 4, 3.3, 1.4, 1.3];
    const planetPositions = planetSizes.map((_, i) => [2 * i, 0, 0]); // Positions of the planets (change as required)

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <Navbar />
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} />
                {planetSizes.map((size, i) => (
                  <Planet key={i} size={size} position={planetPositions[i]} />
                ))}
            </Canvas>
            <Footer />
        </div>
    );
}

export default Home;
