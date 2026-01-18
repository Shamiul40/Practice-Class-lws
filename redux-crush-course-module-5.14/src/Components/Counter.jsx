import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count}></Count>
      <div >
        <Button>Increment</Button>
        <Button>Decrement</Button>
      </div>
    </div>
  );
}
