import "./App.css";
import React from "react";
import Decrease from "./components/counter/Decrease";
import Increase from "./components/counter/Increase";
import Reset from "./components/counter/Reset";
import { countStore } from "./store/countStore";

function App() {
  const obj = countStore();
  return (
    <>
      <h1>Zustand</h1>
      <h2>Count: {obj.count}</h2>
      <Increase />
      <Decrease />
      <Reset />
      <button onClick={obj.promise}>Promise</button>
    </>
  );
}

export default App;
