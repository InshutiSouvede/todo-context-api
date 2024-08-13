import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todoList";
import Home from "./components/Home";
const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
