import React, { useMemo } from "react";

const Child1 = ({ str, marks }) => {
  console.log("child 1 called");

  const result = useMemo(() => {
    return (marks * 100) / 40;
  }, [marks]);

  return (
    <div>
      <h1>{str}</h1>
      <h1>Mrks is {result}</h1>
    </div>
  );
};

export default React.memo(Child1);
