import React, {useState} from 'react'
import '../styling/ToDoWrapper.scss'
import {ToDoList} from './ToDoList'
import firebase from '../utils/firebase.js'

export const ToDoWrapper = ({data}) => {

    const [singleTodo, setSingleTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) =>  {
        setSingleTodo(e.target.value);
    }

     //for Enter-Key
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setTodoList(todoList.concat(singleTodo))
        }
      }

      //for Button
    const addItem = () => {
        setTodoList(todoList.concat(singleTodo))
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            singleTodo, 
            complete: false,
        };
        todoRef.push(todo)
    }

    return (
        <div className="todo-container">
        <h2>Aufgabenliste</h2>
        <div className="todo-container__list-div">
            <input value={singleTodo} onChange={handleChange} onKeyPress={handleKeyPress} type="text"/>
            <button onClick={addItem}>Add</button>
            <ul>
                <ToDoList List={todoList}></ToDoList>
            </ul>
        </div>
        </div>
    )
}