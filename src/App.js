//START cd portfolio   npm start
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './routes/Contact';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </>
  );
}

export default App;
