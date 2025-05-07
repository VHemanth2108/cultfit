import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Dumbbell className={`h-8 w-8 ${scrolled ? 'text-red-600' : 'text-white'}`} />
            <span className={`font-bold text-xl ${scrolled ? 'text-red-600' : 'text-white'}`}>CultFit</span>
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className={`font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Programs</a>
            <a href="#membership" className={`font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Membership</a>
            <a href="#trainers" className={`font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Trainers</a>
            <a href="#testimonials" className={`font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Testimonials</a>
            <a href="#locations" className={`font-medium hover:text-red-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Locations</a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors">Join Now</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            }
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#programs" className="font-medium text-gray-800 hover:text-red-600 transition-colors" onClick={() => setIsOpen(false)}>Programs</a>
              <a href="#membership" className="font-medium text-gray-800 hover:text-red-600 transition-colors" onClick={() => setIsOpen(false)}>Membership</a>
              <a href="#trainers" className="font-medium text-gray-800 hover:text-red-600 transition-colors" onClick={() => setIsOpen(false)}>Trainers</a>
              <a href="#testimonials" className="font-medium text-gray-800 hover:text-red-600 transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#locations" className="font-medium text-gray-800 hover:text-red-600 transition-colors" onClick={() => setIsOpen(false)}>Locations</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors w-full">Join Now</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};