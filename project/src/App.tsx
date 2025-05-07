import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { Trainers } from './components/Trainers';
import { Testimonials } from './components/Testimonials';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Membership />
        <Trainers />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;