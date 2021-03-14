import React from "react";
import BottomComponent from "../bottomcomponent/BottomComponent";
import Todo from "../todo/Todo";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, filteredTodos, setStatus }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.text}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
      {filteredTodos.length > 0 && (
        <BottomComponent
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      )}
    </div>
  );
};

export default TodoList;
