import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";


function App() {

  const [todo, setTodo] = useState([])
  const [Title, setTitle] = useState("")
  const [isUpdating, setIsUpdating] = useState(false) 
  const [todoID, setTodoID] = useState("")



  useEffect(() => (
    getAllTodo(setTodo)
  ), [])

  const updateMode = (_id, Title) => {
    setIsUpdating(true)
    setTitle(Title)
    setTodoID(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input type="text" 
          placeholder="Add Todos Here...." 
          value={Title}
          onChange={(e)=> setTitle(e.target.value)}
          />
          <div 
          className="add" 
          onClick={isUpdating ? 
          () =>updateTodo(todoID, Title, setTodo, setTitle, setIsUpdating) 
          : () => addTodo(Title, setTitle, setTodo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => <Todo 
          key={item._id} 
          Title={item.Title} 
          updateMode = {() => updateMode(item._id, item.Title)} 
          deleteTodo = {() => deleteTodo(item._id, setTodo)} />)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
