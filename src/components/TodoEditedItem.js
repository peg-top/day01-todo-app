import React, { useState } from 'react'
import { useTodos } from '../TodoContext'

function TodoEditedItem ({ todo }) {

    const { toggleTodo, deleteTodo, editTodo } = useTodos()

    const [text, setText] = useState(todo.text)

    const handleSubmit = (e) => {  
        e.preventDefault()
        if (text.trim()) {
            editTodo(todo.id, text)
        }
    }


    return (
        <li>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                onChange={e => {setText(e.target.value)}}

            />
            <button type='submit'>Submit</button>
            </form>
        </li>
    )
}

export default TodoEditedItem