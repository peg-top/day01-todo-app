import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

export function TodoProvider ({ children }) {

    const exapmle = [
        { id: 1, text: 'One', isCompleted: false },
        { id: 2, text: 'Two', isCompleted: false },
        { id: 3, text: 'Three', isCompleted: true },
        { id: 4, text: 'Four', isCompleted: false },
      ]
    
      const [todos, setTodos] = useState(exapmle)
    
      const [filter, setFilter] = useState('all')


      const [todoEditedID, setEditTodoID] = useState(1)

  
      const addTodo = text => {
        setTodos([...todos, { id: new Date(), text: text, isCompleted: false}])
      }
    
      const toggleTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo))
      }
    
      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    
      const addFilter = filter => {
        setFilter(filter)
      }

      const changeEditedID = id => {
        setEditTodoID(id)
    }

      const editTodo = (id, newText) => {
          
          setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo))
          changeEditedID(null)
        }
      
    


    return(
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, addFilter, filter, todoEditedID, changeEditedID, editTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)