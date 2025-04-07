import ProgressBar from "./components/ProgressBar";
import "./App.css";
import { useEffect, useState } from "react";

const App2 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => {
        if (val >= 100) {
          clearInterval(interval);
          return 100;
        }
        return val + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  );
};

export default App2;
