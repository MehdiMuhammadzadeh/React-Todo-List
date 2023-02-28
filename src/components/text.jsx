import { useState } from "react";
import "./App.css";
import Newtodo from "./NewTodo/NewTodo";
import TodoList from "./TodoList/TodoList";

let INITIAL_TODOS = [
  { id: "e1", title: "Set up meeting", date: new Date(2021, 0, 14), index: 0 },
  {
    id: "e2",
    title: "Doctor appointment",
    date: new Date(2021, 2, 14),
    index: 1,
  },
  { id: "e3", title: "Work on project", date: new Date(2021, 1, 22), index: 2 },
  { id: "e4", title: "Update resume", date: new Date(2021, 6, 14), index: 3 },
];

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const deleteItem = (e) => {
    const newTodos = todos.filter((item) => item.index !== 1 /*This works properly with a hardcoded value(1) but how can this be done dynamically as e doesn't seem to have anything useful within it (like e.target.value)*/);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Newtodo />
      <TodoList items={todos} handleDelete={deleteItem} />
    </div>
  );
};

export default App;