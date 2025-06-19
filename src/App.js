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
    <Navbar />
    
    <ParallaxDoor />
    
    <h2 className="section-title">Capturing the Moments</h2>
    <ImageFocusPage />

    <h2 className="section-title">Our Premium Brand Kits</h2>
    <BrandKitsCard />

    <h2 className="section-title">Embodied Carbon Insights</h2>
    <EmbodiedCarbon />

    <h2 className="section-title">Sustainability Dashboard</h2>
    <Dashboard />

    <h2 className="section-title">Our Customers</h2>
    <LogoCarousel />

    <h2 className="section-title">Feel the Ripple</h2>
    <RippleWater />
  </div>
);


}

export default App;
