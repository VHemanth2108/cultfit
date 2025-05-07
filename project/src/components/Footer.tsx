import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">CultFit</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness and wellness since 2018. 
              Our mission is to make health and fitness accessible, enjoyable, 
              and sustainable for everyone in India.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#membership" className="text-gray-400 hover:text-white transition-colors">Membership</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Support</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">COVID-19 Safety</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  CultFit HQ<br />
                  Plot 123, Jubilee Hills<br />
                  Hyderabad, Telangana 500033
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 40-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">hemanthvasireddi2@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-red-500 w-full"
                />
                <button className="bg-red-600 hover:bg-red-700 transition-colors px-4 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CultFit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};