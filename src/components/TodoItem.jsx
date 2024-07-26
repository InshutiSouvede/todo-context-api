import { useState } from "react"

export default function TodoItem(props){
    const [done,setDone] = useState(false)
    console.log("These the props")
    return (
        <div  className={`flex justify-between text-gray-500 text-2xl ${done?"line-through":""}`}>
            <div className="flex gap-5">
            <input type="checkbox" id={props.id} name={props.name?props.name:"todoItem"} value={props.description} />
            <label onClick={()=>setDone(prev=>!prev)} htmlFor={props.id}>{props.description}</label>
            </div>
            <div className="bg-gray-200 w-max py-3 px-4 rounded-3xl">
            <img src="./trash.svg" alt="trash" />
            </div>
            
        </div>
    )
}