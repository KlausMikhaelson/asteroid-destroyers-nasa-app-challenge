import logo from "./logo.svg";
import "./App.css";
import Routers from "./Routers";
import { createContext, useContext } from "react";

export const PlanetContext = createContext();

function App() {
  return (
    <PlanetContext.Provider value={{}}>
      <Routers />
    </PlanetContext.Provider>
  );
}

export default App;
