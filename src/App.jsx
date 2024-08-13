import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todoList";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
function App() {
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
