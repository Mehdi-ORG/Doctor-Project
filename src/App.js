import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import About from './about/About';
import Service from './service/Service';
import Login from './login/Login';
import Gallery from './gallery/Gallery';
import Doctors from './doctors/Doctors';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
