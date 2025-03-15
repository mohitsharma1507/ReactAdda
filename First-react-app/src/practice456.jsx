import { useContext } from "react";
import { CountContext } from "./practice45";

function Kaam() {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      Counter:{count}
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          ➖ Decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Kaam;
