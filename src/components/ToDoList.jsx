import React from 'react'

export const ToDoList = ({List}) => {
    return (
        <>
        {List.map(todo => 
            <li key={todo}>{todo}</li>)}
        </>
    )
}