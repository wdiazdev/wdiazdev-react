import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
      </HashRouter>
    </div>
  )
}

export default App
