import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  const handleGreen = () => {
    setColor("green");
  };

  const handleRed = () => {
    setColor("red");
  };

  const handleBlue = () => {
    setColor("blue");
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        padding: "2rem",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>Background Changer</h1>

      <div>
        <button onClick={handleGreen} style={{ margin: "0.5rem" }}>
          Green
        </button>
        <button onClick={handleRed} style={{ margin: "0.5rem" }}>
          Red
        </button>
        <button onClick={handleBlue} style={{ margin: "0.5rem" }}>
          Blue
        </button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
