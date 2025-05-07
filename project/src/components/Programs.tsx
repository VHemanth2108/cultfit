import React from 'react';
import { Dumbbell, HeartPulse, Apple, ClipboardList, UsersRound, Flame, ArrowRight } from 'lucide-react';

const programsData = [
  {
    id: 1,
    icon: <Dumbbell className="h-10 w-10 text-red-600" />,
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive weight training programs suitable for all levels.",
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    icon: <HeartPulse className="h-10 w-10 text-red-600" />,
    title: "Cardio Fitness",
    description: "Improve your heart health and endurance with our range of high-energy cardio classes and programs.",
    image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    icon: <Apple className="h-10 w-10 text-red-600" />,
    title: "Nutrition Planning",
    description: "Get personalized meal plans and nutrition guidance to complement your fitness regimen.",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    icon: <ClipboardList className="h-10 w-10 text-red-600" />,
    title: "Personal Training",
    description: "Work one-on-one with our certified trainers to achieve your specific fitness goals faster.",
    image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    icon: <UsersRound className="h-10 w-10 text-red-600" />,
    title: "Group Classes",
    description: "Join our energetic group sessions for motivation, fun, and effective workouts in a social setting.",
    image: "https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    icon: <Flame className="h-10 w-10 text-red-600" />,
    title: "HIIT Workouts",
    description: "Maximize calorie burn with our high-intensity interval training sessions designed for quick results.",
    image: "https://images.pexels.com/photos/6295791/pexels-photo-6295791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Fitness Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of fitness programs designed to help you reach your goals,
            whether you're looking to build strength, improve endurance, or enhance overall wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};