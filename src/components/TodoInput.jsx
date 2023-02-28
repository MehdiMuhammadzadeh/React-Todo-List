import React, { useEffect, useRef, useState } from "react";
import Todo from "./Todo";

const TodoInput = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  const handleAddTodo = () => {
    setTodo("");

    const newTodo = {
      content: todo,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const handleDelete = (id) => {
    const filterdTodos = todos.filter(todo=>todo.id !== id)
    
    setTodos(filterdTodos)
    localStorage.setItem("todos", JSON.stringify(filterdTodos));
  }
  const inputRef = useRef();
  
  useEffect(() =>{
    

      inputRef.current.focus();
  },[])

  return (

    <div className="text-center pt-5 ">
      <input
      ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        className="border border-purple-500 text-sm rounded mx-1 w-6/12 p-2  focus:ring-purple-500 "
        placeholder="Add Todo..."
        required
      />
      <button
        onClick={handleAddTodo}
        className="rounded bg-purple-600 w-32 text-white p-2 hover:bg-purple-800"
      >
        submit
      </button>
      {todos.map((todo) => {
      
        return <Todo key={`todo_${todo.id}`} content={todo.content} handleDelete={()=>handleDelete(todo.id)}/>;
      })}
    </div>

  );
};
export default TodoInput;


