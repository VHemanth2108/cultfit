import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: "Arjun Kapoor",
    role: "Strength & Conditioning",
    image: "https://images.pexels.com/photos/6456293/pexels-photo-6456293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    bio: "Former national athlete with 10+ years of training experience specializing in strength and power development.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Yoga & Pilates Instructor",
    image: "https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    bio: "Certified yoga instructor with expertise in traditional and modern yoga practices.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Nutrition Specialist",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    bio: "Registered dietitian specializing in Indian and international nutrition for optimal fitness.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Deepika Patel",
    role: "HIIT & Cardio Expert",
    image: "https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    bio: "Energetic trainer specializing in high-intensity workouts that deliver maximum results.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Trainers</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our certified fitness professionals are dedicated to helping you achieve your goals
            with personalized guidance and motivation every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    {trainer.social.instagram && (
                      <a href={trainer.social.instagram} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                        <Instagram className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {trainer.social.twitter && (
                      <a href={trainer.social.twitter} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {trainer.social.linkedin && (
                      <a href={trainer.social.linkedin} className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-red-600 transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-red-600 font-medium mb-3">{trainer.role}</p>
                <p className="text-gray-600 text-sm">{trainer.bio}</p>
                <a 
                  href={`mailto:hemanthvasireddi2@gmail.com?subject=Training Session with ${trainer.name}&body=I'm interested in booking a session with ${trainer.name}.`}
                  className="mt-4 text-red-600 font-medium hover:text-red-700 transition-colors flex items-center text-sm"
                >
                  Book a Session
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="mailto:hemanthvasireddi2@gmail.com?subject=Trainer Inquiry&body=I'm interested in learning more about your trainers."
            className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors inline-block"
          >
            View All Trainers
          </a>
        </div>
      </div>
    </section>
  );
};