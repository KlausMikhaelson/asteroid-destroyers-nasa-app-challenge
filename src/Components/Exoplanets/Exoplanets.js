import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Exoplanets = ({ position, color }) => {
  return (
    <Sphere position={position} args={[1, 32, 32]}>
      <meshStandardMaterial attach="material" color={color} />
    </Sphere>
  );
};

export default Exoplanets;


// const firstFilteredPlanet = filteredPlanets.length > 0 ? filteredPlanets[0].pl_name : null;
// isFiltered={planet.pl_name === firstFilteredPlanet} // Apply the overlay to only the first filtered planet


// const Orbits = () => {
//   const orbitRef1 = useRef();
//   const orbitRef2 = useRef();

//   useFrame(() => {
//     // Rotate the orbits to make planets move
//     if (orbitRef1.current) {
//       orbitRef1.current.rotation.y += 0.01;
//     }
//     if (orbitRef2.current) {
//       orbitRef2.current.rotation.y += 0.02; // Different speed for variety
//     }
//   });

//   return (
//     <>
//       <group ref={orbitRef1}>
//         <Exoplanets position={[5, 0, 0]} color={"green"} />
//       </group>
//       <group ref={orbitRef2}>
//         <Exoplanets position={[10, 0, 0]} color={"blue"} />
//       </group>
//     </>
//   );
// };