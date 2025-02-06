"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { TfiAgenda, TfiFolder, TfiUser } from "react-icons/tfi";
import { useRouter } from "next/router";
import { FaIndustry, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaUserTie, FaCog, FaAppStoreIos } from 'react-icons/fa';
import { FavoritesContext } from "@/app/context/FavoritesContext";
import Link from "next/link";
import { currentYear } from "@/app/utils/utils";

export default function Sidebar({ isMenuOpen, toggleMenu, toggleSavedJobsMenu }) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const { favorites, savedForLater, isAnimating } = useContext(FavoritesContext);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavigating(true);
    };

    const handleRouteComplete = () => {
      setIsNavigating(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router]);

  const navigateToSection = (path) => {
    if (isNavigating) return;

    setIsNavigating(true);
    toggleMenu();

    if (path === "/jobs" || path === "/contact") {
      setTimeout(() => {
        router.push(path);
        setIsNavigating(false);
      }, 150);
    } else {
      router.push("/");
      setTimeout(() => {
        router.push(path);
        setIsNavigating(false);
      }, 100);
    }
  };

  return (
    <div
      className={`sideBar fixed md:right-[2%] md:top-[3%] md:bottom-[3%] h-[96vh] md:h-[94%] p-9  w-full  md:w-[600px] h-full bg-white transform z-[9999] md:rounded-3xl ${isMenuOpen ? "open" : "closing"
        } flex flex-col overflow-hidden transixtion-all duration-300 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center pb-6">
        <Image
          src={"/images/keyslogos/Keys-logo-black-yellow.svg"}
          alt="Logo de Keys-RH"
          width={1000}
          height={1000}
          className="transition-transform duration-500 ease-in-out w-[85px] sm:w-[95px]"
        />
        <button
          onClick={toggleMenu}
          className={`hamburger-btn ${isMenuOpen ? "open open-menu" : ""} text-black transition-transform duration-300 ease-in-out`}
        >
          <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
          <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
          <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
        </button>
      </div>
      <div className="w-full h-full overflow-y-scroll no-scrollbar border-b sm:border-none flex justify-center items-start pb-6 lg:py-4">
        <ul className="w-full items-start grid grid-cols-1 gap-5 md:grid-cols-2">    
          <li
            className="md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#keys")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaBuilding className="hidden text-xxs mr-3" />
                Qui sommes-nous ?
              </p>
              <p className="text-3xs">Agence de travail temporaire, connectant talents et opportunités.</p>
            </div>
          </li>
          <li
            className="md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#processus")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaCog className="hidden text-xxs mr-3" />
                Comment ça marche ?
              </p>
              <p className="text-3xs">Découvrez le fonctionnement de notre service de recrutement.</p>
            </div>
          </li>
          <li
            className="md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#emplois-par-localisation")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaMapMarkerAlt className="hidden text-xxs mr-3" />
                Emplois par localisation
              </p>
              <p className="text-3xs">Recherchez un emploi selon votre région ou votre ville</p>
            </div>
          </li>  
          <li
            className="hidden md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#app")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaAppStoreIos className="hidden text-xxs mr-3" />
                MyKeys App
              </p>
              <p className="text-3xs">Gérez candidatures et missions facilement avec notre application.</p>
            </div>
          </li>
          <li
            className="md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#secteurs-d'activité")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaIndustry className="hidden text-xxs mr-3" />
                Secteurs d’activité
              </p>
              <p className="text-3xs">Découvrez nos offres dans divers secteurs professionnels</p>
            </div>
          </li>
          <li
            className="md:h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#dernieres-offres-emploi")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaBriefcase className="hidden text-xxs mr-3" />
                Dernières offres d'emploi
              </p>
              <p className="text-3xs">Découvrez toutes les offres d'emploi récemment publiées</p>
            </div>
          </li>
          <li
            className="hidden h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/#nos-agences")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaBuilding className="hidden text-xxs mr-3" />
                Nos agences
              </p>
              <p className="text-3xs">Localisez facilement nos agences partenaires en France</p>
            </div>
          </li>
          <li
            className=" h-full group flex flex-col gap-3 justify-start items-start p-6 px-9 border bg-white border-[1px] border-gray-300 hover:border-gray-600 md:hover:shadow-md rounded-xl cursor-pointer"
            onClick={() => navigateToSection("/jobs")}
          >
            <div className="w-full">
              <p className="text-xs mb-1 flex items-center" style={{ fontFamily: "Plus Jakarta Sans Bold" }}>
                <FaUserTie className="hidden text-xxs mr-3" />
                Opportunités de carrière
              </p>
              <p className="text-3xs">Accédez à une liste complète de nos opportunités de carrière</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full py-6">
        <div className="w-full flex flex-col sm:flex-row items-center gap-3 md:gap-4">
          <Link href="https://www.keys-rh.fr/worker/" onClick={toggleMenu} className="w-full flex flex-row gap-1 md:gap-3 items-center justify-center p-4 border rounded-xl hover:border-gray-300 md:hover:shadow-md hover:text-black rounded-xs cursor-pointer transition-all duration-200 group ease-in-out">
            <TfiUser className="block text-xs md:text-md mr-auto" />
            <p className="w-full text-3xs text-center ">Espace candidat</p>
          </Link>
          <Link href="https://www.keys-rh.fr/company/security/login" onClick={toggleMenu} className="w-full flex flex-row gap-1 md:gap-3 items-center justify-center p-4 border rounded-xl text-black hover:border-gray-300 md:hover:shadow-md rounded-xs cursor-pointer transition-all duration-200 group ease-in-out">
            <TfiAgenda className="block text-xs md:text-md mr-auto" />
            <p className="w-full text-3xs text-center">Espace Recruteur</p>
          </Link>
          <div onClick={() => { toggleSavedJobsMenu(); toggleMenu(); }} className="group w-full flex flex-row gap-1 md items-center justify-center p-4 border-[1px] rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black md:hover:shadow-md hover:border-gray-500 rounded-xs cursor-pointer transition-all duration-200 group ease-in-out">
            <span className="relative">
              <TfiFolder className="block text-xs md:text-md mr-auto " />
              {(favorites.length > 0 || savedForLater.length > 0) && (
                <span
                  className={`absolute top-[-2px] right-[-4px] w-2 h-2 bg-yellow-500 group-hover:bg-black rounded-full ${isAnimating ? 'animate-bounce' : ''}`}
                ></span>
              )}
            </span>
            <p className="w-full text-3xs text-center">Candidatures</p>
          </div>
        </div>
      </div>
      <div className="text-3xs">
        <div className="flex flex-col justify-between items-center text-3xs text-gray-900">
          <p>Copyright ©  {currentYear || "loading..."} Keys - Intérim & Recrutement</p>
        </div>
      </div>
    </div>
  );
}
