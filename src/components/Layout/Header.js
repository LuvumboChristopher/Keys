"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "./SideBar";
import { useState, useEffect } from "react";
import { FaFileUpload, FaLocationArrow, FaUser } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease-in-out",
          backgroundColor: scrolled ? "white" : "transparent",
          color: "black",
        }}
      >
        <div className="container mx-auto flex justify-end lg:justify-between items-center relative h-[150px]">
          <motion.div
            className="hidden lg:flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ul className="list-none p-0 m-0 flex gap-5 text-md">
              <li>
                <Link href="https://www.keys-rh.fr/worker/" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all`}>
                  <FaFileUpload />
                  Candidature
                </Link> 
              </li>
              <li>
                <Link href="#nos-agences" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all `}>
                  <FaLocationArrow />
                  Trouver une agence
                </Link>
              </li>
            </ul>
          </motion.div>

          <div className="absolute left-1/2 transform -translate-x-1/2 hover:transform hover:translate-y-[-3px] transition-all">
            <Link href="/">
              <Image
                src="/images/keyslogos/Keys-logo-black-yellow.svg"
                alt="Keys"
                title="Keys"
                width={100}
                height={100}
                loading="lazy"
                className={`transition-opacity ease-in-out w-[125px] ${isHomePage ? (scrolled ? "opacity-100" : "opacity-0") : "opacity-100"}`}
              />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-center gap-8"
          >
            <div className="hidden lg:flex items-center">
              <Link href="https://www.keys-rh.fr/worker/" className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all`}>
                <FaUser />
                Mon compte
              </Link>
            </div>

            <HamburgerMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
          </motion.div>
        </div>
      </header>
      <Sidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
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
