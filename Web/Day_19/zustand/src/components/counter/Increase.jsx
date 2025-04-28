import React from "react";
import { countStore } from "../../store/countStore";

const Increase = () => {
  const obj = countStore();
  return (
    <>
      <button onClick={obj.increase}>Increase</button>
    </>
  );
};

export default Increase;
