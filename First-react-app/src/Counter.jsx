import { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const handleLeftClick = () => {
    setIncrement((prev) => prev + 1);
    setDecrement((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleRightClick = () => {
    setDecrement((prev) => prev + 1);
    setIncrement((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div>
      <h1>Counter</h1>

      <div className="left">
        Count:{increment}
        <button onClick={handleLeftClick}>Left</button>
      </div>
      <div className="right">
        Count:{decrement}
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
};
export default Counter;
