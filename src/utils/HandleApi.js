import axios from 'axios'

const baseUrl = "https://fullstack-task-tracker-backend.onrender.com"

const getAllToDo = (setToDo) =>{
    axios.get(baseUrl)
    .then(({data})=>{
        setToDo(data)
    })
    .catch((err)=>console.log(err))
}

const addToDo = (text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

const deleteToDo = (_id,setToDo)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    }).catch((err)=>{
        console.log(err)
    })
}

export {getAllToDo , addToDo , deleteToDo}