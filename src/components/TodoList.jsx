import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function TodoList() {
  const todoList = useSelector((state) => state.todoList.value);
  return (
    <div>
      <ul className="py-2 px-5 flex flex-col gap-8">
        {todoList.map((el) => {
          return (
            <TodoItem
              key={el.id}
              id={el.id}
              description={el.description}
              done={el.done}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
