import React, { useEffect } from "react";
import "./BottomComponent.css";

const BottomComponent = ({ setStatus, filteredTodos, setTodos, todos }) => {
  const onClickHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === document.querySelectorAll(".filter")[0]) {
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.toggle("selected");

        setStatus(String(e.target.textContent).toLowerCase());
      }
      if (e.target === document.querySelectorAll(".filter")[1]) {
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.toggle("selected");

        setStatus("uncompleted");
      }
      if (e.target === document.querySelectorAll(".filter")[2]) {
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.toggle("selected");

        setStatus(String(e.target.textContent).toLowerCase());
      }
    });
  }, [setStatus]);

  const clearHandler = () => {
    setTodos(todos.filter((item) => item.completed !== true));
  };

  return (
    <div className="bottom">
      <p>
        {filteredTodos.reduce((a, b) => {
          if (b.completed === false) {
            a = a + 1;
          }
          return a;
        }, 0)}{" "}
        item left
      </p>
      {/* <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select> */}

      <ul className="bottomlist">
        <li className="filter selected" data-value="all">
          All
        </li>
        <li className="filter" data-value="active" onClick={onClickHandler}>
          Active
        </li>
        <li className="filter" data-value="completed" onClick={onClickHandler}>
          Completed
        </li>
      </ul>

      <a onClick={clearHandler} className="clear">
        Clear Completed
      </a>
    </div>
  );
};

export default BottomComponent;
