import './App.css'
import Navbar from './components/Navbar';
// import Hero from './components/Hero';

function App() {

  return (
    <div className="responsive relative mt-8 min-h-screen w-screen overflow-hidden">
      <div className=''>
        <Navbar />
        {/* <Hero /> */} 
      </div>
    </div>
  );
}

export default App