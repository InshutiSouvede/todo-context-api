export default function TodoItem(props){
    return (
        <div className="flex gap-5 text-gray-500 text-2xl">
        <input type="checkbox" id={props.id} name={props.name?props.name:"todoItem"} value={props.description} />
        <label htmlFor={props.id}>{props.description}</label>
        </div>
    )
}