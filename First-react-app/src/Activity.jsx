import { Activity, useState } from "react";
import Counter from "./Counter";

function Activities() {
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Daliy Counter</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>

      {/* {show && <Counter />} */}

      <Activity mode={show ? "visible" : "hidden"}>
        <Counter />
      </Activity>
    </>
  );
}

export default Activities;
