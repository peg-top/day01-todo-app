import React from 'react'
import { useTodos } from '../TodoContext'

function TodoItem ({ todo }) {

    const { toggleTodo, deleteTodo, changeEditedID } = useTodos()

    

    return (
        <li>
            <span
                style={{ color: todo.isCompleted ? 'red' : 'black' }}
                onClick={() => {
                    toggleTodo(todo.id)
                    changeEditedID(null)
                }}
            >
                { todo.text }
            </span>
            <button
                onClick={() => changeEditedID(todo.id)}
            >
                Edit
            </button>
            <button
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem