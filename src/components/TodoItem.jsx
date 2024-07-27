import { useState } from "react"

export default function TodoItem(props){
    const [done,setDone] = useState(false)
    function cancelOutTask(){
        console.log("toggle task done for ",props.id)
        setDone(prev=>!prev)
    }
    return (
        <div  className={`flex justify-between text-gray-500 text-2xl ${props.done?"line-through":""}`}>
            <div className="flex gap-5 items-center">
            <input onChange={props.handleCancellation} checked={props.done} type="checkbox" className="" id={props.id} name={props.name?props.name:"todoItem"} value={props.description} />
            <label htmlFor={props.id}>{props.description}</label>
            </div>
            <div onClick={props.handleDeletion} className="cursor-pointer bg-gray-200  w-10 h-10 rounded-3xl">
            <img className="m-auto mt-2"  src="./trash.svg" alt="trash" />
            </div>
            
        </div>
    )
}