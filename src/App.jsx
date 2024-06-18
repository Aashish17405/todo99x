import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Incompletetodos from './components/incompleteTodos';
import Completedtodos from './components/completedTodos';
import Todos from './components/allTodos'; 

function App() {
  return (
    <div className='flex justify-center items-center'>
      
      <ToastContainer
        position="top-center"
        autoClose= {2000}
        closeOnClick= {true}
        theme="dark"
        draggable
      />
      
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/i" element={<Incompletetodos />} />
          <Route path="/c" element={<Completedtodos />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
