import React, { useState } from "react";
import Task from "./components/Task";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container">
      <Todo list={list} setList={setList} />
      <div className="container">
        {list.map((task, index) => (
          <Task task={task} index={index} setList={setList} list={list} />
        ))}
      </div>
    </div>
  );
}

export default App;
