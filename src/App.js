import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header></header>
      <Navbar />
      <div className="current-page">
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
