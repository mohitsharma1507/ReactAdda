import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Aagai from "./count.jsx";
import Learn2 from "./Learn2.jsx";
import StopWatch from "./StopWatch.jsx";
import Data from "./Cards.jsx";
import Todo from "./Todo.jsx";
import AdvanceCount from "./AdvanceCount.jsx";
import CreateForm from "./Form.jsx";
import Ghar from "./home.jsx";
import { BioProvider } from "./context.jsx";
import Practice from "./Practice.jsx";
import Todo3 from "./Todo3.jsx";
import Attempt from "./Attempt.jsx";
import Kaam from "./practice456.jsx";
import { CountProvider } from "./practice45.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Aagai /> */}
    {/* <Learn2 /> */}
    {/* <StopWatch /> */}
    {/* <Data /> */}
    {/* <Todo /> */}
    {/* <AdvanceCount /> */}
    <CountProvider>
      <Kaam />
    </CountProvider>
    {/* <CreateForm /> */}
    {/* <Practice /> */}
    {/* <Todo3 /> */}
    {/* <Attempt /> */}
  </React.StrictMode>
);
