import React, { useState } from "react";

export function Input() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {/* displays the input as an H3 on the page as it's typed */}
      {inputValue && <h3>{inputValue}</h3>}

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // onChange={(e) => {
        //   if (!e.target.value.includes("t")) {
        //     setInputValue(e.target.value);
        //   }
        // }}
      />
    </div>
  );
}
