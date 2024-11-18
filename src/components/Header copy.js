"use client";

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from "./SideBar";
import { useState, useEffect } from 'react';
import { FaFileUpload, FaLocationArrow, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className='max-w-[1200px] mx-auto flex justify-between items-center p-12 relative'>
          
          {/* Logo */}
          <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 md:transform-none'>
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  src="/images/keyslogos/Keys-logo-black-yellow.svg"
                  alt="Keys"
                  title="Keys"
                  width={130}
                  height={100}
                  loading="lazy"
                  style={{
                    transition: 'opacity 0.3s ease',
                    opacity: scrolled ? 1 : 0,
                  }}
                />
              </a>
            </Link>
          </div>

          {/* Menu Actions (Candidature, Trouver une agence) */}
          <motion.div
            className="hidden md:flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul className="list-none p-0 m-0 flex gap-5 text-sm sm:text-base">
              <li>
                <Link href="/candidat/deposez-votre-candidature" className="flex items-center gap-2 sm:gap-4">
                  <FaFileUpload />
                  Candidature
                </Link>
              </li>
              <li>
                <Link href="/agences" className="flex items-center gap-2 sm:gap-4">
                  <FaLocationArrow />
                  Trouver une agence
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='flex justify-between items-center gap-8'>
            
            {/* Mon compte (visible solo en pantallas grandes) */}
            <div className="hidden md:flex items-center">
              <Link href="/compte/connexion" legacyBehavior>
                <a className="flex items-center">
                  <FaUser className='mr-4' />
                  Mon compte
                </a>
              </Link>
            </div>

            {/* Burger Menu (siempre a la derecha) */}
            <div className={`ml-auto flex space-x-8 z-60 transition-all transform duration-300`}>
              <button
                onClick={toggleMenu}
                className={`hamburger-btn btn-header ${isMenuOpen ? "open open-menu" : ""} 
                ${isMenuOpen ? "transparent-lines" : ""} text-black transition-transform duration-300 ease-in-out hover:scale-110`}
              >
                <p className="line"></p>
                <p className="line"></p>
                <p className="line"></p>
              </button>
            </div>
          </motion.div>
        </div>
      </header>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {isMenuOpen && (
        <div
          className={`overlay-opacity ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
