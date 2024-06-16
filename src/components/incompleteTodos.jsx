import { useState,useEffect,useCallback } from "react";
import CreateTodos from "./createTodos";
import "../App.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Incompletetodos = () => {
    const [todos,setTodos] = useState([]);
    const navigate = useNavigate();

    const fetchTodos = useCallback(async (a) =>{
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      const filteredData = data.filter(incompleteTodos);
      setTodos(filteredData);
    });

    useEffect(() =>{
      fetchTodos();
    },[]);
    const incompleteTodos = (data) => !data.completed;

    const handleComplete = async (todoId, currentStatus) => {
      try {
          await fetch("http://localhost:3000/update", {
              method: "PATCH",
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  todoId,
                  todoCompleted: !currentStatus,
              }),
          });
          toast.success("Completed todo successfully");
          fetchTodos(incompleteTodos);
          // window.location.reload();
      } catch (error) {
          console.error('Error updating todo:', error);
      }
    };
    async function deleteTodo(todoId) {
      try{
        await fetch("http://localhost:3000/delete", {
          method: "DELETE",
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            todoId,
          }),
        });
        toast.success("Deleted todo successfully");
        fetchTodos();
      }catch (error) {
        console.error('Error deleting todo:', error);
      }
    }

    return ( 
      <div>
        <h1 className='ml-10 mt-24 font-extrabold text-5xl'>Todo Application</h1>
        <CreateTodos/>
        <ul className="flex space-x-10 mt-5">
          <button className="bg-black border border-gray-300  py-2 px-4 rounded-full ml-6 hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/')}>All Todos</button>
          <button className="bg-black border border-gray-300  py-2 px-4 rounded-full hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/c')}>CompletedTodos</button>
          <button className="bg-black border border-gray-300  py-2 px-4 rounded-full hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/i')}>Active Todos</button>
        </ul>
        <div>
        {todos && todos.map((tod) => (
          <div key={tod._id} className="m-3 mb-4  mt-6 flex items-center">
            <input
              className="custom-checkbox"
              type="checkbox"
              onChange={() => handleComplete(tod._id, tod.completed)}
              checked={tod.completed} 
              disabled={tod.completed?true:false}
            />
            <label className="px-2">{tod.todo}</label><button onClick={()=>{deleteTodo(tod._id)}} className="rounded-full px-2 py-1 hover:bg-blue hover:text-black hover:border-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          </div>
        ))}
      </div>
      </div>
    );
}
 
export default Incompletetodos;