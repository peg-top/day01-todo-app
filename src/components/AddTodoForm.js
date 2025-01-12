import React, { useState } from 'react'
import { useTodos } from '../TodoContext'

function AddTodoForm () {

    const [text, setText] = useState('')
    
    const { addTodo } = useTodos()

    const handleSubmit = (e) => {  
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} placeholder='Add a new task'
                onChange={e => {setText(e.target.value)}}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddTodoForm
