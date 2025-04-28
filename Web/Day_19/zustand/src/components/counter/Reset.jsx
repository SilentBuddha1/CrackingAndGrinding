import React from "react";
import { countStore } from "../../store/countStore";

const Reset = () => {
  const obj = countStore();
  return <button onClick={obj.reset}>Reset</button>;
};

export default Reset;
