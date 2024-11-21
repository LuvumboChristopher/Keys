"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "./SideBar";
import { useState, useEffect } from "react";
import { FaFileUpload, FaLocationArrow, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Para el scroll del banner
  const [colorChanged, setColorChanged] = useState(false); // Para el nuevo scroll que cambia los colores
  const [showBar, setShowBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollThreshold = window.innerHeight * 0.35;
      const scrollTop = window.scrollY;

      // Scroll que cambia el color del header
      setColorChanged(scrollTop > window.innerHeight * 5); // 50% de la página

      // Scroll que maneja el banner
      setScrolled(scrollTop > 0);
      setShowBar(scrollTop >= scrollThreshold);
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease-in-out",
          backgroundColor: colorChanged ? "black" : scrolled ? "white" : "transparent",
          color: colorChanged ? "white" : "black",
          borderBottom: colorChanged ? "1px solid white" : scrolled ? "1px solid black" : "",
        }}
      >
        <div className="container mx-auto flex justify-end lg:justify-between items-center py-14 relative">
          <motion.div
            className="hidden lg:flex gap-5"
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

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src={colorChanged ? "/images/keyslogos/Keys-logo-white.svg" : "/images/keyslogos/Keys-logo-black-yellow.svg"}
                alt="Keys"
                title="Keys"
                width={100}
                height={100}
                loading="lazy"
                className={`transition-opacity duration-300 ease-in-out opacity-${scrolled ? "100" : "0"} 
                    w-36 `}
              />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-between items-center gap-8"
          >
            <div className="hidden lg:flex items-center">
              <Link href="/compte/connexion" className="flex items-center">
                <FaUser className="mr-4" />
                Mon compte
              </Link>
            </div>
            <div
              className={`ml-auto flex space-x-8 z-60 transition-all transform duration-300 ${
                colorChanged ? "text-white" : "text-black"
              }`}
            >
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

      <motion.div
        className="hidden lg:block fixed left-0 right-0 h-auto z-20 border-b border-black text-sm"
        initial={{ y: -200 }}
        animate={{ y: showBar ? 139 : -200 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: scrolled ? "white" : "transparent",
          boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.05)" : "none",
        }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="container flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer">
            <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
              <TfiSearch className="text-xl text-gray-700" />
              <input
                placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                className="w-full px-3 py-5 text-gray-800 focus:outline-none"
              />
            </div>
            <div className="bg-black h-8 w-px mx-4"></div>
            <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
              <TfiLocationArrow className="text-xl text-gray-700" />
              <input
                className="w-full px-3 py-5 text-gray-800 focus:outline-none"
                placeholder="Sélectionner un lieu"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="w-auto block mx-auto flex items-center justify-center hover:bg-yellow-500 hover:text-black px-5 py-5 font-semibold bg-black text-white lg:border-r lg:border-l border-black transition-all duration-500">
              <TfiWand className="mr-4" />
              <span className="whitespace-nowrap">Explorer les jobs</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

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
