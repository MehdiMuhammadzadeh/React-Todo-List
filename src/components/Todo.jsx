import React from "react";

const Todo = ({content, handleDelete}) => {



  return (
    <>
      <div className="todo-list flex justify-between border w-8/12 bg-purple-400 m-auto mt-1 p-1 rounded items-center">
        <div className="flex justify-center">
          <span className="mx-1">
            <input type="checkbox" className="w-4 h-4 text-gr-600 bg-gray-100 border-red-500 rounded focus:ring-blue-500 "/>
          </span>
          <span className="">{content}</span>
        </div>
        <span>
          <button className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700"  onClick={handleDelete}>
            delete
          </button>
        </span>
      </div>
    </>
  );
};

export default Todo;