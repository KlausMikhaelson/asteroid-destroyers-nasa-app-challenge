import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Exoplanets from "../../Components/Exoplanets/Exoplanets";

import sunTexture from '../../textures/sun.jpg';
import mercuryTexture from '../../textures/mercury.jpg';
import venusTexture from '../../textures/venus.jpg';
import earthTexture from '../../textures/earth.jpg';
import marsTexture from '../../textures/mars.jpg';
import jupiterTexture from '../../textures/jupiter.jpg';
import saturnTexture from '../../textures/saturn.jpg';
import uranusTexture from '../../textures/uranus.jpg';
import neptuneTexture from '../../textures/neptune.jpg';

// Dummy planet data without color property
const dummyPlanets = [
  { position: [15, 0, 0], key: 1, speed: 0.047, size: 0.5, texture: mercuryTexture },  // Mercury
  { position: [20, 0, 0], key: 2, speed: 0.035, size: 0.9, texture: venusTexture },   // Venus
  { position: [25, 0, 0], key: 3, speed: 0.030, size: 1.0, texture: earthTexture },   // Earth
  { position: [30, 0, 0], key: 4, speed: 0.024, size: 0.5, texture: marsTexture },    // Mars
  { position: [35, 0, 0], key: 5, speed: 0.013, size: 1.5, texture: jupiterTexture }, // Jupiter
  { position: [40, 0, 0], key: 6, speed: 0.015, size: 1.2, texture: saturnTexture },  // Saturn
  { position: [45, 0, 0], key: 7, speed: 0.007, size: 1.0, texture: uranusTexture },  // Uranus
  { position: [50, 0, 0], key: 8, speed: 0.005, size: 0.9, texture: neptuneTexture },  // Neptune
];

// OrbitRing component
const OrbitRing = ({ radius, color = "#FFFFFF" }) => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};

// OrbitingPlanet component
const OrbitingPlanet = ({ planet }) => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.speed * 0.01; // Scale speed to fit your rendering frame rate
    }
  });

  return (
    <group ref={orbitRef}>
      <Exoplanets position={planet.position} size={planet.size} texture={planet.texture} />
    </group>
  );
};

// OrbitingMoon component
const OrbitingMoon = ({ planet }) => {
  const orbitRef = useRef();
  const moonRef = useRef();
  const moonDistance = 2; // Distance from the planet (Earth)
  const moonSpeed = 0.1;  // Speed of the moon's orbit

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.speed * 0.01; // Rotate around the sun
    }
    if (moonRef.current) {
      moonRef.current.position.x = planet.position[0] + moonDistance * Math.cos(moonSpeed * (Date.now() * 0.001));
      moonRef.current.position.z = planet.position[2] + moonDistance * Math.sin(moonSpeed * (Date.now() * 0.001));
    }
  });

  return (
    <group ref={orbitRef}>
      <Exoplanets position={planet.position} size={planet.size} texture={planet.texture} />
      <Exoplanets ref={moonRef} position={[planet.position[0] + moonDistance, 0, 0]} size={0.27} texture={earthTexture} />
    </group>
  );
};

// SaturnWithRing component
const SaturnWithRing = ({ planet }) => {
  const groupRef = useRef();
  const ringRef = useRef();
  const ringSpeed = 0.01; // Speed of the ring's rotation

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Rotate Saturn around its axis
      groupRef.current.position.x = planet.position[0] * Math.cos(-planet.speed * (Date.now() * 0.001)); // Update position based on orbit
      groupRef.current.position.z = planet.position[0] * Math.sin(-planet.speed * (Date.now() * 0.001)); // Update position based on orbit
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += ringSpeed; // Rotate the ring around its axis
    }
  });

  return (
    <group ref={groupRef}>
      {/* Saturn Planet */}
      <Exoplanets position={[0, 0, 0]} size={planet.size} texture={planet.texture} />
      {/* Saturn Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 3.5, 64]} /> {/* Adjust inner and outer radius */}
        <meshBasicMaterial color="#DAA520" side={THREE.DoubleSide} transparent={true} opacity={0.7} />
      </mesh>
    </group>
  );
};

// Main Home Component
const Home = () => {
  return (
    <Canvas shadows style={{ height: "100vh" }} className="h-[100vh] bg-black">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={5} distance={50} />
      <OrbitControls />
      
      {/* Render the stationary sun with increased size and texture */}
      <Exoplanets position={[0, 0, 0]} size={5} texture={sunTexture}/>

      {/* Render the orbiting planets and orbit rings */}
      {dummyPlanets.map((planet) => (
        <React.Fragment key={planet.key}>
          <OrbitRing radius={planet.position[0]} color="#FFFFFF" />
          {planet.key === 6 ? (
            <SaturnWithRing planet={planet} /> // Use SaturnWithRing for Saturn
          ) : (
            <OrbitingPlanet planet={planet} />
          )}
        </React.Fragment>
      ))}
      
      {/* Add Moon for Earth */}
      <OrbitingMoon planet={dummyPlanets[2]} />
    </Canvas>
  );
};

export default Home;
