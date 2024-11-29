"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiAgenda, TfiBell, TfiBriefcase, TfiEmail, TfiKey, TfiLayoutListThumbAlt, TfiLocationPin, TfiUser } from "react-icons/tfi";

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
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiBriefcase className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Secteurs d’activité</p>
                  <p className="text-xs">Découvrez nos offres dans divers secteurs professionnels</p>
                  </div>
              </li>
            </a>

            <a href="/#emplois-par-localisation" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiLocationPin className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Emplois par localisation</p>
                  <p className="text-xs">Recherchez un emploi selon votre région ou votre ville</p>
                </div>
              </li>
            </a>

            <a href="/#dernières-offres-d'emploi" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiBell className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Dernières offres d'emploi</p>
                  <p className="text-xs">Découvrez toutes les offres d'emploi récemment publiées</p>
                </div>
              </li>
            </a>

            <a href="/#nos-agences" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiKey className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Nos agences</p>
                  <p className="text-xs">Localisez facilement nos agences partenaires en France</p>
                </div>
              </li>
            </a>

            <a href="/jobs" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiLayoutListThumbAlt className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Opportunités de carrière</p>
                  <p className="text-xs">Accédez à une liste complète de nos opportunités de carrière</p>
                </div>
              </li>
            </a>

            <a href="/contact" className="transition-all duration-300 ease-in-out" onClick={toggleMenu}>
              <li className="h-full group flex flex-col gap-4 justify-start items-start px-6 py-3 md:py-6 rounded-2xl border border-gray-100 hover:bg-gray-100 hover:border-gray-400 cursor-pointer hover:shadow-md">
                <TfiEmail className="block text-lg lg:text-xl mr-auto" />
                <div className="w-full">
                  <p className="text-sm mb-1" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>Contact</p>
                  <p className="text-xs">Obtenez nos informations de contact et envoyez un message</p>
                </div>
              </li>
            </a>
          </ul>
        </nav>
        <div className="border-t py-6">
          <div className="w-max flex flex-col md:flex-row items-center justifity-center gap-4">
            <a href="https://www.keys-rh.fr/worker/" className="w-max mx-auto" onClick={toggleMenu}>
              <div className={`w-max flex flex-rox gap-3 items-center justify-center p-4 border rounded-3xl hover:border-gray-400 hover:shadow-md hover:bg-gray-100 hover:text-black  cursor-pointer hover:shadow-md transition-all duration-200 group ease-in-out`}>
              <TfiUser className="block text-lg lg:text-xl mr-auto" />
              <p className="w-full text-xs text-center ">Espace candidat</p>
              </div>
            </a>
            <a href="https://www.keys-rh.fr/company/security/login" className="w-max mx-auto" onClick={toggleMenu}>
              <div className={`w-max flex flex-row gap-3 items-center justify-center p-4 border rounded-3xl border text-black hover:border-gray-400 hover:shadow-md hover:bg-gray-100 cursor-pointer hover:shadow-md transition-all duration-200 group ease-in-out`}>
              <TfiAgenda className="block text-lg lg:text-xl mr-auto" />
              <p className="w-full text-xs text-center">Espace Recruteur</p>
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
