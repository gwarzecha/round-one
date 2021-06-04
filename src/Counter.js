import React, { useState } from "react";

export function Counter() {
  // 0 is the default state that is passed in
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => setCount(count + 1)}
      >+</button>
      <button
        onClick={() => setCount(count - 1)}
      >-</button>
    </div>
  );
}
