import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";
import { ThreeDots } from 'react-loader-spinner';

function CreateTodos() {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth0();

  function validTodo() {
    return todo.trim() !== "";
  }

  async function addTodo(newTodo) {
    if (!validTodo()) {
      toast.error("Please enter a todo");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://todo99x.onrender.com/add", {
        method: "POST",
        headers: {
          'Content-type': "application/json",
        },
        body: JSON.stringify({
          todo: newTodo,
          userId: user.sub,
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
        setIsLoading(true);
      }, 2500);
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

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todo);
  }

  return (
    <>
      <div className='my-8 flex justify-center sm:mt-10 sm:ml-3'>
        <form onSubmit={handleSubmit} className="flex">
          <input
            className="px-5 py-2 bg-black sm:w-96 sm:h-12 sm:py-2 sm:px-6 sm:ml-0 sm:m-2 rounded-full border border-gray-300"
            type='text'
            placeholder='Todo'
            value={todo}
            onChange={handleChange}
          />
          <button
            className="border border-gray-300 ml-2 rounded-full px-2 sm:bg-black sm:hover:bg-blue sm:hover:text-black sm:px-3 sm:rounded-full sm:mt-2 sm:h-12"
            type="submit"
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </form>
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
