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
import { ThemeToggle } from "./ThemeToggle";
import { useUIContext } from "@/app/context/UIContext";

const Header = () => {
  const {
    isMenuOpen,
    toggleMenu,
    scrolled,
    showBar,
    isSavedJobsMenuOpen,
    toggleSavedJobsMenu,
  } = useUIContext();

  const pathname = usePathname();
  const { favorites, savedForLater, isAnimating } = useContext(FavoritesContext);
  const isHomePage = pathname === "/";

  return (
    <>
<header
  className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${
    scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
  } ${!isHomePage ? "bg-white dark:bg-gray-900" : ""}`}
>

        <div
          className={`container mx-auto flex justify-between items-center relative h-[115px] duration-30`}
        >
          <motion.div>
            <Link href="/">
              <Image
                src="/images/keyslogos/Keys-logo-black-yellow.svg"
                alt="Keys"
                title="Keys"
                width={2000}
                height={2000}
                loading="lazy"
                className={`block dark:hidden transition-opacity ease-in-out w-[95px] ${scrolled || !isHomePage ? "opacity-100" : "opacity-0"
                  }`}
              />
              <Image
                src="/images/keyslogos/Keys-logo-white-yellow.svg"
                alt="Keys"
                title="Keys"
                width={2000}
                height={2000}
                loading="lazy"
                className={`hidden dark:block transition-opacity ease-in-out w-[95px]  ${scrolled || !isHomePage ? "opacity-100" : "opacity-0"
                  }`}
              />
            </Link>
          </motion.div>
          <div className="flex justify-between items-center gap-8">
          <ul
              className={`hidden lg:flex flex-row list-none p-0 m-0 gap-5 text-md ${
                isHomePage
                  ? scrolled
                    ? "text-black dark:text-white"
                    : "text-white"
                  : "text-black dark:text-white"
              }`}
            >
              <li>
                <button
                  onClick={toggleSavedJobsMenu}
                  className=" flex items-center gap-4 p-[7px] px-[10px] hover:-translate-y-1 transition-all"
                >
                  <span className="relative">
                    <FaFolder
                      className={`text-base ${
                        isHomePage && !scrolled
                          ? "text-white"
                          : "dark:text-blue-500 text-black"
                      }`}
                    />
                    {favorites.length > 0 || savedForLater.length > 0 ? (
                      <span
                        className={`absolute top-[-4px] right-[-5px] w-3 h-3 bg-yellow-500 rounded-full ${
                          isAnimating ? "animate-bounce" : ""
                        }`}
                      ></span>
                    ) : null}
                  </span>
                  Candidatures
                </button>
              </li>
              <li>
                <Link
                  href="/#nos-agences"
                  className="flex items-center gap-4 p-[7px] px-[10px] hover:-translate-y-1 transition-all"
                >
                  <FaLocationArrow
                    className={`text-base ${
                      isHomePage && !scrolled
                        ? "text-white"
                        : "dark:text-emerald-600 text-black"
                    }`}
                  />
                  Trouver une agence
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.keys-rh.fr/worker/"
                  className="flex items-center gap-4 p-[7px] px-[10px] hover:-translate-y-1 transition-all"
                >
                  <FaUser
                    className={`text-base ${
                      isHomePage && !scrolled
                        ? "text-white"
                        : "dark:text-amber-500 text-black"
                    }`}
                  />
                  Mon compte
                </Link>
              </li>
            </ul>
            <ThemeToggle />
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isHomePage={isHomePage} scrolled={scrolled} />
          </div>
        </div>
        <SearchComponent scrolled={scrolled} showBar={showBar} />
      </header>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isSavedJobsMenuOpen={isSavedJobsMenuOpen} toggleSavedJobsMenu={toggleSavedJobsMenu} />
      <SavedJobsMenu isSavedJobsMenuOpen={isSavedJobsMenuOpen} toggleSavedJobsMenu={toggleSavedJobsMenu} />
      <div
        className={`overlay-opacity z-[9993] ${isSavedJobsMenuOpen | isMenuOpen && "open"}`}
        onClick={isSavedJobsMenuOpen ? toggleSavedJobsMenu : toggleMenu}
      ></div>
    </>
  );
};

export default Header;
