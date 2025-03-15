import { useState } from "react";

function UndorableCount() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]); // Stores past values for undo
  const [redoStack, setRedoStack] = useState([]); // Stores undone values for redo

  const handleClick = (key) => {
    const val = parseInt(key);
    setHistory([...history, count]); // Save current count before update
    setCount((existingValue) => existingValue + val);
    setRedoStack([]); // Clear redo stack when a new action happens
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const lastValue = history[history.length - 1];
    setRedoStack([count, ...redoStack]); // Save current count to redo stack
    setCount(lastValue);
    setHistory(history.slice(0, -1)); // Remove last element from history
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextValue = redoStack[0];
    setHistory([...history, count]); // Save current count to history
    setCount(nextValue);
    setRedoStack(redoStack.slice(1)); // Remove first element from redo stack
  };

  return (
    <div className="container">
      <h1>UndorableCount Here</h1>

      <div className="actions-btn">
        <button onClick={handleUndo} disabled={history.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={redoStack.length === 0}>
          Redo
        </button>
      </div>

      <div className="actions-btn">
        {[-100, -10, -1].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</span>
        {["+1", "+10", "+100"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default UndorableCount;
