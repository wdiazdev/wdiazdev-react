import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import About from './Section/About';
import Contact from './Section/Contact';
import Home from './Section/Home';
import Skills from './Section/Skills';
import Work from './Section/Work';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)

  }, []);

  if (loading) {
    return (
      <div className='App'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='App'>

      <HashRouter>

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </HashRouter >

    </div>
  )
}

export default App
