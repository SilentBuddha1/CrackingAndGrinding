import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  
  return (
    <div>
      <CurrentCount />
      <Decrease />
      <Increase />
    </div>
  );
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return(
  <div>
    {count}
    </div>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
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
