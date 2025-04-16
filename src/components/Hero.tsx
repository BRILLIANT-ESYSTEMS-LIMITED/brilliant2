import React from 'react';
import { ArrowRight, Brain, Cpu, Glasses, Globe2 } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Next-Gen Technology Solutions',
      subtitle: 'Pioneering the future of digital transformation'
    },
    {
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Innovation at Scale',
      subtitle: 'Empowering businesses through technology'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Enterprise Solutions',
      subtitle: 'Building tomorrow\'s infrastructure today'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-opacity duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-6 text-xl text-green-100">
              {slides[currentSlide].subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-green-900 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Our Services
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Glasses className="h-10 w-10 text-green-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">AR/VR Solutions</h3>
              <p className="mt-2 text-green-100">Immersive experiences for education and enterprise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Cpu className="h-10 w-10 text-green-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">IoT Systems</h3>
              <p className="mt-2 text-green-100">Connected solutions for smart infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Brain className="h-10 w-10 text-green-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">AI Research</h3>
              <p className="mt-2 text-green-100">Advanced machine learning solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Globe2 className="h-10 w-10 text-green-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">Metaverse</h3>
              <p className="mt-2 text-green-100">Next-gen digital experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;