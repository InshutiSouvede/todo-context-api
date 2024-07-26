import { useState } from "react"

export default function TodoItem(props){
    const [done,setDone] = useState(false)
    console.log("These the props")
    return (
        <div  className={`flex gap-5 text-gray-500 text-2xl ${done?"line-through":""}`}>
        <input type="checkbox" id={props.id} name={props.name?props.name:"todoItem"} value={props.description} />
        <label onClick={()=>setDone(prev=>!prev)} htmlFor={props.id}>{props.description}</label>
        </div>
    )
}