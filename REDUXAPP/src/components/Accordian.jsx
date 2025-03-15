import { useEffect, useState } from "react";
import faq from "../Api/faq.json";
import "../components/Accordian.css";
import { Faq } from "../ui/Faq";

const Accordian = () => {
  const [data, setData] = useState([]);
  const [isActiveId, setIsActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setIsActiveId((prevId) => (prevId === id ? false : id));
  };
  return (
    <>
      <h1>The Accordion </h1>
      <ul className="section-accordion">
        {data.map((currElem) => {
          return (
            <Faq
              key={currElem.id}
              currData={currElem}
              isActive={isActiveId === currElem.id}
              onToggle={() => handleButton(currElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Accordian;
