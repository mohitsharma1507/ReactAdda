import { useEffect, useState } from "react";

const EMI = () => {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    let r = interest;
    if (principal && r && year) {
      r = r / 12 / 100;
      const calcPow = Math.pow(1 + r, year * 12);
      const amount = principal * ((r * calcPow) / (calcPow - 1));
      setEmi(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, []);
  return (
    <div className="container">
      <h1>MORTGAGE CALCULATOR</h1>
      <div
        className="mainContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "32px",
          backgroundColor: "white",
        }}
      >
        <label htmlFor="principal">Principal</label>
        <input
          type="Number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          name="principal"
          id="principal"
        />
        <label htmlFor="interest">Interest</label>
        <input
          type="Number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          name="interest"
          id="interest"
        />
        <label htmlFor="year">Years</label>
        <input
          type="Number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          name="year"
          id="year"
        />

        <p> Your EMI is {emi}</p>
      </div>
    </div>
  );
};
export default EMI;
