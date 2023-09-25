import { TodoItem } from "./TodoItem"

export function TodoList({todo, toggleTodo, deleteTodo}){
    return(<ul>
      {todo.length === 0 && "No todos"}
      {todo.map(todos =>{
        return (
        <TodoItem
        {...todos}
        key={todos.id}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        />
        )
      })}
      </ul>)
}