import { useEffect, useRef, useState } from "react";
import "../App.css";

const LoginOtp = () => {
  const [inputs, setInputs] = useState(Array(4).fill(""));
  const [missing, setMissing] = useState([]);
  const refs = useRef([]);

  const CODE = "1234";

  useEffect(() => refs.current[0]?.focus(), []);

  const handleChange = (e, i) => {
    const val = e.target.value;
    if (!/^\d$/.test(val)) return;

    const newInputs = [...inputs];
    newInputs[i] = val;
    setInputs(newInputs);

    if (i < 3) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      const newInputs = [...inputs];
      newInputs[i] = "";
      setInputs(newInputs);

      if (i > 0) refs.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d{4}$/.test(data)) return;

    setInputs(data.split(""));
    refs.current[3]?.focus();
  };

  const handleSubmit = () => {
    const missed = inputs
      .map((v, i) => (v === "" ? i : null))
      .filter((v) => v !== null);
    setMissing(missed);

    if (!missed.length)
      alert(inputs.join("") === CODE ? "Code is Valid" : "Code is not Valid");
  };

  return (
    <div className="container">
      <h1>Enter OTP</h1>
      <div>
        {inputs.map((val, i) => (
          <input
            key={i}
            ref={(el) => (refs.current[i] = el)}
            type="text"
            maxLength="1"
            value={val}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            className={missing.includes(i) ? "error" : ""}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginOtp;
