import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { geometry } from "maath";
import { Sky, OrbitControls } from "@react-three/drei";
import Exoplanets from "../../Components/Exoplanets/Exoplanets";

const dummyPlanets = [
  {
    position: [5, 0, 0],
    key: 1,
    color: "#FF5733",
    speed: 0.01,
  },
  {
    position: [10, 0, 0],
    key: 2,
    color: "#33FF57",
    speed: 0.015,
  },
  {
    position: [15, 0, 0],
    key: 3,
    color: "#3357FF",
    speed: 0.008,
  },
  {
    position: [20, 0, 0],
    key: 4,
    color: "#FF33A1",
    speed: 0.012,
  },
  {
    position: [25, 0, 0],
    key: 5,
    color: "#A133FF",
    speed: 0.02,
  },
  {
    position: [30, 0, 0],
    key: 6,
    color: "#33FFA1",
    speed: 0.009,
  },
];

extend(geometry);

const Home = () => {
  return (
    <Canvas style={{ height: "100vh" }} className="h-[100vh] bg-black">
      {/* <Sky sunPosition={[100, 5, 100]} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />

      {dummyPlanets.map((planet) => (
        <OrbitingPlanet key={planet.key} planet={planet} />
      ))}
    </Canvas>
  );
};

const OrbitingPlanet = ({ planet }) => {
  const orbitRef = useRef();

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.speed;
    }
  });

  return (
    <group ref={orbitRef}>
      <Exoplanets position={planet.position} color={planet.color} />
    </group>
  );
};

export default Home;
