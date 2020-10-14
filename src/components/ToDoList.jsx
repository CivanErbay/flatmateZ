import React from "react";
import '../styling/ToDoList.scss'
import firebase from '../utils/firebase'

export const ToDoList = ({ todoList }) => {

  const deleteTodo = (id) => {
    const todoRef = firebase.database().ref("Todo").child(id)
    todoRef.remove()
  }

  const completeTodo = (id, completeState) => {
    const todoRef = firebase.database().ref("Todo").child(id)
    todoRef.update(
    {  complete: completeState}
    )
  }

  console.log(todoList)
  return (
    <>
      {todoList &&
        todoList.map((todo) => (
          <li key={todo.singleTodo}>
            <div>
              <p>{todo.singleTodo}</p>
              <div className="list-container">
              <div onClick={() => deleteTodo(todo.id)}> <img src="./images/delete.svg" style={{height: "6vh"}} alt=""/></div>
              <div onClick={() => completeTodo(todo.id, !todo.complete)}><img src="./images/done.svg" style={{height: "6vh"}} alt=""/></div>
              </div>
            </div>
          </li>
        ))}
    </>
  );
};
