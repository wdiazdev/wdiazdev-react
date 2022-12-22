import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Section/About';
import Home from './Section/Home';
import Skills from './Section/Skills';
import Work from './Section/Work';


function App() {

  return (
    <HashRouter>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </HashRouter >
  )
}

export default App
