import React, { useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { geometry } from "maath";
import { Sky, OrbitControls, Line } from "@react-three/drei";
import Exoplanets from "../../Components/Exoplanets/Exoplanets";
import SidebarFilter from "../../Components/SIdebars/SidebarFilter";
import SidebarInformation from "../../Components/SIdebars/SidebarInformation";

const dummyPlanets = [
  {
    position: [5, 0, 0],
    key: 1,
    color: "#FF5733",
    speed: 0.01,
    radius: 5,
  },
  {
    position: [10, 0, 0],
    key: 2,
    color: "#33FF57",
    speed: 0.015,
    radius: 10,
  },
  {
    position: [15, 0, 0],
    key: 3,
    color: "#3357FF",
    speed: 0.008,
    radius: 15,
  },
  {
    position: [20, 0, 0],
    key: 4,
    color: "#FF33A1",
    speed: 0.012,
    radius: 20,
  },
  {
    position: [25, 0, 0],
    key: 5,
    color: "#A133FF",
    speed: 0.02,
    radius: 25,
  },
  {
    position: [30, 0, 0],
    key: 6,
    color: "#33FFA1",
    speed: 0.009,
    radius: 30,
  },
];

extend(geometry);

const Home = () => {
  const [zoom, setZoom] = useState(50);
  const [characterizedExoplanets, setCharacterizedExoplanets] = useState([
    // dummy data with image, planet name
    {
      id: 1,
      key: 1,
      name: "Kepler-22b",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/69B35544-5929-46C7-8CFB4A9476481272_source.jpg?w=1200",
    },
    {
      id: 2,
      key: 2,
      name: "Kepler-186f",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 3,
      key: 3,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 4,
      key: 4,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 1,
      key: 1,
      name: "Kepler-22b",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/69B35544-5929-46C7-8CFB4A9476481272_source.jpg?w=1200",
    },
    {
      id: 2,
      key: 2,
      name: "Kepler-186f",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 3,
      key: 3,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 4,
      key: 4,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 1,
      key: 1,
      name: "Kepler-22b",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/69B35544-5929-46C7-8CFB4A9476481272_source.jpg?w=1200",
    },
    {
      id: 2,
      key: 2,
      name: "Kepler-186f",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 3,
      key: 3,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
    {
      id: 4,
      key: 4,
      name: "Kepler-452b",
      image:
        "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA19347_hires.jpg",
    },
  ]);
  const orbitControlsRef = useRef();

  const handleZoomChange = (event) => {
    setZoom(event.target.value);
    if (orbitControlsRef.current) {
      orbitControlsRef.current.object.zoom = event.target.value / 50; // Adjust the zoom scaling
      orbitControlsRef.current.object.updateProjectionMatrix();
    }
  };

  return (
    <>
      <SidebarFilter characterizedExoplanets={characterizedExoplanets} />
      <SidebarInformation characterizedExoplanets={characterizedExoplanets} />
      <Canvas style={{ height: "100vh" }} className="h-[100vh] bg-black">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls ref={orbitControlsRef} />
        <pointLight position={[10, 10, 10]} />

        {dummyPlanets.map((planet) => (
          <React.Fragment key={planet.key}>
            <OrbitPath key={`orbit-${planet.key}`} radius={planet.radius} />
            <OrbitingPlanet key={planet.key} planet={planet} />
          </React.Fragment>
        ))}
      </Canvas>
    </>
  );
};

const OrbitPath = ({ radius }) => {
  const points = [];
  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius]);
  }

  return (
    <Line
      points={points} // Array of [x, y, z] points to draw the orbit
      color="white" // Color of the orbit line
      lineWidth={0.5} // Width of the line
      dashed={false} // Solid line
    />
  );
};

const OrbitingPlanet = ({ planet }) => {
  const orbitRef = useRef();

  // useFrame(() => {
  //   if (orbitRef.current) {
  //     orbitRef.current.rotation.y += planet.speed;
  //   }
  // });

  return (
    <group ref={orbitRef}>
      <Exoplanets position={[planet.radius, 0, 0]} color={planet.color} />
    </group>
  );
};

export default Home;
