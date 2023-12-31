"use client";
import React, { memo, useEffect, useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.innerWidth < 1024) return;
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavBar(false);
      } else if (window.scrollY === 0) {
        setShowNavBar(false);
      } else {
        // if scroll up show the navbar
        setShowNavBar(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
    }
    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header className={`header ${showNavBar ? 'navbar__sticky' : ''}`}>
      <div className='header__main'>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default memo(Header);
