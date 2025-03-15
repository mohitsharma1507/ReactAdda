import { useContext } from "react";
import { bioContext } from "./context";

function Ghar() {
  const { myName, myAge } = useContext(bioContext);
  return (
    <h1>
      hello {myName} now u are {myAge} yrs old .
    </h1>
  );
}

export default Ghar;
