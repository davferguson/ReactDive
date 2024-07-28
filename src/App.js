import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
