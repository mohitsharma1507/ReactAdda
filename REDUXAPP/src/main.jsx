import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Store } from "./Store.jsx";
import { Provider } from "react-redux";
import Axios from "./Axios.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={Store}>
      <App />
    </Provider> */}
    {/* <Axios /> */}
    <App2 />
  </StrictMode>
);
