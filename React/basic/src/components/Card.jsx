import React, { useState } from "react";
import { Ram, Shyam, Hari, Gita} from "../content/content";
import Hello from "./Hello"

const Card = () => {
    const [data, setdata] = useState("");
  return (
    <div>
      <div>
        <button onClick={() => setdata(Ram)}>Ram</button>
        <button onClick={() => setdata(Shyam)}>Shyam</button>
        <button onClick={() => setdata(Hari)}>Hari</button>
        <button onClick={() => setdata(Gita)}>Gita</button>
        <button onClick={() => setdata(<Hello/>)}>Hello</button>
      </div>
      <div>{data}</div>
    </div>
  );
};

export default Card;
