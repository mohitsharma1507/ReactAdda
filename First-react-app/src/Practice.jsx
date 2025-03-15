import React, { useState } from "react";
import "./App.css";

function Practice() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const normalizedNewTask = newTask.trim().toLowerCase().replace(/\s+/g, " "); // Normalize input
    if (normalizedNewTask === "") return; // Prevent empty tasks

    // Check for duplicates after normalization
    if (
      tasks.some(
        (task) =>
          task.text.toLowerCase().replace( /\s+/g, " ") === normalizedNewTask
      )
    ) {
      alert("Task already exists!");
      return;
    }

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, text) => {
    setEditId(id);
    setEditValue(text);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editId ? { ...task, text: editValue } : task
      )
    );
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => markAsDone(task.id)}>
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => editTask(task.id, task.text)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practice;
