"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "./SideBar";
import { useState, useEffect, useContext } from "react";
import { FaFolder, FaLocationArrow, FaUser } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import { SearchComponent } from "./SearchComponent";
import SavedJobsMenu from "./SavedJobsMenu";
import { FavoritesContext } from "@/app/context/FavoritesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [isSavedJobsMenuOpen, setIsSavedJobsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { favorites, savedForLater, isAnimating } = useContext(FavoritesContext);

  const toggleBodyScroll = (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    toggleBodyScroll(isSavedJobsMenuOpen || isMenuOpen);
  }, [isSavedJobsMenuOpen, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSavedJobsMenu = () => {
    setIsSavedJobsMenuOpen(!isSavedJobsMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80 && !scrolled) {
        setScrolled(true);
      } else if (scrollPosition <= 80 && scrolled) {
        setScrolled(false);
      }

      if (scrollPosition > 400 && !showBar) {
        setShowBar(true);
      } else if (scrollPosition <= 400 && showBar) {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, showBar]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: scrolled || !isHomePage ? "white" : "transparent",
          boxShadow: (scrolled || !isHomePage) ? "0px 2px 8px rgba(0, 0, 0, 0.1)" : "none",
        }}
        className="z-[9999]">
        <div
          className={`container mx-auto flex justify-between items-center relative h-[130px] duration-30`}
        >
          <motion.div>
            <Link href="/">
              <Image
                src="/images/keyslogos/Keys-logo-new.svg"
                alt="Keys"
                title="Keys"
                width={2000}
                height={2000}
                loading="lazy"
                className={`transition-opacity ease-in-out w-[155px]  sm:w-[165px] md:w-[170px] ${scrolled || !isHomePage ? "opacity-100" : "opacity-0"
                  }`}
              />
            </Link>
          </motion.div>
          <div className="flex justify-between items-center gap-8">
          <ul
              className={`${ isHomePage ? scrolled ? " text-black" : "text-white " : "text-black " } hidden lg:flex flex-row relative list-none p-0 m-0 gap-5 text-md`}
            >
              <li>
                <button
                  onClick={toggleSavedJobsMenu}
                  className={` flex items-center gap-1 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all`}
                >
                  <span className="absolute p-2 left-[-30px]">
                    <FaFolder className="text-base" />
                    {(favorites.length > 0 || savedForLater.length > 0) && (
                      <span
                        className={`absolute top-1 right-0 w-3 h-3 bg-yellow-500 rounded-full ${isAnimating ? 'animate-bounce' : ''}`}
                      ></span>
                    )}
                  </span>
                  Candidatures
                </button>
              </li>
              <li>
                <Link
                  href="/#nos-agences"
                  className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all`}
                >
                  <FaLocationArrow className="text-base" />
                  Trouver une agence
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.keys-rh.fr/worker/"
                  className={`flex items-center gap-2 p-[7px] px-[10px] sm:gap-4 hover:transform hover:translate-y-[-3px] transition-all`}
                >
                  <FaUser className="text-base" />
                  Mon compte
                </Link>
              </li>
            </ul>

            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isHomePage={isHomePage} scrolled={scrolled} />
          </div>
        </div>
        <SearchComponent scrolled={scrolled} showBar={showBar} />
      </header>

      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isSavedJobsMenuOpen={isSavedJobsMenuOpen} toggleSavedJobsMenu={toggleSavedJobsMenu}  />
      <SavedJobsMenu isSavedJobsMenuOpen={isSavedJobsMenuOpen} toggleSavedJobsMenu={toggleSavedJobsMenu} />

      <div
        className={`overlay-opacity z-[9993] ${isSavedJobsMenuOpen | isMenuOpen && "open"}`}
        onClick={isSavedJobsMenuOpen ? toggleSavedJobsMenu : toggleMenu}
      ></div>
    </>
  );
};

export default Header;
