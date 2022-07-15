import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Message from './Components/Message';
import RahulPage from './Components/RahulPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/message/:username" element={<Message/>}/>
          <Route path="/message/rahul" element={<RahulPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
