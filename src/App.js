import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Shop from './components/pages/shop'; 
import About from './components/pages/about';
import Err from './components/err';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Err />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
