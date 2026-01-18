import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

export default function Counter({count, handleIncrement, handleDecrement}) {
  

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-6 rounded shadow">
      <Count count={count}></Count>
      <div className="flex justify-start gap-3">
        <Button type="danger"  handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
