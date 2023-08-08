import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text , deleteToDo}) => {
  return (
    <div className='toDO ml-20 mb-3 bg-sky-600 text-white font-medium h-10 w-[80%] m-auto flex items-center p-2 justify-between'>
      <div className="text">{text}</div>
      <AiFillDelete className="icon bg-black text-red-500 hover:cursor-pointer" onClick={deleteToDo} />
    </div>
  )
}

export default ToDo
