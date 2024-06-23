import { useNavigate } from "react-router-dom"

export default function Button(){
    const navigate = useNavigate();
    return <div>
        <ul className="sm:flex sm:space-x-10 sm:mt-5">
        <button className="ml-6 sm:ml-10 px-2 py-2 bg-black text-sm sm:text-base border border-gray-300 py-2 sm:px-4 rounded-full sm:ml-6 hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/')}>All Todos</button>
        <button className="p-2 ml-2 bg-black border text-sm sm:text-base border-gray-300 sm:py-2 sm:px-4 rounded-full hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/c')}>Completed Todos</button>
        <button className="p-2 ml-2 bg-black border text-sm sm:text-base border-gray-300 sm:py-2 sm:px-4 rounded-full hover:bg-red hover:text-black hover:border-black" onClick={() => navigate('/i')}>Active Todos</button>
      </ul>
    </div>
}