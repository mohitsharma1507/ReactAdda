import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../App.css";

function BarGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const url =
          "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
        const res = await fetch(url);
        const text = await res.text();
        const numbers = text.split("\n").filter(Boolean);

        const freqMap = numbers.reduce((acc, num) => {
          acc[num] = (acc[num] || 0) + 1;
          return acc;
        }, {});

        // Format for Recharts
        const formattedData = Object.entries(freqMap).map(([num, count]) => ({
          number: num,
          count,
        }));

        setData(formattedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchNumbers();
  }, []);

  return (
    <div className="App">
      <h2>Random Number Frequency</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="number"
            label={{ value: "Number", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            label={{ value: "Count", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
