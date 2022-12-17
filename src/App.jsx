import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <a href='#' className='fixed--email'>wdiazdev@gmail.com</a>
        <div className='divider--right'></div>
        <div className='divider--left'></div>

        <div className='fixed--icons'>

          <ul>
            <li>
              <a href='https://github.com/WDiazDev' className='icon' target='blanck'><FaGithub /></a>
            </li>

            <li>
              <a href='https://www.linkedin.com/in/wdiazdev/' className='icon' target='blanck'><FaLinkedin /></a>
            </li>
          </ul>

        </div>

      </div>
    </HashRouter >
  )
}

export default App
