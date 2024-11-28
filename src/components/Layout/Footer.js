"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <motion.footer
        className="container py-12 border-t bg-center text-black flex flex-col lg:flex-row  gap-16 lg:gap-8 items-start lg:items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo & Description */}
        <div className="w-full lg:w-2/5 flex flex-col items-start lg:border-r pr-6">
          <Image
            src="/images/keyslogos/Keys-logo-black.svg"
            width={100}
            height={56} // Proporción 16:9
            className="object-contain"
            alt="Logo"
          />

          <p className="text-sm mt-6 max-w-md mr-auto">
            Créé en 2017, Keys a pour ambition de s&#39;imposer durablement sur le
            marché de l&#39;emploi. Nous vous mettons à disposition nos experts
            métiers afin de trouver le(a) candidat(e) qui correspondra le mieux à
            vos attentes.
          </p>
          <ul className="mt-8 flex gap-8">
            <a href="https://www.linkedin.com/company/keys-int%C3%A9rim-recrutement">
              <li className="cursor-pointer flex items-center gap-2 text-sm">
                Linkedin
                <FaLinkedin className="text-sm md:text-md hover:text-gray-600" />
              </li>
            </a>
            <a href="https://www.instagram.com/keysrecrutement">
              <li className="cursor-pointer flex items-center gap-2 text-sm">
                Instagram
                <FaInstagram className="text-sm md:text-md hover:text-gray-600" />
              </li>
            </a>
          </ul>
        </div>

        {/* Footer Menus */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-md font-semibold mb-4">Navigation</h4>
            <ul className="space-y-1">
              <li>
                <a href="/#secteurs-d'activité" className="text-sm hover:underline">
                  Secteurs d’activité
                </a>
              </li>
              <li>
                <a href="/#emplois-par-localisation" className="text-sm hover:underline">
                  Emplois par localisation
                </a>
              </li>
              <li>
                <a href="/#dernières-offres-d'emploi" className="text-sm hover:underline">
                  Dernières offres d&#39;emploi
                </a>
              </li>
              <li>
                <a href="/#nos-agences" className="text-sm hover:underline">
                  Nos agences
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Nos solutions</h4>
            <ul className="space-y-1">
              <li>
                <a href="/mon-application" className="text-sm hover:underline">
                  Mon compte
                </a>
              </li>
              <li>
                <a href="/mon-application" className="text-sm hover:underline">
                  Mon application
                </a>
              </li>
              <li>
                <a href="https://www.keys-rh.fr/worker/security/login" className="text-sm hover:underline">
                  Espace candidat
                </a>
              </li>
              <li>
                <a href="https://www.keys-rh.fr/company/security/login" className="text-sm hover:underline">
                  Espace recruteur
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-1">
              <li>
                <a href="https://www.keys-rh.fr/worker/security/register" className="text-sm hover:underline">
                  Créer un compte
                </a>
              </li>
              <li>
                <a href="/politique-de-gestion-des-cookies" className="text-sm hover:underline">
                  Politique de gestion des cookies
                </a>
              </li>
              <li>
                <a href="/politique-de-confidentialite" className="text-sm hover:underline">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.footer>
      <motion.footer
        className="bg-white py-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container flex flex-col lg:flex-row justify-between items-center text-xs text-gray-900 gap-4 py-2">
          <p>Copyright © {currentYear || "loading..."} Keys - Intérim & Recrutement</p>
          <p>
            Réalisation par 🚀
            <a
              href="https://www.linkedin.com/in/christopher-luvumbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold ml-1 hover:text-yellow-400"
            >
              L.Christopher
            </a>
          </p>
          <div className="flex space-x-2">
            <a href="/mentions-legales" className="hover:underline">
              Mentions légales
            </a>
            <span>|</span>
            <a href="/cgu" className="hover:underline">
              CGU
            </a>
            <span>|</span>
            <a href="/plan-du-site" className="hover:underline">
              Plan du site
            </a>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
