import { useState } from "react";

function AdvanceCount() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    setCount(count - step);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <p>
        Count: <span> {count} </span>
      </p>

      <br />
      <br />
      <div>
        <label>
          Step:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <button onClick={handleIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Resest</button>
      </div>
    </div>
  );
}

export default AdvanceCount;
