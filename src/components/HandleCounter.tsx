import React, { useEffect, useState } from "react";
import DisplayCounter from "./DisplayCounter";

const HandleCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log(`カウントが更新されました: ${count}`);
  }, [count]);

  return (
    <div>
      <DisplayCounter />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default HandleCounter;
