import React from 'react'
import TodoItem from './TodoItem'

function TodoList ({ todos, filter, toggleTodo, deleteTodo}) {

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
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList