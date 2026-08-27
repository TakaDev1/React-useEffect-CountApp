import React from "react";

const DisplayCounter = ({ count }: { count: number }) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default DisplayCounter;
