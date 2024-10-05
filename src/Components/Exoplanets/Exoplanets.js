import { Sphere, useTexture } from "@react-three/drei";
import React from "react";

const Exoplanets = ({ position, color, size = 1, texture }) => {
  // Use useTexture to load the texture
  const textures = useTexture(texture ? [texture] : []); // Load texture only if provided
  const map = textures[0]; // Get the first texture from the loaded array

  // Check if the texture is successfully loaded
  if (texture && !map) {
    console.error("Texture failed to load:", texture); // Log the texture path if it fails
  }

  return (
    <Sphere position={position} args={[size, 32, 32]}>
      <meshStandardMaterial 
        attach="material" 
        color={color} 
        map={map} // Use the loaded texture if it exists
        transparent={true} // Enable transparency if needed
      />
    </Sphere>
  );
};

export default Exoplanets;
