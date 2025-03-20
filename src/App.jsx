import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SkillsAndProjectsSection from './components/SkillsAndProjectsSection';
// import ContactForm from './components/ContactForm';
// import CTASection from './components/CTASection';
import RadialBackground from './components/RadialBackground';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <AboutMe />
        <SkillsAndProjectsSection />
        <TestimonialsSection />
        <RadialBackground />
        {/* <ContactForm />
        <CTASection /> */}
        {/* Testimonials => Client or Peer Reviews, Quotes or Ratings */}
        {/* Blog => Highlights or Recent Articles or Tutorials, Links to Full Blog Posts, Categories or Tags for Topics */}
        {/* Contact => Form, Social Media, CTA */}
        <Footer />
      </Router>
    </div>
  );
}

export default App