import axios from 'axios'


const baseurl = "https://todoapp-backend-uccx.onrender.com"

const getAllTodo = (setTodo) => {
    axios.get(baseurl)
    .then(({data}) => {
        console.log(`data------> `, data);
        setTodo(data)
    })
    .catch((err) =>console.log(err));
}

const addTodo = (Title, setTitle, setTodo) =>{
    axios.post(`${baseurl}/save`, {Title})
    .then(({data}) => {
        console.log(data);
        setTitle("")
        getAllTodo(setTodo)
    })
    .catch((err) =>console.log(err));
}

const updateTodo = (todoID, Title, setTodo, setTitle, setIsUpdating) =>{
    axios.post(`${baseurl}/update`, {_id:todoID,Title})
    .then(({data}) => {
        setTitle("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) =>console.log(err));
}

const deleteTodo = (_id, setTodo) =>{
    axios.post(`${baseurl}/delete`, {_id})
    .then(({data}) => {
        console.log(data);
        getAllTodo(setTodo)
    })
    .catch((err) =>console.log(err));
}

export{getAllTodo, addTodo, updateTodo, deleteTodo}