import React from "react";
import Folder from "./folder";
import { files } from "../data/data";

const TreeFolder = () => {
  return (
    <div
      className="App"
      style={{
        textAlign: "left",
        marginLeft: "50px",
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
      }}
    >
      <h1>Vs code Folder Structure</h1>
      <Folder files={files} />
    </div>
  );
};

export default TreeFolder;
