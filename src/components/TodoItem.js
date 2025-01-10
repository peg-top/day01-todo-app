import React from 'react'

function TodoItem ({ todo, toggleTodo, deleteTodo }) {

    return (
        <li className='list-group-item'>
            <span
                style={{ color: todo.isCompleted ? 'red' : 'black' }}
                onClick={() => toggleTodo(todo.key)}
            >
                { todo.text }
            </span>
            <button
                className='btn btn-danger btn-sm'
                onClick={() => deleteTodo(todo.key)}
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem