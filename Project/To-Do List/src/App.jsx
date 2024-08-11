import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { useState } from "react";

function App() {
  const [todoitems, setTodoIems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new Item added:${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoitems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoIems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.name !== todoItemName);
    setTodoIems(newTodoItems);
    console.log(`item deleted :${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoitems.length === 0 && <WelcomeMsg />}
      <TodoItems
        todoitems={todoitems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
