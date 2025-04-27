import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Light />
    </div>
  );
}

function Light() {
  const [isLight, setisLight] = useState(false);
  return (
    <>
      <BulbState bulbOn={isLight} />
      <ToggleBulbState buldOn={isLight} setBulbOn={setisLight} />
    </>
  );
}

function BulbState({ bulbOn }) {
  return (
    <div>
      <h1>Light is {bulbOn ? "ON" : "OFF"}</h1>
    </div>
  );
}

function ToggleBulbState({ buldOn, setBulbOn }) {
  return (
    <div>
      <button onClick={() => setBulbOn(!buldOn)}>
        {buldOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default App;
