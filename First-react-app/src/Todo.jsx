import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState(" ");
  const [todos, setTodos] = useState([]);

  const handleChange = (value) => {
    setTodo(value);
  };

  const handleSubmitChange = (event) => {
    event.preventDefault();

    if (!todo) {
      return;
    }
    if (todos.includes(todo)) {
      setTodo(" ");
      return;
    }
    setTodos((prev) => [...prev, todo]);
    setTodo(" ");
  };

  return (
    <form onSubmit={handleSubmitChange}>
      <div
        className="container"
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient( rgba(255, 27, 0, 1), rgb(255, 76, 147))",
        }}
      >
        <h1 style={{ marginLeft: "41rem", fontSize: "54px" }}>Todo Lists</h1>
        <input
          type="text"
          placeholder="Enter ur task"
          value={todo}
          onChange={(event) => handleChange(event.target.value)}
          style={{
            width: "27rem",
            height: "3rem",
            marginLeft: "34rem",
            marginTop: "-12rem",
            borderRadius: "5rem",
            fontFamily: "sans-serif",
            fontSize: "25px",
          }}
        />
        <button
          type="submit"
          style={{
            borderRadius: "40%",
            width: "70px",
            height: "56px",
            marginTop: "-12rem",
            marginLeft: "-16rem",
            backgroundColor: "greenyellow",
          }}
        >
          Add
        </button>
        <div
          className="task"
          style={{
            width: "55rem",
            height: "15rem",
            marginLeft: "21rem",
            marginTop: "-12rem",
          }}
        >
          <ul>
            {todos.map((currItem, index) => {
              return (
                <li
                  key={index}
                  style={{
                    display: "inline-block",
                    width: "41rem",
                    height: "2.5rem",
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "5rem",
                    fontFamily: "sans-serif",
                    fontSize: "25px",
                    marginLeft: "4rem",
                  }}
                >
                  <span style={{ marginLeft: "4rem" }}>{currItem}</span>
                  <button></button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </form>
  );
}
export default Todo;
