import React from "react";
import React, { useState } from "react";


function Toggle() {
  const [ifIsOn, setOn] = useState(false);

  function handleClick() {
    setOn((ifIsOn) => !ifIsOn);
  }

  const color = isOn ? "blue" : "green";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}


export default Toggle;
