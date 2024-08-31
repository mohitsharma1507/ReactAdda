import { useSelector } from "react-redux";

const DisplayComponents = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value:{counterVal}</p>;
};

export default DisplayComponents;
