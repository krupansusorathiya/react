import React, { useState } from "react";

const Stateexaple2 = () => {
  const [name, setname] = useState("rku");
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      ></input>
    </div>
  );
};

export default Stateexaple2;