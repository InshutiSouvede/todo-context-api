import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoListContext } from "../features/todoListContext";
function TodoList() {
  const {todoList} = useContext(todoListContext)
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
