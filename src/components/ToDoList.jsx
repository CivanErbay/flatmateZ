import React from "react";
import '../styling/ToDoList.scss'

export const ToDoList = ({ todoList }) => {
  return (
    <>
      {todoList &&
        todoList.map((todo) => (
          <li key={todo.singleTodo}>
            <div style={{border: "solid"}}>
              <p>{todo.singleTodo}</p>
            </div>
          </li>
        ))}
    </>
  );
};
