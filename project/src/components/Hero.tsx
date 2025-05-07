import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Transform Your Body",
    description: "Start your fitness journey with our expert trainers and state-of-the-art equipment."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Join Group Sessions",
    description: "Experience the energy of group workouts and make fitness friends along the way."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    title: "Personalized Training",
    description: "Get custom workout and nutrition plans tailored to your specific goals and body type."
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background image carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-0.5 w-12 bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-wider font-semibold">Welcome to cultfit</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl transition-all duration-700">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors">
              View Membership
            </button>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? 'w-10 bg-red-600' : 'w-3 bg-white bg-opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};