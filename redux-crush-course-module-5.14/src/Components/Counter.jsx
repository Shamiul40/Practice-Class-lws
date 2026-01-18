import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement=()=>{
    setCount(prevCount=>prevCount+1)
  }
  
  const handleDecrement=()=>{
    setCount(prevCount=>prevCount-1)
  }

  return (
    <div>
      <Count count={count}></Count>
      <div >
        <Button handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
