import './App.css';
import React, { useState } from "react";
import ToDoForm from "./ToDoForm.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

