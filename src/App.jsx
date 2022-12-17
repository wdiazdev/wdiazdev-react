import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Navbar />
      </div>
    </HashRouter>
  )
}

export default App
