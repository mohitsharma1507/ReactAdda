import { useSelector } from "react-redux";

const DisplayComponents = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value:{counter}</p>;
};

export default DisplayComponents;
