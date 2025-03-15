import { useRef } from "react";

function Learn2() {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(`U click that button ${ref.current} time.. `);
  };
  return <button onClick={handleClick}>CLICK ME</button>;
}
export default Learn2;
