import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    id: 1,
    city: "Hyderabad",
    address: "Plot 123, Jubilee Hills, Hyderabad, Telangana 500033",
    phone: "+91 40-1234-5678",
    hours: "Mon-Sat: 5am-11pm, Sun: 6am-10pm",
    image: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    city: "Bangalore",
    address: "42, Indiranagar 100ft Road, Bangalore, Karnataka 560038",
    phone: "+91 80-9876-5432",
    hours: "Mon-Sat: 5am-11pm, Sun: 6am-10pm",
    image: "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    city: "Pune",
    address: "88, Koregaon Park, Pune, Maharashtra 411001",
    phone: "+91 20-8765-4321",
    hours: "Mon-Sat: 5am-11pm, Sun: 6am-10pm",
    image: "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    city: "Visakhapatnam",
    address: "Beach Road, Maharanipeta, Visakhapatnam, Andhra Pradesh 530002",
    phone: "+91 891-234-5678",
    hours: "Mon-Sat: 5am-11pm, Sun: 6am-10pm",
    image: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

export const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  
  return (
    <section id="locations" className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find a CultFit gym near you. Each location features state-of-the-art equipment,
            luxury amenities, and expert staff ready to support your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Location Image */}
          <div className="rounded-xl overflow-hidden h-96 shadow-2xl shadow-red-900/20">
            <img 
              src={locations[activeLocation].image} 
              alt={locations[activeLocation].city} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Location Details */}
          <div className="space-y-8">
            <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              {locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setActiveLocation(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    index === activeLocation 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {location.city}
                </button>
              ))}
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{locations[activeLocation].city}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{locations[activeLocation].address}</span>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{locations[activeLocation].phone}</span>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{locations[activeLocation].hours}</span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Schedule Tour
                </button>
                <button className="bg-transparent border border-gray-600 hover:border-gray-500 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-gray-300 text-sm">
                Looking for a location not listed? We're expanding rapidly! 
                <a href="#" className="text-red-500 hover:text-red-400 ml-1">
                  Request a CultFit in your area →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};