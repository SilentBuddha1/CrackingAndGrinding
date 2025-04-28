import React from "react";
import { countStore } from "../../store/countStore";

const Decrease = () => {
  const obj = countStore();
  return (
    <button onClick={obj.decrease} disabled={obj.count === 0}>
      Decrease
    </button>
  );
};

export default Decrease;
