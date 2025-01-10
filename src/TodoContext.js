import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

export function TodoProvider ({ children }) {

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
        console.log('Current filter:', filter); 
        setFilter(filter)
        console.log('New filter:', filter); 
      }


    return(
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, addFilter, filter }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)