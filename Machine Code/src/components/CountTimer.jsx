import { useEffect, useState } from "react";

const CountTimer = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [initialTime, setInitialTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (time.hr > 0 || time.min > 0 || time.sec > 0)) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          let { hr, min, sec } = prevTime;
          if (sec > 0) {
            sec -= 1;
          } else if (min > 0) {
            min -= 1;
            sec = 59;
          } else if (hr > 0) {
            hr -= 1;
            min = 59;
            sec = 59;
          }
          return { hr, min, sec };
        });
      }, 1000);
    } else if (time.hr === 0 && time.min === 0 && time.sec === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  //  Start Timer
  const handleStart = () => setIsRunning(true);

  //  Restart (Reset to initial time)
  const handleRestart = () => {
    setTime({ hr: 0, min: 0, sec: 0 }); // Reset to original values
    setIsRunning(false);
  };

  //  Stop (Pause Timer)
  const handleStop = () => setIsRunning(false);

  //  Handle Input Changes
  const handleChange = (e) => {
    let { name, value } = e.target;
    value = Math.max(0, parseInt(value) || 0);
    setTime((prev) => ({ ...prev, [name]: value }));
    setInitialTime((prev) => ({ ...prev, [name]: value })); // Store initial time
  };

  return (
    <div className="container">
      <h1 style={{ fontWeight: "800" }}>BHARAT CLOCK SERVICE</h1>
      <div className="Clock-Area">
        <p className="hour">Hr</p>
        <p className="hour">Min</p>
        <p className="hour">Sec</p>
      </div>
      <div className="Clock-Field">
        <input
          type="number"
          name="hr" // Added name attribute
          value={time.hr}
          onChange={handleChange}
          placeholder="00"
          disabled={isRunning}
        />
        :
        <input
          type="number"
          name="min"
          value={time.min}
          onChange={handleChange}
          placeholder="00"
          disabled={isRunning}
        />
        :
        <input
          type="number"
          name="sec"
          value={time.sec}
          onChange={handleChange}
          placeholder="00"
          disabled={isRunning}
        />
      </div>

      <div className="switch">
        <button
          onClick={handleStart}
          className="btn-start"
          style={{
            backgroundColor: "green",
            color: "white",
            width: "90px",
            borderRadius: "1rem",
          }}
        >
          Start
        </button>
        <button
          onClick={handleRestart}
          className="btn-restart"
          style={{
            backgroundColor: "yellow",
            color: "black",
            width: "90px",
            borderRadius: "1rem",
          }}
        >
          Restart
        </button>
        <button
          onClick={handleStop}
          className="btn-stop"
          style={{
            backgroundColor: "red",
            color: "white",
            width: "90px",
            borderRadius: "1rem",
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default CountTimer;
