import { useState, useEffect } from "react";
// import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { toast } from "react-toastify";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  };


  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((preTodo) => (preTodo.id === id ? todo : preTodo))
    );
    toast.success("Todo item Update successfully!");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.error("Todo item Deleted successfully!");
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    // Fetching todos from local storage
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, [])

  useEffect(() => {
    // Saving todos to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
               <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
               </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
