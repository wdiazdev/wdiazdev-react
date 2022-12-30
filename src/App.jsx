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
    }, 3000)

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
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        }

      </HashRouter>

    </div>
  )
};

export default App;
