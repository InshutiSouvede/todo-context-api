import { useContext } from "react";
import { todoListContext } from "../features/todoListContext";

export default function TodoItem(props) {
  const { setTodoList } = useContext(todoListContext);

  function removeItem(id) {
    setTodoList((prevList) => {
      return prevList.filter((el) => el.id !== id);
    });
  }
  function cancelOutTask(event, id) {
    setTodoList((prevList) => {
      return prevList.map((el) => {
        if (el.id === id) {
          el.done = event.target.checked;
        }
        return el;
      });
    });
  }
  return (
    <div
      className={`flex justify-between text-gray-500 text-2xl ${
        props.done ? "line-through" : ""
      }`}
    >
      <div className="flex gap-5 items-center">
        <input
          onChange={(event)=>cancelOutTask(event,props.id)}
          checked={props.done}
          type="checkbox"
          className=""
          id={props.id}
          name={props.name ? props.name : "todoItem"}
        />
        <label htmlFor={props.id}>{props.description}</label>
      </div>
      <div
        onClick={()=>removeItem(props.id)}
        className="cursor-pointer bg-gray-200  w-10 h-10 rounded-3xl"
      >
        <img className="m-auto mt-2" src="./trash.svg" alt="trash" />
      </div>
    </div>
  );
}
