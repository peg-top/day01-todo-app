import React, { useState } from 'react'

function AddTodoForm ({ addTodo }) {

    const [text, setText] = useState('')

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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTodoForm
