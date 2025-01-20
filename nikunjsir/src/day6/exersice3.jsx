// create a react pure fuctional component
// that will toggle the visibility of the text written by user 
//take one text box and on botton will togle the visibility 
//when text is visible button text should be hidden text
//when text is hidden button text should be show text


import React, { useState } from "react";

const Exce3 = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default Exce3;