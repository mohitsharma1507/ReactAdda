import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onbuttonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Button onbuttonclick={onbuttonclick}></Button>
    </div>
  );
}

export default App;
