"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiBell, TfiBriefcase, TfiEmail, TfiKey, TfiLayoutListThumbAlt, TfiLocationPin } from "react-icons/tfi";

export default function Sidebar({ isMenuOpen, toggleMenu, colorChanged }) {
  const [currentYear, setCurrentYear] = useState(null);
  const pathname = usePathname();
  const [mainPage, setMainPage] = useState(true);


  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMainPage(pathname !== "/" ? false : true);
    }
  }, [pathname]);

  return (
    <div
      className={`sidebar fixed md:top-[2.5%] md:bottom-[2.5%] md:left-[1.5%] md:h-[95%] p-8 w-full md:w-[630px]  h-full bg-white transform z-[9999] ${isMenuOpen ? "open" : "closing"
        } flex flex-col md:rounded-[30px]  overflow-hidden `}
    >
      <div className="w-full flex justify-between items-center py-2">
        <div>

          <Image
            src={colorChanged ? "/images/keyslogos/Keys-logo-white-yellow.svg" : "/images/keyslogos/Keys-logo-black-yellow.svg"}
            alt="Logo de Keys-RH"
            width={100}
            height={100}
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />

        </div>
        <button
          onClick={toggleMenu}
          className={`hamburger-btn ${isMenuOpen ? "open open-menu" : ""} text-black transition-transform duration-300 ease-in-out`}
        >
          <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
          <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
          <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
        </button>
      </div>
      <div className="h-full">
        <nav className="py-2">
          <ul className="py-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <a href="/#secteurs-d'activité" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiBriefcase className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Secteurs d’activité</p>
                  <p className="text-xs">Explorez les secteurs d’activité</p>
                </div>
              </li>
            </a>

            <a href="/#emplois-par-localisation" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiLocationPin className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Emplois par localisation</p>
                  <p className="text-xs">Trouvez un emploi selon votre localisation</p>
                </div>
              </li>
            </a>

            <a href="/#dernières-offres-d'emploi" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiBell className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Dernières offres d'emploi</p>
                  <p className="text-xs">Découvrez nos dernières offres</p>
                </div>
              </li>
            </a>

            <a href="/#nos-agences" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiKey className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Nos agences</p>
                  <p className="text-xs">Trouvez nos agences à travers la France</p>
                </div>
              </li>
            </a>

            <a href="/jobs" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiLayoutListThumbAlt className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Opportunités de carrière</p>
                  <p className="text-xs">Découvrez toutes nos offres</p>
                </div>
              </li>
            </a>

            <a href="/contact" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-row gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiEmail className="block text-lg lg:text-2xl mb-4 mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Contact</p>
                  <p className="text-xs">Nous contacter</p>
                </div>
              </li>
            </a>
          </ul>

        </nav>
        <div className="border-t py-6">
          <div className="w-full flex flex-col md:flex-row items-center justifity-start gap-4">
            <a href="https://www.keys-rh.fr/worker/" className="w-full mx-auto" onClick={toggleMenu}>
              <div className={`w-full flex flex-row gap-6 items-center justify-center p-4 px-6 border rounded-3xl hover:border-gray-400 hover:shadow-md hover:bg-gray-100 hover:text-black  cursor-pointer hover:shadow-md transition-all duration-200 group ease-in-out`}>
                <span className="text-4xl">🧑🏼‍🏭</span>
                <p className="w-full text-sm text-center ">Vous êtes candidat ?</p>
              </div>
            </a>

            <a href="https://www.keys-rh.fr/company/security/login" className="w-full mx-auto" onClick={toggleMenu}>
              <div className={`w-full flex flex-row gap-6 items-center justify-center p-4 px-6 border rounded-3xl border text-black hover:border-gray-400 hover:shadow-md hover:bg-gray-100 cursor-pointer hover:shadow-md transition-all duration-200 group ease-in-out`}>
                <span className="text-4xl">👨🏼‍💻</span>
                <p className="w-full text-sm text-center">Vous êtes Recruteur ?</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t pt-6">
        <div className="flex flex-col justify-between items-center text-xs 8ext-gray-900">
          <p>Copyright © {currentYear || "loading..."} Keys - Intérim & Recrutement</p>
        </div>
      </div>
    </div>
  );
}
