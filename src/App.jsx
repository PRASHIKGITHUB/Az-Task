
import './App.css'
import React from 'react';
import SlideBar from './components/SlideBar/SlideBar';

import Profile from './components/Profile/Profile';
import Hero from './components/HeroSection/Hero';
function App() {
  

  return (

    <div className="app">
      <SlideBar/>
      <Profile/>
      <Hero/>
    </div>
  )
}

export default App
