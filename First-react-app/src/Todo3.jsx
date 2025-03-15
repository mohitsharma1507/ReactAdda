import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo3.css";

function Todo3() {
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), task: todo, completed: false },
    ]);
    setTodo("");
  };
  const handleEdit = (id) => {
    // Find the task to edit
    const taskToEdit = todos.find((task) => task.id === id);
    if (taskToEdit) {
      setTodo(taskToEdit.task); // Set the input value to the task being edited
      // Remove the task from the list
      setTodos((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const handleDelete = (id) => {
    const updatedTask = todos.filter((task) => task.id !== id);
    setTodos(updatedTask);
  };

  const handleToggleButton = (id) => {
    const updatedTodos = todos.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="todo">
        <h1>TODO SHEET</h1>
        <div className="allTodo">
          <input
            type="text"
            placeholder="Enter the task"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button className="add" onClick={handleAdd}>
            Add Task
          </button>
        </div>  
        <div className="todo-list">
          <ul>
            {todos.map((task) => (
              <li key={task.id} className={task.completed ? "completed" : ""}>
                {task.task}

                <button
                  className="editBtn"
                  onClick={() => {
                    handleEdit(task.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delBtn"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button
                  className="checkBtn"
                  onClick={() => handleToggleButton(task.id)}
                >
                  MarkAsDone
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo3;
