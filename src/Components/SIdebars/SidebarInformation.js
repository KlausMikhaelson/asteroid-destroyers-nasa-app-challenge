import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const SidebarInformation = ({ characterizedExoplanets }) => {
  return (
    <div className="sidepanel w-72 right-0 absolute flex items-center justify-center bg-transparent p-2 z-50 h-[100vh] ">
      <div className="bg-white/5 w-full flex-col rounded-lg p-2 backdrop-blur-md h-[90vh]">
        <h1 className="text-white text-3xl">Selected Exoplanet</h1>
        <hr className="border-white" />
        <Canvas style={{ height: "40vh" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <Sphere args={[1, 32, 32]}>
              <meshStandardMaterial attach={"material"} color="red" />
            </Sphere>
          </mesh>
        </Canvas>
        <div>
          <h1>Details</h1>
          <div>
            <h2>Name: {characterizedExoplanets.name}</h2>
            <h2>Discovery Method: {characterizedExoplanets.pl_discmethod}</h2>
            <h2>Orbital Period: {characterizedExoplanets.pl_orbper}</h2>
            <h2>Radius: {characterizedExoplanets.pl_rade}</h2>
            <h2>Mass: {characterizedExoplanets.pl_masse}</h2>
            <h2>Temperature: {characterizedExoplanets.pl_eqt}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInformation;
