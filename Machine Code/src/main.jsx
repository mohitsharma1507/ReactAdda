import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Employee from "./components/Employee Database Management.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <App2 /> */}
  </StrictMode>
);
