import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Incompletetodos from './components/incompleteTodos';
import Completedtodos from './components/completedTodos';
import Todos from './components/allTodos'; 
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Callback from './components/Callback';  // Add this import




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
          <Route path="/callback" element={<Callback />} />
          <Route path="/" element={<Login />} />
          <Route path="/alltodos" element={<Todos />} />
          <Route path="/incompletetodos" element={<Incompletetodos />} />
          <Route path="/completedtodos" element={<Completedtodos />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
