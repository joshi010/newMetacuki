import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Shop from './components/pages/shop'; 
import About from './components/pages/about';
import Err from './components/err';


const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '*',
    element: <Err />
  }
]


function App() {
  const element = useRoutes(routes);
  return element;
}

function AppWithRouter() {
  return(
    <Router>
      <Nav />
      <App />
    </Router>
  )
}

export default AppWithRouter;
