import { TodoItemsContext } from "../store/todo-app-store";
import { useContext } from "react";

const EmptyMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  if (todoItems.length === 0) {
    return (
      <div className="empty-message">
        <p>No todo items available. Please add a new todo item.</p>
      </div>
    );
  }
  return null; // Added return null for non-empty case
};

export default EmptyMessage;
