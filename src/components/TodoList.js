import React from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '../TodoContext'

function TodoList () {

    const { todos, filter } = useTodos()

    const filteredTodos = todos.filter(todo => {
        if (filter == 'completed') { return todo.isCompleted }
        if (filter == 'uncompleted') { return !todo.isCompleted }
        return true
    })
    
    return (
        <ul className='list-group'>
            {filteredTodos.map(todo => (
                <TodoItem
                    key = {todo.key}
                    todo = {todo}
                />
            ))}
        </ul>
    )
}

export default TodoList