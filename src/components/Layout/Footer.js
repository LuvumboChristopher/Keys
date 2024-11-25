"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"; 

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <motion.footer
        className="container py-10 border-t bg-center text-black flex flex-row gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} 
      >
        {/* Logo */}
        <div className="max-w-4xl flex flex-col items-start justify-center mx-auto border-r pr-8 ">
          <Image
            layout="responsive"
            width={16}
            height={9}
            className="max-w-[100px]"
            src="/images/keyslogos/Keys-logo-black.svg"
            alt="Logo"
          />
          <p className="max-w-md mx-auto text-left text-sm py-6">
            Créé en 2017, Keys a pour ambition de s&#39;imposer durablement sur le
            marché de l&#39;emploi. Nous vous mettons à disposition nos experts
            métiers afin de trouver le(a) candidat(e) qui correspondra le mieux à
            vos attentes.
          </p>
          <ul className="mt-9 flex flex-row">
            <li className="mx-2 flex items-center gap-8">
              <Link href="/" className="text-sm">
                Facebook
              </Link>
              <FaFacebook className="text-lg md:text-xl" />
            </li>
            <li className="mx-2 flex items-center gap-4">
              <Link href="/" className="text-sm">
                Twitter
              </Link>
              <FaTwitter className="text-lg md:text-xl" />
            </li>
            <li className="mx-2 flex items-center gap-4">
              <Link href="/" className="text-sm">
                LinkedIn
              </Link>
              <FaLinkedin className="text-lg md:text-xl" />
            </li>
          </ul>
        </div>

        {/* Footer Menu */}
        <div className="w-full grid grid-cols-3 justify-items-start pb-3">
        <div>
            <h4 className="text-md pb-4">
                Navigation
            </h4>
            <div>
              <Link href="#secteurs-d'activité" className="text-sm">
                Secteursd’activité
              </Link>
            </div>
            <div>
              <Link href="#emplois-par-localisation" className="text-sm">
                Emplois par localisation
              </Link>
            </div>
            <div>
              <Link href="#dernières-offres-d'emploi" className="text-sm">
                Dernières offres d'emploi

              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-md pb-4">
                Nos solutions
            </h4>
            <div>
              <Link href="/mon-application" className="text-sm">
                Mon application
              </Link>
            </div>
            <div>
              <Link href="/espace-candidat" className="text-sm">
                Espace candidat
              </Link>
            </div>
            <div>
              <Link href="/espace-recruteur" className="text-sm">
                Espace recruteur
              </Link>
            </div>
          </div>
          <div>
          <h4 className="text-md pb-4">
            Liens utiles
            </h4>
            <div>
              <Link href="/creer-un-compte" className="text-sm">
                Créer un compte
              </Link>
            </div>
            <div>
              <Link href="/politique-de-gestion-des-cookies" className="text-sm">
                Politique de gestion des cookies
              </Link>
            </div>
            <div>
              <Link href="/politique-de-confidentialite" className="text-sm">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>

      <motion.footer
        className="bg-white py-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <div className="container flex justify-between items-center text-center">
          <p className="text-xs">
            Copyright © {currentYear || "loading..."} Keys - Intérim & Recrutement
          </p>
          <p className="text-xs">
            Réalisation et conception par 🚀
            <Link
              className="font-bold ml-1 hover:text-yellow-300"
              href="https://www.linkedin.com/in/christopher-luvumbo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              L.Christopher
            </Link>
          </p>
          <p className="flex justify-center text-xs gap-2">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>{" "}
            |
            <Link href="/cgu" className="hover:underline">
              {" "}
              CGU
            </Link>{" "}
            |
            <Link href="/plan-du-site" className="hover:underline">
              {" "}
              Plan du site
            </Link>
          </p>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
