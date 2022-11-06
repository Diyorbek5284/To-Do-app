import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Context from "./Contex";
import AddTodo from "./Todo/AddTodo";
// import { func } from "prop-types";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completd: false, title: "Real MAdrid" },
    { id: 2, completd: false, title: "MYU" },
    { id: 3, completd: false, title: "Juventus" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completd = !todo.completd;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat({
        title,
        id: Date.now(),
        completd: false,
      })
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1>React Tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onTogle={toggleTodo} />
        ) : (
          <p>jamoa yo'q</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
