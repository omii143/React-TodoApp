import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-app-store";

const Item = ({ todoName, todoDate, isCompleted }) => {
  const { deleteTodoItem, toggleCompleteTodo } = useContext(TodoItemsContext);

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent toggle on delete
    deleteTodoItem(todoName);
  };

  return (
    <div
      className={`item ${isCompleted ? "completed" : ""}`}
      onClick={() => toggleCompleteTodo(todoName)}
    >
      <div className="item-text">{todoName}</div>
      <div className="item-date">{todoDate}</div>
      <div className="item-delete">
        <button className="delButton" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
