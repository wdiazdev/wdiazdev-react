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
import Projects from './Section/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)

  }, []);

  useEffect(() => {
    AOS.init();
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
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        }

      </HashRouter>

    </div>
  )
};

export default App;
