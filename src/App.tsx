import { Canvas } from "@react-three/fiber";

import CarSport from "./components/CarSport";
import Configurator from "./components/Configurator";

function App() {
  return (
    <div className="App">
      <Canvas>
        <CarSport />
      </Canvas>
      <Configurator />
    </div>
  );
}

export default App;
