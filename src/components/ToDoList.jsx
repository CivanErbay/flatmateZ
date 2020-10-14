import React from 'react'

export const ToDoList = ({todoList}) => {
    return (
        <>
        {todoList && todoList.map(todo => 
            <li key={todo.singleTodo}>{todo.singleTodo}</li>)}
        </>
    )
}