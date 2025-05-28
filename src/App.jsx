import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SkillsAndProjectsSection from './components/SkillsAndProjectsSection';
import RadialBackground from './components/RadialBackground';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Experiences from './components/Experiences';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <AboutMe />
        <SkillsAndProjectsSection />
        <Experiences />
        <TestimonialsSection />
        <RadialBackground />
        <Blog />
        <Footer />
      </Router>
    </div>
  );
}

export default App