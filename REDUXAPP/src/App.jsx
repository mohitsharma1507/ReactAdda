import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTask, delTask, fetchTask } from "./Store";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  const handleAdd = () => {
    if (task.trim() === "") return;
    dispatch(addTask(task.trim()));
    setTask("");
  };

  const handleDelete = (id) => {
    return dispatch(delTask(id));
  };

  const handleFetchTasks = () => {
    dispatch(fetchTask());
  };
  return (
    <div className="container">
      <div className="todo">
        <h1>TODO SHEET</h1>
        <div className="allTodo">
          <input
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            style={{ color: "black" }}
          />
          <button className="add" onClick={handleAdd}>
            Add Task
          </button>
        </div>
        <button
          onClick={handleFetchTasks}
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "3rem",
          }}
        >
          Fetch Tasks
        </button>
        <div className="todo-list">
          <ul>
            {tasks.map((currtask, index) => (
              <li key={index}>
                {index}:{currtask}
                <button className="delBtn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
