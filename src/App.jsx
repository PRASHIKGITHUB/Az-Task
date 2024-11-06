
import './App.css'
import React, { useState } from 'react';
import SlideBar from './components/SlideBar/SlideBar';
// import { useState } from 'react';
import Profile from './components/Profile/Profile';
import Hero from './components/HeroSection/Hero';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  // const [activeItem, setActiveItem] = useState(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (

    <div className="app">
      <SlideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Profile/>
      <Hero isOpen={isOpen} />
    </div>
  )
}

export default App
