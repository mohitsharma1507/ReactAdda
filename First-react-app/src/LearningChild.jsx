import React from "react";

const LearningChild = (props) => {
  console.log("Child Render");
  return (
    <div>
      <h2>Heaving Child Component</h2>
      <p>Title: {props.title}</p>
    </div>
  );
};

export default React.memo(LearningChild);
