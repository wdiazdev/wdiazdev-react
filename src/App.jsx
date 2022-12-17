import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className='fixed--email'>wdiazdev@gmail.com</div>
        <div className='divider--right'></div>
        <div className='divider--left'></div>

        <div className='fixed--icons'>

          <ul>
            <li>
              <a href='' className='icon'><FaGithub /></a>
            </li>

            <li>
              <a href='' className='icon'><FaLinkedin /></a>
            </li>
          </ul>

        </div>

      </div>
    </HashRouter >
  )
}

export default App
