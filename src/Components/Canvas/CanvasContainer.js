import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Exoplanets from "../../Components/Exoplanets/Exoplanets";
import { exoplanets } from '../../data/exoplanets';  // Assuming this contains x, y, z values

// Utility function to get planet colors
const getPlanetColor = (name) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1"];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const OverlaySphere = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[4, 100, 100]} /> {/* Larger transparent green sphere */}
      <meshBasicMaterial color="lightgreen" opacity={0.6} transparent />
    </mesh>
  );
};

// Orbiting Planet component with overlay
const OrbitingPlanet = ({ planet, isFiltered }) => {
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
      {isFiltered && <OverlaySphere position={planet.position} />} {/* Overlay on filtered planets */}
    </group>
  );
};

// Custom OrbitControls wrapper to preserve camera state
const CustomOrbitControls = () => {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const onChange = () => {
      if (controlsRef.current) {
        controlsRef.current.saveState();
      }
    };
    controlsRef.current?.addEventListener("change", onChange);
    return () => controlsRef.current?.removeEventListener("change", onChange);
  }, [controlsRef]);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
      enableZoom={true}
      maxDistance={1000}
      minDistance={10}
      target={[0, 0, 0]}
    />
  );
};

const CanvasContainer = ({ filteredPlanets, onSelectExoplanet }) => {
  const controlsRef = useRef();

  return (
    <Canvas
      camera={{
        position: [0, 800, 800], // Adjusted camera position for 3D space
        fov: 75, // Field of view
        near: 0.1, // Near clipping plane
        far: 1000, // Far clipping plane
      }}
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundColor: '#040711' }}
    >
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Custom OrbitControls to manage camera position */}
      <CustomOrbitControls />

      <pointLight position={[10, 10, 10]} />

      {exoplanets.map((planet) => (
        <React.Fragment key={planet.pl_name}>
          <OrbitingPlanet
            planet={{
              position: [planet.x, planet.y, planet.z],  // Use x, y, z values here
              color: getPlanetColor(planet.pl_name),
              radius: planet.pl_rade * 10,  // Scaled planet radius
              name: planet.pl_name,
              hostname: planet.hostname,
              disc_year: planet.disc_year,
            }}
            isFiltered={filteredPlanets.some(filtered => filtered.pl_name === planet.pl_name)} // Apply filter check
            onClick={() => onSelectExoplanet(planet)} // Handle planet selection on click
          />
        </React.Fragment>
      ))}
    </Canvas>
  );
};

export default CanvasContainer;