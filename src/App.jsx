import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        {/* import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5"; */}
      </Router>
    </div>
  );
}

export default App