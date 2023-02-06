import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/home';
import Projects from './components/pages/projects';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} /> */}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
