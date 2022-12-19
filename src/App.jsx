import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Section/About';
import Main from './Section/Main';
import Skills from './Section/Skills';


function App() {

  return (
    <HashRouter>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </HashRouter >
  )
}

export default App
