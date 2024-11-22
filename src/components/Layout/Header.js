"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "./SideBar";
import { useState, useEffect } from "react";
import { FaFileUpload, FaLocationArrow, FaUser } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { SearchComponentWhite } from "./SearchComponentWhite";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [colorChanged, setColorChanged] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const pathname = usePathname();

  const checkScrollPosition = () => {
    const scrollThreshold = window.innerHeight * 0.35;
    const scrollTop = window.scrollY;

    setColorChanged(scrollTop > 2570 );
    setScrolled(scrollTop > 0);
    setShowBar(scrollTop >= scrollThreshold);
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoVisibility = pathname === "/"
    ? scrolled || window.scrollY > 0
    : true;

  return (
    <header>
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
          borderBottom: colorChanged ? "none" : scrolled ? "1px solid black" : "",
        }}
      >
        <div className="container mx-auto flex justify-end lg:justify-between items-center py-14 relative">
          <motion.div
            className="hidden lg:flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <ul className="list-none p-0 m-0 flex gap-5 text-md">
              <li>
                <Link href="https://www.keys-rh.fr/worker/" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:bg-black hover:text-white hover:transform hover:translate-y-[-3px] transition-all duration-300 ${colorChanged && "hover:bg-yellow-500 hover:text-gray-900"}`}>
                  <FaFileUpload />
                  Candidature
                </Link> 
              </li>
              <li>
                <Link href="#nos-agences" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:bg-black hover:text-white hover:transform hover:translate-y-[-3px] transition-all duration-300 ${colorChanged && "hover:bg-yellow-500 hover:text-gray-900"}`}>
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
                src={colorChanged ? "/images/keyslogos/Keys-logo-white-yellow.svg" : "/images/keyslogos/Keys-logo-black-yellow.svg"}
                alt="Keys"
                title="Keys"
                width={100}
                height={100}
                loading="lazy"
                className={`transition-opacity duration-300 ease-in-out ${logoVisibility ? "opacity-100" : "opacity-0"} w-[130px]`}
              />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-between items-center gap-8"
        >
            {/* Enlace al perfil */}
            <div className="hidden lg:flex items-center">
                <Link href="https://www.keys-rh.fr/worker/" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:bg-black hover:text-white hover:transform hover:translate-y-[-3px] transition-all duration-300 ${colorChanged && "hover:bg-yellow-500 hover:text-gray-900"}`}>
                    <FaUser />
                    Mon compte
                </Link>
            </div>

            {/* Botón de menú */}  
            <HamburgerMenu
              colorChanged={colorChanged}
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
        </motion.div>


        </div>
      </header>

      <SearchComponentWhite
        scrolled={scrolled}
        showBar={showBar}
        location={location}
        setLocation={setLocation}
        colorChanged={colorChanged}
      />

      <Sidebar
        isMenuOpen={isMenuOpen}
        colorChanged={colorChanged}
        toggleMenu={toggleMenu}
      />

      {isMenuOpen && (
        <div
          className={`overlay-opacity ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
