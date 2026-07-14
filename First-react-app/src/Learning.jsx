import React, { useCallback, useState } from "react";
import LearningChild from "./LearningChild";

const Learning = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);
  return (
    <div>
      <h1>Learning React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <LearningChild title="Learning Child" onClick={handleClick} />
    </div>
  );
};

export default Learning;
