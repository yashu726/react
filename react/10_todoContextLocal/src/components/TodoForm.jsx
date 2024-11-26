import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { toast } from "react-toastify";

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault();
  
      if (!todo) return;
  
      addTodo({ todo, completed: false });
      setTodo("");
      toast.success("Todo item added successfully!");
  };
  return (
    <>
      <form onSubmit={add} action="" className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}       
        />
        <button
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
