import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';

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
      setTimeout(() => {
        window.location.reload();
      }, 2000);
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
      <div className='flex justify-between mt-10 ml-3'>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        {isLoading && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <ThreeDots
              visible={true}
              height={80}
              width={80}
              color="#EA445A"
              radius={9}
              ariaLabel="three-dots-loading"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default CreateTodos;
