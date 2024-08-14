import React, {useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { todoListContext } from "../features/todoListContext";


function Home() {
  const [todoList,setTodoList] = useState([])
  return (
    <div className="p-10 m-auto max-w-screen-lg">
      <h1 className=" text-[100px] text-center text-gray-300">todos</h1>
      <todoListContext.Provider value={{todoList,setTodoList}}>
      <Form />
      <TodoList />
      </todoListContext.Provider>
    </div>
  );
}

export default Home;
