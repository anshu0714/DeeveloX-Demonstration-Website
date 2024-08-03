import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from "../assets/company_logo.png";
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setDrawerOpen(false); 
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-logo">
        <img src={CompanyLogo} alt="Deevelo X logo" />
      </div>
      <ul className={`navbar-links ${drawerOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
        <li><Link to="/Services" onClick={scrollToTop}>Services</Link></li>
        <li><Link to="/About" onClick={scrollToTop}>About</Link></li>
        <li><Link to="/Contact" onClick={scrollToTop}>Contact</Link></li>
      </ul>
      <button className="menu-button" onClick={toggleDrawer}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
