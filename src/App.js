// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
