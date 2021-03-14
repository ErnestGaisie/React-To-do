import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/form/Form";
import TodoList from "./components/todolist/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>todos</h1>
      </header>
      <section className="todoapp">
        <section className="header">
          <Form
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setStatus={setStatus}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
          />
        </section>
        <section className="main">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            setStatus={setStatus}
          />
        </section>
      </section>
    </div>
  );
}

export default App;
