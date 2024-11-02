import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { z } from "zod"; 

const schema = z.object({
  todo: z.string().min(5, { message: "Please enter min 5 symbols." }),
});

function ToDoForm({ addTodo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), 
  });

  const onSubmit = (data) => {
    addTodo(data.todo);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center space-x-4 mb-6"
    >
      <input
        type="text"
        placeholder="New task"
        {...register("todo")}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Add
      </button>
      {errors.todo && (
        <p className="text-red-500 text-sm mt-1">
          {errors.todo.message} {/* Вывод сообщения об ошибке */}
        </p>
      )}
    </form>
  );
}

export default ToDoForm;
