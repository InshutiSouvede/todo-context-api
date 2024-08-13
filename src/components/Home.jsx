import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
function Home(props) {
  return (
    <div className="p-10 m-auto max-w-screen-lg">
      <h1 className=" text-[100px] text-center text-gray-300">todos</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default Home;
