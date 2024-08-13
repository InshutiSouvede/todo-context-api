import { nanoid } from "nanoid";
import "./App.css";

import TodoItem from "./components/TodoItem";
import { useState } from "react";
import Form from "./components/Form";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todoList";
import TodoList from "./components/TodoList";
const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function cancelOutTask(event, id) {
    setTodoList((prevList) => {
      return prevList.map((el) => {
        if (el.id === id) {
          el.done = event.target.checked;
        }
        return el;
      });
    });
    const storedTasks = localStorage.getItem("tasks");
    const updatedTasks = JSON.parse(storedTasks).map((el) => {
      if (el.id === id) {
        el.done = !el.done;
      }
      return el;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <Provider store={store}>
      <div className="p-10 m-auto max-w-screen-lg">
        <h1 className=" text-[100px] text-center text-gray-300">todos</h1>
        <Form />
        <TodoList />
       
      </div>
    </Provider>
  );
}

export default App;
