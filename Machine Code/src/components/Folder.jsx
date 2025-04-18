import React, { useState } from "react";
import "./Folder.css";

export default function Folder({ files }) {
  const [expand, setExpand] = useState(false);

  return (
    <div style={{ marginLeft: 20 }}>
      <div onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
        {files.isFolder ? (
          <span>
            <button className="folder-btn">{expand ? "▼" : "▶"}</button>{" "}
            <strong>{files.name}</strong>
          </span>
        ) : (
          <span>📄 {files.name}</span>
        )}
      </div>

      {files.isFolder && expand && (
        <div>
          {files.children.map((child, index) => (
            <Folder key={index} files={child} />
          ))}
        </div>
      )}
    </div>
  );
}
