import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import BrandKitsCard from './comonents/Pages/pages';
import EmbodiedCarbon from './comonents/Graph/graph';
import Dashboard from './comonents/Stats/stats';
import LogoCarousel from './comonents/costumers_section/Costumers';
import ParallaxDoor from './comonents/ParalaxPage/Paralapage';
import ImageFocusPage from './comonents/ImageFocus/ImageFocus';
import Loader from './comonents/Loder/Loader';
import RippleWater from './comonents/Ripple /Ripple';
import Navbar from './NavBar/NavBar';

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2-second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader/>;
  return (
  <div>
    <Navbar/> {/* We'll create this below */}

    <div id="parallax">
      <ParallaxDoor />
    </div>

    <div id="focus">
      <ImageFocusPage />
    </div>

    <div id="brand">
      <BrandKitsCard />
    </div>

    <div id="carbon">
      <EmbodiedCarbon />
    </div>

    <div id="stats">
      <Dashboard />
    </div>

    <div id="customers">
      <LogoCarousel />
    </div>

    <div id="ripple">
      <RippleWater />
    </div>
  </div>
);

}

export default App;
