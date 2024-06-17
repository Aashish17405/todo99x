import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateTodos() {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validTodo() {
    return todo.trim() !== "";
  }

  async function addTodo() {
    if (!validTodo()) {
      toast.error("Please enter a todo");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://todo-application-60gq.onrender.com/add", {
        method: "POST",
        headers: {
          'Content-type': "application/json",
        },
        body: JSON.stringify({
          todo: todo,
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      toast.success("Todo added successfully");
      setTodo("");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to add todo");
      console.error("There was an error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit() {
    addTodo();
  }

  return (
    <>
    <div className='flex flex-justify-between mt-10 ml-3'>
      
      <input
        className="shadow-md bg-black w-96 h-12 py-2 px-6 ml-0 m-2 rounded-full border border-gray-300"
        type='text'
        placeholder='Todo'
        value={todo}
        onChange={handleChange}
      />
      <button
        className="shadow-xl bg-black hover:bg-blue hover:text-black px-3 rounded-full mt-2 h-12"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add todo'}
      </button>
    </div>
    </>
  );
}

export default CreateTodos;
