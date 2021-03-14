import React, { useState } from "react";
import "./Form.css";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  filteredTodos,
  setFilteredTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() },
      ]);
    }

    setInputText("");
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  const greaterThanHandler = () => {
    let counter = 0;

    todos.forEach((item) => {
      if (item.completed) {
        counter = counter + 1;
      }
    });

    // if (counter === todos.length - 1) {
    //   console.log(`Counter : ${counter} Lenght : ${todos.length}`);

    if (counter === todos.length) {
      console.log(todos);
      setTodos(
        todos.map((item) => {
          return {
            ...item,
            completed: false,
          };
        })
      );
    }
    if (counter < todos.length && counter > 0) {
      console.log(todos);
      setTodos(
        todos.map((item) => {
          return {
            ...item,
            completed: true,
          };
        })
      );
    }
    if (counter === 0) {
      console.log(todos);
      setTodos(
        todos.map((item) => {
          return {
            ...item,
            completed: true,
          };
        })
      );
    }
  };

  return (
    <div className="div-form">
      {todos.length > 0 && (
        <button className="greaterthan" onClick={greaterThanHandler}>
          ❯
        </button>
      )}

      <form className="form">
        <input
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
          placeholder="What needs to be done?"
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        {/* <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
      </form>
    </div>
  );
};

export default Form;
