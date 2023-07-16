import React from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Ground() {
    // ...
}

function Home() {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <Navbar />
            <Canvas camera={{ position: [0, 10, 0] }} color="black">
   
                <ambientLight intensity={0.5} />

               
                <directionalLight position={[0, 10, 5]} />

            
                <Ground />

            </Canvas>
            <Footer />
        </div>
    );
}

export default Home;

