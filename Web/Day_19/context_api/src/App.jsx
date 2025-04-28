import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Decrease setCount={setCount} />
      <Increase setCount={setCount} />
    </div>
  );
}

function Decrease({ setCount }) {
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

function Increase({ setCount }) {
  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App;
