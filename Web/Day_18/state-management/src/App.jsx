import { useState, useContext, createContext,  } from "react";
import "./App.css";

const BulbContext = createContext();

function App() {
  const [isLight, setisLight] = useState(false);
  return (
    <div>
      <BulbContext.Provider value={{
        isLight: isLight,
        setisLight: setisLight
      }}>
      <Light />
      </BulbContext.Provider>
    </div>
  );
}

function Light() {
  
  return (
    <>
      <BulbState/>
      <ToggleBulbState/>
    </>
  );
}

function BulbState() {
  const {isLight} = useContext(BulbContext);
  return (
    <div>
      <h1>Light is {isLight ? "ON" : "OFF"}</h1>
    </div>
  );
}

function ToggleBulbState() {
  const {isLight, setisLight} = useContext(BulbContext);
  return (
    <div>
      <button onClick={() => setisLight(!isLight)}>
        {isLight ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default App;
