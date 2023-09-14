import {userState} from "react"

export function TodoList({todo}){
    return(<ul>
      {todo.length === 0 && "No todos"}
      {todo.map(todos =>{
        return (<li key={todos.id}>
        <label>  
          <input 
          type="checkbox"
          checked={todos.completed}
          onChange={e=>toggleTodo(todos.id, e.target.checked)}
          />
          {todos.title}
          </label>
        <button onClick={()=>deleteTodo(todos.id)} className="danger">delete</button>
      </li>
        )
      })}
      </ul>)
}