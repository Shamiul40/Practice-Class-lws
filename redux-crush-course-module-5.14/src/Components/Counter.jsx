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
    <div className="flex flex-col items-center gap-4">
      <Count count={count}></Count>
      <div className="flex justify-start gap-3">
        <Button handler={handleIncrement}>Increment</Button>
        <Button type="danger" handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
