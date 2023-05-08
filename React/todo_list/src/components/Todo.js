import React from "react";

const Todo = (props) => {
  const { list, setList } = props;

  let task = {
    name: "",
    isComplete: false,
  };

  const onChange = (e) => {
    task.name = e.target.value;
  };

  const onClick = (e) => {
    setList([...list, task]);
  };

  return (
    <div className="container">
      <h1 className="display">To Do List</h1>
      <input className="form" type="text" name="task" onChange={onChange} />
      <button className="btn" onClick={onClick}>
        Add Task
      </button>
    </div>
  );
};

export default Todo;
