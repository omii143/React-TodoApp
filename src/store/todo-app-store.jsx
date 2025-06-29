import { createContext, useEffect, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewTodoItem: () => {},
  deleteTodoItem: () => {},
  toggleCompleteTodo: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return [
        ...currTodoItems,
        {
          name: action.payload.todoItemName,
          dueDate: action.payload.todoItemDate,
          isCompleted: false,
        },
      ];
    case 'DELETE_TODO_ITEM':
      return currTodoItems.filter((item) => item.name !== action.payload.todoItemName);
    case 'TOGGLE_COMPLETE_TODO':
      return currTodoItems.map((item) =>
        item.name === action.payload.todoItemName
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    case 'SET_INITIAL_ITEMS':
      return action.payload;
    default:
      return currTodoItems;
  }
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  useEffect(() => {
    const stored = localStorage.getItem("todoItems");
    if (stored) {
      dispatchTodoItems({ type: "SET_INITIAL_ITEMS", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const addNewTodoItem = (todoItemName, todoItemDate) => {
    dispatchTodoItems({
      type: "ADD_TODO_ITEM",
      payload: { todoItemName, todoItemDate },
    });
  };

  const deleteTodoItem = (todoItemName) => {
    dispatchTodoItems({
      type: "DELETE_TODO_ITEM",
      payload: { todoItemName },
    });
  };

  const toggleCompleteTodo = (todoItemName) => {
    dispatchTodoItems({
      type: "TOGGLE_COMPLETE_TODO",
      payload: { todoItemName },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addNewTodoItem, deleteTodoItem, toggleCompleteTodo }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
