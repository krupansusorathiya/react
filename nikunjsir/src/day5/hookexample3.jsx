import React, { useState } from "react";

function Stateexample3() {
  const [color, setColor] = useState("green");
  const [textStyles, setTextStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const handleTextStyleChange = (style) => {
    setTextStyles({ ...textStyles, [style]: !textStyles[style] });
  };
  

  return (
    <div>
      <input type="radio" name="color" onChange={() => setColor("yellow")} />{" Yellow"}
      <input type="radio" name="color" onChange={() => setColor("red")} />{"Red "}
      <input type="radio" name="color"onChange={() => setColor("blue")} />{"Blue "}
      

      <p
        style={{
          color: color,
          fontWeight: textStyles.bold ? "bold" : "normal",
          fontStyle: textStyles.italic ? "italic" : "normal",
          textDecoration: textStyles.underline ? "underline" : "none",
        }}
      >
        This is the text
      </p>

      <input type="checkbox"  onChange={() => handleTextStyleChange("bold")} />{"Bold "}
      <input type="checkbox"onChange={() => handleTextStyleChange("italic")} />{" Italic"}
      <input type="checkbox" onChange={() => handleTextStyleChange("underline")}/>{"Underline "}
      
    </div>
  );
}

export default Stateexample3;