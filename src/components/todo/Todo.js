import React, { useEffect } from "react";
import "./Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <button
        className={`complete-btn ${todo.completed ? "buttoncompleted" : ""}`}
        onClick={completeHandler}
      ></button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button className="trash-btn" onClick={deleteHandler}>
        x
      </button>
    </div>
  );
};

export default Todo;
