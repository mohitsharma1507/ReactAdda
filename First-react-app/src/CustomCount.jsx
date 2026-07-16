import { useCounter } from "./custom/counter";

function CustomCount() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div className="container">
      <p>
        Count: <span> {count} </span>
      </p>
      <br />
      <br />
      <div>
        <button onClick={increment} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={decrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CustomCount;
