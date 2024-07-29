import { nanoid } from 'nanoid'
import './App.css'

import TodoItem from './components/TodoItem'
import { useState } from 'react'

function App() {
  const [task,setTask] = useState('')
  const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem("tasks"))||[])
  function handleChange(event){
    setTask(event.target.value)
  }
  function removeItem(id){
    setTodoList(prevList=>{
      return prevList.filter((el)=>el.id!== id)
    })
    const storedTasks = localStorage.getItem("tasks")
    const updatedTasks = JSON.parse(storedTasks).filter((el)=>el.id!== id)
    localStorage.setItem("tasks",JSON.stringify(updatedTasks))
  }
  function cancelOutTask(event,id){
    
    setTodoList(prevList=>{
      return prevList.map((el)=>{
        if(el.id===id){
          el.done = event.target.checked
        }
        return el
      })
    })
    const storedTasks = localStorage.getItem("tasks")
    const updatedTasks = JSON.parse(storedTasks).map((el)=>{
      if(el.id===id){
        el.done = !el.done
      }
      return el
    })
    localStorage.setItem("tasks",JSON.stringify(updatedTasks))
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
    <div className='p-10 m-auto max-w-screen-lg'>
      <h1 className=' text-[100px] text-center text-gray-300'>todos</h1>
      <form action="#" className='relative my-5'>
        <input type="text"
         className='shadow-gray-400 shadow-md py-2 px-5 w-full text-gray-500 text-xl rounded-3xl'
        name='task'
         value={task}
         onChange={handleChange}
        />       
        <button type='submit' onClick={addTodoItem} className='absolute top-2 right-5'><img src="./circlePlus.svg" alt="add" /></button>
      </form>
      <ul className='py-2 px-5 flex flex-col gap-8'>
      {todoList.map((el)=>{
        return <TodoItem key={el.id} id={el.id} handleCancellation = {(event)=>cancelOutTask(event,el.id)} handleDeletion={()=>removeItem(el.id)} description={el.description} done={el.done}/>
      })}
      </ul>
      
    </div>
  )
}

export default App
