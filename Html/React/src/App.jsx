import { useState } from "react"
import "./style.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  

  return (
  
    <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul>
      <li>
        <label>Doc
          <input type="checkbox"/>
        </label>
        <button className="danger">delete</button>
      </li>
      <li>
        <label>Doc
          <input type="checkbox"/>
        </label>
        <button className="danger">delete</button>
      </li>
    </ul>
    </>
  )  
  }