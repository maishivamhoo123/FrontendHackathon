import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#parallax">Home</a></li>
        <li><a href="#focus">Focus</a></li>
        <li><a href="#brand">Brand Kits</a></li>
        <li><a href="#carbon">Carbon Chart</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#customers">Customers</a></li>
        <li><a href="#ripple">Ripple</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
