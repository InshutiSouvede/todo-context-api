export default function TodoItem(props){
    return (
        <>
        <label htmlFor={props.id}>{props.description}</label>
        <input type="checkbox" id={props.id} name={props.name?props.name:"todoItem"} />
        </>
    )
}