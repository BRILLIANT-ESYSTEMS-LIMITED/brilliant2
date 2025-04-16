import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';

const Home: React.FC = () => {
  return (
    <>
      <ImageSlider />
      <Hero />
      <Services />
      <Technologies />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
