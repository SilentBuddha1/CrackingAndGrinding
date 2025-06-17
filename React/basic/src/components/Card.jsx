import React, { useState } from "react";
import { Ram, Shyam, Hari, Gita } from "../content/content";

const Card = () => {
    const [data, setdata] = useState("");
  return (
    <div>
      <div>
        <button onClick={() => setdata(Ram)}>Ram</button>
        <button onClick={() => setdata(Shyam)}>Shyam</button>
        <button onClick={() => setdata(Hari)}>Hari</button>
        <button onClick={() => setdata(Gita)}>Gita</button>
      </div>
      <div>{data}</div>
    </div>
  );
};

export default Card;
