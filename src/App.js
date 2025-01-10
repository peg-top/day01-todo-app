import React, {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import TodoSetFilter from './components/TodoSetFilter'
import { TodoProvider } from './TodoContext'

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <TodoProvider>
        <AddTodoForm />
        <TodoList />
        <TodoSetFilter />
      </TodoProvider>
    </>
  )
}

export default App