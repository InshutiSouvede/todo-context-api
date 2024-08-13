import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/todoList";
import { nanoid } from "nanoid";

function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  function handleChange(event) {
    setTask(event.target.value);
  }
  const addTask = (event) => {
    event.preventDefault();
    if (task) {
      dispatch(addItem({ id: nanoid(), description: task, done: false }));
    }
  };

  return (
    <div>
      <form action="#" className="relative my-5">
        <input
          type="text"
          className="shadow-gray-400 shadow-md py-2 px-5 w-full text-gray-500 text-xl rounded-3xl"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={addTask}
          className="absolute top-2 right-5"
        >
          <img src="./circlePlus.svg" alt="add" />
        </button>
      </form>
    </div>
  );
}

export default Form;
