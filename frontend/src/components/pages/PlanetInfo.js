import React from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import planetDetails from './PlanetDetails';

const PlanetInfo = () => {
    const { planetName } = useParams(); 
    const planet = planetDetails.find(p => p.name === planetName);
    
    if (!planet) {
      return <div>Planet not found.</div>;
    }

    return (
      <div>
        <h1>{planet.name}</h1>
        <p>{planet.description}</p>
      </div>
    );
};

export default PlanetInfo;
