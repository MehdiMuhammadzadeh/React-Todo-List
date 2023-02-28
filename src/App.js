import TodoInput from "./components/TodoInput";

function App() {
  return (
    <>
      <div className="bg-black flex flex-col items-center justify-start text-red-700 text-bold text-center">
        <h1 className="text-3xl mb-3 text-white">Todo List</h1>
        <ul className="flex justify-center text-white mb-2">
          <li>Home</li>
          <li className="mx-1">|</li>
          <li>todo</li>
        </ul>
      </div>
      <TodoInput />
    </>
  );
}

export default App;
