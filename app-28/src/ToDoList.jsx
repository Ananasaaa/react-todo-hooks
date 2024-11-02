import React from "react";

function ToDoList({ todos, removeTodo }) {
  return (
    <ul className="w-full">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white border-b p-3 rounded-md shadow-sm mb-2"
        >
          <span>{todo}</span>
          <button
            onClick={() => removeTodo(index)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
