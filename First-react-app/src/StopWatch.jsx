import { useState, useRef } from "react";

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (isPaused) {
      const offset = Date.now() - now;
      setStartTime((perviousTime) => perviousTime + offset);
      setIsPaused(false);
    } else {
      setStartTime(Date.now());
      setNow(Date.now());
    }
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  };
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setStartTime(0);
    setNow(0);
    setIsPaused(false);
  };

  let passOut = 0;
  if (startTime != null && now != null) {
    passOut = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>UR TIME PASSED :{passOut.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
export default StopWatch;
