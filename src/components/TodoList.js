import Reactб, { useState } from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '../TodoContext'
import TodoEditedItem from './TodoEditedItem'

function TodoList () {

    const { todos, filter, todoEditedID } = useTodos()

    const filteredTodos = todos.filter(todo => {
        if (filter == 'completed') { return todo.isCompleted }
        if (filter == 'uncompleted') { return !todo.isCompleted }
        return true
    })
    
    return (
        <ul>
            { filteredTodos.map(todo => {
                return (
                    todo.id === todoEditedID ? 
                    <TodoEditedItem 
                        key = {todo.id}
                        todo = {todo}
                    />
                    :
                    <TodoItem
                        key = {todo.id}
                        todo = {todo}
                    />

                )
        })}
        </ul>
    )
}

export default TodoList