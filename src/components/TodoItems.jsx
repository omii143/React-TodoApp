import { TodoItemsContext } from "../store/todo-app-store";
import Item from "./Item";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="todoItemsContainer">
      {todoItems.map((item) => (
        <Item
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          isCompleted={item.isCompleted}
        />
      ))}
    </div>
  );
};

export default TodoItems;
