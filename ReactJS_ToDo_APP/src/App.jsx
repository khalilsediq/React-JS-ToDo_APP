/*
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
*/

import { react, khalilState, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}` );

    todo.push({
      title,
      description,
    });
    setTodo([...todo]);

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h1>Hello World + ToDo APP</h1>
      <form onSubmit={addTodo} action="">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter Your title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Your Description"
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default App;
