// import { useState } from "react";
import React, { useState } from "react";

const App = () => {
  const [num, useNum] = useState(0);

  const addCounter = () => {
    useNum(num + 1);
    console.log("Adding Num", num);
  };
  const lessCounter = () => {
    if (num === 0) {
      alert("You alerady At 0")
      
    }
    else{
      useNum(num - 1)
    }
    console.log("lessing your", {num} );
    
  };

  return (
    <>
      <h1>Counter App {num}</h1>
      <button onClick={addCounter}>+</button>
      <button onClick={lessCounter}>-</button>
    </>
  );
};

export default App;
