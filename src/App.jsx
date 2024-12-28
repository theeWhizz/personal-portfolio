import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <About />
      </Router>
    </div>
  );
}

export default App