import React, {useState} from 'react'
import '../styling/ToDoWrapper.scss'
import {ToDoList} from './ToDoList'

export const ToDoWrapper = () => {

    const [singleTodo, setSingleTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) =>  {
        setSingleTodo(e.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setTodoList(todoList.concat(singleTodo))
        }
      }

    console.log(singleTodo)
    console.log(todoList)
    return (
        <div className="todo-container">
        <h2>Aufgabenliste</h2>
        <div className="todo-container__list-div">
            <input value={singleTodo} onChange={handleChange} onKeyPress={handleKeyPress} type="text"/>
            <ul>
                <ToDoList List={todoList}></ToDoList>
            </ul>
        </div>
        </div>
    )
}