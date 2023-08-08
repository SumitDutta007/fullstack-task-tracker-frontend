import { useEffect, useState } from 'react';
import ToDo from './components/ToDo'
import { getAllToDo , addToDo ,deleteToDo} from './utils/HandleApi';

function App() {

  const [toDo , setToDo] = useState([])
  const [text,setText] = useState("")

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  return (
  <div className="app bg-blue-100 h-screen">
    <div className="top">
      <h1 className="text-4xl font-bold bg-blue-400 h-20 flex justify-center items-center mb-8">Task Tracker</h1>
      
      <form className="flex flex-col justify-center items-center text-lg">
        <label htmlFor="taskInput" className="font-bold">Enter Your Task</label>
        <div>
          <input value={text} onChange={(e)=>setText(e.target.value)} type="text" name="taskInput" placeholder="ToDo" className="border border-sky-500 mx-3 ml-10 rounded pl-1"/>
          <button className="bg-sky-400 rounded-lg h-8 w-12" onClick={()=>addToDo(text,setText,setToDo)}>Add</button>
        </div>
      </form>
    </div>
    <div className="tasks">
      <h1 className="text-4xl font-bold ml-16 mt-10 mb-3">Task List</h1>
      <div className="h-1 w-[95vw] bg-slate-600 m-auto mb-4"></div>
      <div className="list">
        {toDo.map((item)=>{
           return <ToDo key={item._id} text={item.text} deleteToDo={()=>deleteToDo(item._id , setToDo)}/>
        })}
      </div>
    </div>
  </div>  
  );
}

export default App;
