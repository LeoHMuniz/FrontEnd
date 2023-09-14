import { useState } from "react"
import { TodoNewForm } from "./TodoNewForm"
import { TodoList } from "./TodoList"
import "./style.css"

export default function App(){

  const [todo, setNewTodo] = useState([])
  function addTodos(title){
    setNewTodo(currentTodo=>{
      return [
        ...currentTodo,{id: crypto.randomUUID(),title,completed:false},
      ]
    })
  }
function toggleTodo(id, completed){
  setNewTodo(currentTodo=>{
    return currentTodo.map(todos=>{
    if (todos.id===id){
      return {...todos, completed}
    }
    return todos
  })
  })
}
function deleteTodo(id){
  setNewTodo(currentTodo=>{
    return currentTodo.filter(todos=> todos.id !== id)
  })
}
  return (
  
    <>
    <TodoNewForm onSubmit={addTodos}/>
    <h1 className="header">Todo List</h1>
    <TodoList todo={todo}/>
    </>
  )  
  }