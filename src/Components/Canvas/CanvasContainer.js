import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Exoplanets from "../../Components/Exoplanets/Exoplanets";
import { exoplanets } from '../../data/exoplanets';

// Utility function for random position in the XZ plane
const getRandomPositionInPlane = (distance) => {
  const angle = Math.random() * Math.PI * 2;
  const x = distance * Math.cos(angle);
  const z = distance * Math.sin(angle);
  return [x, 0, z]; // Planar positions on XZ plane (y=0)
};

// Utility function to get planet colors
const getPlanetColor = (name) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1"];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

// Orbiting Planet component
const OrbitingPlanet = ({ planet }) => {
  return (
    <group>
      <Exoplanets
        position={planet.position}
        color={"white"}
        radius={planet.radius}
        name={planet.name}
        hostname={planet.hostname}
        discYear={planet.disc_year}
      />
    </group>
  );
};

const CanvasContainer = () => {
  return (
    <Canvas
    camera={{
        position: [0, 800, 0], // Default camera position (further away for zoom out)
        fov: 75, // Field of view
        near: 0.1, // Near clipping plane
        far: 1000, // Far clipping plane
      }}
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: '#040711' }}
    >
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* OrbitControls for side view */}
      <OrbitControls
        maxPolarAngle={Math.PI}  // Allow full vertical rotation
        minPolarAngle={0}        // Allow full vertical rotation
        enableZoom={true}        // Enable zooming
        maxDistance={1000}        // Maximum zoom-out distance
        minDistance={10}         // Minimum zoom-in distance
        target={[0, 0, 0]}       // Focus the camera on the center
      />

      <pointLight position={[10, 10, 10]} />

      {exoplanets.map((planet) => (
        <React.Fragment key={planet.pl_name}>
          <OrbitingPlanet
            planet={{
              position: getRandomPositionInPlane(planet.sy_dist),
              color: getPlanetColor(planet.pl_name),
              radius: planet.pl_rade * 10,
              name: planet.pl_name,
              hostname: planet.hostname,
              disc_year: planet.disc_year,
            }}
          />
        </React.Fragment>
      ))}
    </Canvas>
  );
};

export default CanvasContainer;


// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Exoplanets from "../../Components/Exoplanets/Exoplanets";
// import { exoplanets } from '../../data/exoplanets';

// // Utility function for random position in the XZ plane
// const getRandomPositionInPlane = (distance) => {
//   const angle = Math.random() * Math.PI * 2;
//   const x = distance * Math.cos(angle);
//   const z = distance * Math.sin(angle);
//   return [x, 0, z]; // Planar positions on XZ plane (y=0)
// };

// // Utility function to get planet colors
// const getPlanetColor = (name) => {
//   const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1"];
//   const index = name.charCodeAt(0) % colors.length;
//   return colors[index];
// };

// // Orbiting Planet component
// const OrbitingPlanet = ({ planet }) => {
//   return (
//     <group>
//       <Exoplanets
//         position={planet.position}
//         color={"white"}
//         radius={planet.radius}
//         name={planet.name}
//         hostname={planet.hostname}
//         discYear={planet.disc_year}
//       />
//     </group>
//   );
// };

// const CanvasContainer = () => {
//   return (
//     <Canvas
//       camera={{
//         position: [0, 50, 100], // Move the camera along the Z-axis for a perpendicular side view
//         fov: 75, // Field of view
//         near: 0.1, // Near clipping plane
//         far: 1000, // Far clipping plane
//       }}
//       className="absolute top-0 left-0 w-full h-full"
//       style={{ backgroundColor: '#040711' }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
      
//       {/* OrbitControls for side view */}
//       <OrbitControls
//         maxPolarAngle={Math.PI}  // Allow full vertical rotation
//         minPolarAngle={0}        // Allow full vertical rotation
//         enableZoom={true}        // Enable zooming
//         maxDistance={200}        // Maximum zoom-out distance
//         minDistance={50}         // Minimum zoom-in distance
//         target={[0, 0, 0]}       // Focus the camera on the center
//       />

//       <pointLight position={[10, 10, 10]} />

//       {exoplanets.map((planet) => (
//         <React.Fragment key={planet.pl_name}>
//           <OrbitingPlanet
//             planet={{
//               position: getRandomPositionInPlane(planet.sy_dist),
//               color: getPlanetColor(planet.pl_name),
//               radius: planet.pl_rade * 10,
//               name: planet.pl_name,
//               hostname: planet.hostname,
//               disc_year: planet.disc_year,
//             }}
//           />
//         </React.Fragment>
//       ))}
//     </Canvas>
//   );
// };

// export default CanvasContainer;