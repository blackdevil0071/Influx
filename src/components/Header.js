import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa'; // Import the Home icon from react-icons
import Background from '../assets/Background.png'; // Import the background image
import './Header.css';

// Header component
const Header = () => {
  // State to track scroll position
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to handle scroll event and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle window resize and update mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Show full navbar on desktop screens */}
      {!isMobile && (
        <nav className={`navbar ${isNavbarScrolled ? 'scrolled' : ''}`}>
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="nav-sign-in-button">Sign In</button></li>
          </ul>
        </nav>
      )}

      {/* Show home icon on mobile screens */}
      {isMobile && (
        <div className="mobile-home-icon" aria-label="Home">
          <FaHome size={40} onClick={() => window.location.href = '#home'} />
        </div>
      )}

      <div className="background-container">
        <img src={Background} alt="background" className="background-image" />
        <h1 className="centered-heading">MVP Subscription</h1>
      </div>
    </>
  );
};

export default Header;
