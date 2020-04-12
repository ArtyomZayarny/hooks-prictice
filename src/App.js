import React, {useState, useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from './context'

export default function  App()  {
  const[todos,setTodo] = useState([]);
  const [todoTitle,setTodoTitle] = useState('');
  const addTodo = event => {
    if (event.key ===  'Enter') {
      setTodo([
        ...todos,
         {
           id:Date.now(),
           title:todoTitle,
           completed:false
          }])
      setTodoTitle('')
    }
 
  }

  useEffect( ()=> {
    let init = localStorage.getItem('todos') || JSON.stringify([]);
    setTodo(JSON.parse(init))
  },[]);

  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos))

  },[todos])

  const removeTodo = id => {
    setTodo(todos.filter( todo => todo.id !== id))
  }
  const toggleTodo = id => {
    setTodo(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

    return (
      <Context.Provider value={{
          removeTodo,toggleTodo
      }}>
        <div className="container">
          <h1>Todo app</h1>
            <div className="input-field">
              <input 
                value = {todoTitle}
                  type="text" 
                  onChange={ event => setTodoTitle(event.target.value)}
                  onKeyPress={addTodo}
                  />
              <label>Todo name</label>
            </div>
            <TodoList todos={todos} />
        </div>
      </Context.Provider>

    );
}