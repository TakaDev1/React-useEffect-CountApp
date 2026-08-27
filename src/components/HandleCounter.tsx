import React, { useEffect, useState } from "react";
import DisplayCounter from "./DisplayCounter";
import styles from "./Button.module.css";

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
      <DisplayCounter count={count} />
      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>
      <button onClick={handleDecrement} className={styles.button}>
        -
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default HandleCounter;
