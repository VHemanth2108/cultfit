import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jessica T.",
    age: 28,
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "CultFit transformed my approach to fitness. The trainers push me beyond what I thought was possible, and I've seen incredible results in just 3 months. The community aspect keeps me motivated!",
    achievement: "Lost 15kg in 6 months"
  },
  {
    id: 2,
    name: "Michael R.",
    age: 34,
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "As someone who always struggled with consistency, the variety of classes at CultFit keeps me engaged. The trainers are knowledgeable and supportive, making every workout challenging yet enjoyable.",
    achievement: "Improved marathon time by 20 minutes"
  },
  {
    id: 3,
    name: "Aisha K.",
    age: 31,
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "The nutrition guidance alongside the workouts has been a game-changer for me. I'm not just looking better, I'm feeling stronger and more energetic throughout the day. CultFit delivers on all fronts!",
    achievement: "Gained 8kg of lean muscle"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our members who have transformed their lives through their journey with CultFit.
            Real results from real people.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden relative">
                  <Quote className="absolute top-6 left-6 h-20 w-20 text-red-100" />
                  
                  <div className="md:flex items-center gap-8 relative">
                    <div className="mb-6 md:mb-0 md:w-1/3 flex-shrink-0">
                      <div className="rounded-xl overflow-hidden h-64 md:h-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 text-lg relative z-10">"{testimonial.text}"</p>
                      <div>
                        <h4 className="font-bold text-xl">{testimonial.name}, {testimonial.age}</h4>
                        <div className="bg-red-100 text-red-700 inline-block px-3 py-1 rounded-full text-sm font-medium mt-2">
                          {testimonial.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prev}
                className="bg-gray-200 hover:bg-gray-300 transition-colors p-3 rounded-full"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrent(index);
                    }}
                    className={`h-2.5 rounded-full transition-all ${
                      index === current ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={next}
                className="bg-gray-200 hover:bg-gray-300 transition-colors p-3 rounded-full"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};