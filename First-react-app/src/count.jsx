import { useEffect, useState } from "react";

function Aagai() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      alert("HELLO BHAII");
    }, 1000);
  }, []);
  const handleOnclick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>BUTTON KO THOD DO NIMBO KAI JAISE NICHODO :{count}</h1>
      <button onClick={handleOnclick}>+1</button>
    </>
  );
}

export default Aagai;
