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
  const [mytodo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);

    mytodo.push({
      title,
      description,
    });
    setTodo([...mytodo]);

    setTitle("");
    setDescription("");
  };

  const deletTodo = (index) => {
    console.log("Delete ToDo", index);
    mytodo.splice(index, 1);
    setTodo([...mytodo]);
  };

  const editTodo = (index) => {
    console.log("Todo Edite", index);
    const edt = prompt("Update Your ToDO", mytodo[index].title);
    mytodo[index].title = edt;
    setTodo([...mytodo]);
  };

  return (
    <>
      <h1>Hello World + ToDo APP</h1>
      <form onSubmit={addTodo}>
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

      <div>
        {mytodo.length > 0 ? (
          mytodo.map((item, index) => {
            return (
              <div key={index}>
                <h1>No {index + 1} </h1>
                <p>Title: {item.title}</p>
                <p>Description: {item.description}</p>
                <button
                  onClick={() => {
                    editTodo(index);
                  }}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  onClick={() => {
                    deletTodo(index);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            );
          })
        ) : (
          <h1>No Todo Found </h1>
        )}
      </div>
    </>
  );
}

export default App;
