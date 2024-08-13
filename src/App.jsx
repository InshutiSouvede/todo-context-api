import { nanoid } from 'nanoid'
import './App.css'

import TodoItem from './components/TodoItem'
import { useState } from 'react'
import Form from './components/Form'

function App() {
  
  const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem("tasks"))||[])
  
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
  
  return (
    <div className='p-10 m-auto max-w-screen-lg'>
      <h1 className=' text-[100px] text-center text-gray-300'>todos</h1>
     <Form />
      <ul className='py-2 px-5 flex flex-col gap-8'>
      {todoList.map((el)=>{
        return <TodoItem key={el.id} id={el.id} handleCancellation = {(event)=>cancelOutTask(event,el.id)} handleDeletion={()=>removeItem(el.id)} description={el.description} done={el.done}/>
      })}
      </ul>
      
    </div>
  )
}

export default App
