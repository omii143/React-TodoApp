import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import EmptyMessage from "./components/EmptyMessage";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-app-store";
import Container from "./components/Container";
import { useContext, useState } from "react";

const AppContent = () => {
  const { todoItems } = useContext(TodoItemsContext);

  const total = todoItems.length;
  const completed = todoItems.filter(item => item.isCompleted).length;

  return (
    <center>
      <AppName />
      <AddTodo />
      <p className="task-stats">Total: {total} | Completed: {completed}</p>
      <EmptyMessage />
      <TodoItems />
    </center>
  );
};

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark-theme" : ""}>
      <Container>
        <TodoItemsContextProvider>
          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
          <AppContent />
        </TodoItemsContextProvider>
      </Container>
    </div>
  );
};

export default App;
