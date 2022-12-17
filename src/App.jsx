import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Section/Main';


function App() {

  return (
    <HashRouter>
      <Navbar />
      <Main />
    </HashRouter >
  )
}

export default App
