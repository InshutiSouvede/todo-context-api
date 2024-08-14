import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { todoListContext } from "../features/todoListContext";

function Form() {
  const [task, setTask] = useState("");
  const {setTodoList} = useContext(todoListContext)
  
  function handleChange(event) {
    setTask(event.target.value);
  }
  
  function addTodoItem(event){
    event.preventDefault()
    if(task){
      const id = nanoid()
      setTodoList(prevList=>{
        return [...prevList,{id:id,description:task,done:false}]})
    }
    setTask('')
  }

  return (
    <div>
      <form className="relative my-5">
        <input
          type="text"
          className="shadow-gray-400 shadow-md py-2 px-5 w-full text-gray-500 text-xl rounded-3xl"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={(event)=>addTodoItem(event)}
          className="absolute top-2 right-5"
        >
          <img src="./circlePlus.svg" alt="add" />
        </button>
      </form>
    </div>
  );
}

export default Form;
