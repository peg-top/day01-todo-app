import React, {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import TodoSetFilter from './components/TodoSetFilter'

function App() {

  const exapmle = [
    { key: 1, text: 'One', isCompleted: false },
    { key: 2, text: 'Two', isCompleted: false },
    { key: 3, text: 'Three', isCompleted: true },
    { key: 4, text: 'Four', isCompleted: false },
  ]

  const [todos, setTodos] = useState(exapmle)

  const [filter, setFilter] = useState('all')

  const addTodo = text => {
    setTodos([...todos, { key: new Date(), text: text, isCompleted: false}])
  }

  const toggleTodo = key => {
    setTodos(todos.map(todo => todo.key === key ? {...todo, isCompleted: !todo.isCompleted } : todo))
  }

  const deleteTodo = key => {
    setTodos(todos.filter(todo => todo.key !== key))
  }

  const addFilter = filter => {
    setFilter(filter)
  }


  return (
    <>
      <h1>Todo App</h1>
      <AddTodoForm addTodo ={ addTodo }/>
      <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} filter={filter}/>
      <TodoSetFilter filter={filter} addFilter={addFilter}/>
    </>
  )
}

export default App