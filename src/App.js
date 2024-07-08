import React from 'react';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Insights from './pages/Insights';

function App() {
  return (
      <div className="App">
        {/* Navigation Bar */}
        
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />

        {/* {Insights} */}

        < Insights />
        
        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;


// Nithin Branch
