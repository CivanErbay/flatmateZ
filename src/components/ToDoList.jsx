import React from 'react'

export const ToDoList = ({List}) => {
    return (
        <>
        {List.map(todo => 
            <li>{todo}</li>)}
        </>
    )
}