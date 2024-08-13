import React, { useState } from 'react';

function Form(props) {
    const [task,setTask] = useState('')
function handleChange(event){
    setTask(event.target.value)
  }
  function addTodoItem(){
    if(task){
      const id = nanoid()
      let tasks = JSON.parse(localStorage.getItem("tasks"))
      if(!tasks){
        tasks = [{id:id,description:task,done:false}]
      }else{tasks.push({id:id,description:task,done:false})}

      localStorage.setItem("tasks",JSON.stringify(tasks))
      setTodoList(prevList=>{
        return [...prevList,{id:id,description:task,done:false}]})
    }
    setTask('')
  }
    return (
        <div>
            <form action="#" className='relative my-5'>
        <input type="text"
         className='shadow-gray-400 shadow-md py-2 px-5 w-full text-gray-500 text-xl rounded-3xl'
        name='task'
         value={task}
         onChange={handleChange}
        />       
        <button type='submit' onClick={addTodoItem} className='absolute top-2 right-5'><img src="./circlePlus.svg" alt="add" /></button>
      </form>
        </div>
    );
}

export default Form;