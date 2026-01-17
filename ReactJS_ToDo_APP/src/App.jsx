// import { useState } from "react";
import React, { useState } from "react";

const App = () => {
  const [num, useNum] = useState(0);

  const addCounter = () => {
    useNum(num + 1);
    console.log(num);
  };
  const lessCounter = () => {
    useNum(num - 1);
    console.log(num);
  };

  return (
    <>
      <h1>ToDo App 0</h1>
      <button onClick={addCounter}>+</button>
      <button onClick={lessCounter}>-</button>
    </>
  );
};

export default App;
