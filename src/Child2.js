import React from "react";

const Child2 = ({ str, marks }) => {
  console.log("child 2 called");
  return (
    <div>
      <h1>{str}</h1>
    </div>
  );
};

export default React.memo(Child2);
