import { useContext, useRef, useState } from "react";
import { TodoItemsContext } from "../store/todo-app-store";

const AddTodo = () => {
     const { addNewTodoItem } = useContext(TodoItemsContext);
     
       const [todoName, setTodoName] = useState("");
       const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewTodoItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };


    return (
        <div className="add-todo-container">
                <input
                    className="todo-name-input"
                    type="text"
                    placeholder="Enter todo item name"
                    onChange={handleNameChange}
                    value={todoName}
                    required
                />
                <input
                    type="date"
                    className="todo-date-input"
                    onChange={handleDateChange}
                    value={dueDate}
                    required
                />
                <button type="button" className="addButton" onClick={handleAddButtonClicked}  >Add </button>
            
        </div>
    );
};

export default AddTodo;
