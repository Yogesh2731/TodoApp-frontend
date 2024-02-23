import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { FaAngleRight } from "react-icons/fa";

const Todo = ({Title, updateMode, deleteTodo}) => {
  return (
    <div className="todo">
        <FaAngleRight className="li-icon icon" />
        <div className="Title">{Title}</div>
        <div className="icons">
            <BiEdit className="icon" onClick = {updateMode} />
            <AiFillDelete className="icon" onClick = {deleteTodo} />
        </div>
    </div>
  )
}

export default Todo


/*
const addTodo = (todoID, Title, setTodo, setTitle, setIsUpdating) =>{
    axios.post(`${baseurl}/update`, {_id:todoID,Title})
    .then(({data}) => {
        setTitle("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) =>console.log(err));
}
*/ 