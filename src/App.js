import { useState } from "react";
import "./App.css";
import { v1 as uuidv1 } from "uuid";

function App() {
  const id = uuidv1();
  const [todo, setTodo] = useState([
    {
      id: id,
      title: "",
      completed: false,
    },
  ]);
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (e) => {
    setTodo((prevState) => ({ ...prevState, id: id, title: e.target.value }));
  };
  const handleRemove = (e) => {
    setTodos([...todos].filter((s) => s.id !== e.id));
  };

  const handleComplete = (e) => {
    setTodos(
      [...todos].map((s) => {
        if (s.id === e.id) {
          s.completed = !s.completed;
        }
        return s;
      })
    );
  };

  const handleTodoSubmit = () => {
    setTodos([...todos, todo]);
    setTodo((prevState) => ({ ...prevState, title: "" }));
  };
  return (
    <div className="App">
      <div className="todo-container">
        {" "}
        <form onSubmit={(e) => e.preventDefault()}>
          <input value={todo.title} onChange={handleTodoChange} />
          <button onClick={handleTodoSubmit}>Submit</button>
        </form>
        {todos.map((e, i) => (
          <ul>
            <hr />
            <li>{e.id.split("-")[0]}</li>
            <li>{e.title}</li>
            <li>
              <button onClick={() => handleComplete(e)}>
                {e.completed ? "completed" : "not completed"}
              </button>
            </li>
            <li>
              <button onClick={() => handleRemove(e)}>x</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
