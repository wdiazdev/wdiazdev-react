import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
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

  return (
    <div className='App'>
      <HashRouter>

        {loading ?

          <Loader />

          :

          <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
          </>
        }

      </HashRouter>

    </div>
  )
};

export default App;
