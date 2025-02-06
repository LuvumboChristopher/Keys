"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { currentYear } from '@/app/utils/utils';

const Footer = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <section className={isHomePage ? "bg-white dark:bg-gray-900 dark:text-white" : "bg-white"}>
      <motion.footer
        className={`container py-16 flex flex-col lg:flex-row gap-16 lg:gap-8 items-start lg:items-center justify-between text-xs sm:text-sm 
    ${isHomePage ? "" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Logo & Description */}
        <div className="w-full lg:w-2/5 flex flex-col items-start lg:border-r lg:pr-12">
          {isHomePage ?
            <>
              <Image
                title="Keys"
                width={2000}
                height={2000}
                className="dark:block hidden max-w-[90px]"
                src="/images/keyslogos/Keys-logo-white.svg"
                alt="Logo"
              />
              <Image
                title="Keys"
                width={2000}
                height={2000}
                className="dark:hidden block max-w-[90px]"
                src="/images/keyslogos/Keys-logo-black.svg"
                alt="Logo"
              />
            </>
            :
            <Image
              title="Keys"
              width={2000}
              height={2000}
              className="max-w-[90px]"
              src="/images/keyslogos/Keys-logo-black.svg"
              alt="Logo"
            />
          }
          <p className="mt-6 max-w-md mr-auto ">
            Créé en 2017, Keys a pour ambition de s&#39;imposer durablement sur le
            marché de l&#39;emploi. Nous vous mettons à disposition nos experts
            métiers afin de trouver le(a) candidat(e) qui correspondra le mieux à
            vos attentes.
          </p>
          <ul className="mt-8 flex gap-8">
            <Link href="https://www.linkedin.com/company/keys-int%C3%A9rim-recrutement">
              <li className="cursor-pointer flex items-center gap-2 ">
                Linkedin
                <FaLinkedin className=" md:text-md hover:text-gray-600" />
              </li>
            </Link>
            <Link href="https://www.instagram.com/keysrecrutement">
              <li className="cursor-pointer flex items-center gap-2 ">
                Instagram
                <FaInstagram className=" md:text-md hover:text-gray-600" />
              </li>
            </Link>
          </ul>
        </div>

        {/* Footer Menus */}
        <div className="w-full lg:w-3/5 flex flex-wrap justify-between gap-12 ">
          <div className="w-max mr-auto">
            <h4 className="text-md font-semibold mb-4">Navigation</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/#secteurs-d'activité" className=" hover:underline">
                  Secteurs d’activité
                </Link>
              </li>
              <li>
                <Link href="/#emplois-par-localisation" className=" hover:underline">
                  Emplois par localisation
                </Link>
              </li>
              <li>
                <Link href="/#dernieres-offres-emploi" className=" hover:underline">
                  Dernières offres d&#39;emploi
                </Link>
              </li>
              <li>
                <Link href="/#nos-agences" className=" hover:underline">
                  Nos agences
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-max mr-auto">
            <h4 className="text-md font-semibold mb-4">Nos solutions</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/mon-application" className=" hover:underline">
                  Mon compte
                </Link>
              </li>
              <li>
                <Link href="/#app" className=" hover:underline">
                  Mon application
                </Link>
              </li>
              <li>
                <Link href="https://www.keys-rh.fr/worker/security/login" className=" hover:underline">
                  Espace candidat
                </Link>
              </li>
              <li>
                <Link href="https://www.keys-rh.fr/company/security/login" className=" hover:underline">
                  Espace recruteur
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-max mr-auto">
            <h4 className="text-md font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-1">
              <li>
                <Link href="https://www.keys-rh.fr/worker/security/register" className=" hover:underline">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="/politique-de-gestion-des-cookies" className=" hover:underline">
                  Politique de gestion des cookies
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className=" hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.footer>
      {/* Bottom Footer */}
      <motion.footer
        className="container py-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center text-xxs gap-4 py-2">
          <p>Copyright © {currentYear} Keys - Intérim & Recrutement</p>
          <p>
            Réalisation par 🚀
            <Link
              href="https://www.linkedin.com/in/christopher-luvumbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold ml-1 hover:text-yellow-400"
            >
              L.Christopher
            </Link>
          </p>
          <div className="flex space-x-2">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <span>|</span>
            <Link href="/cgu" className="hover:underline">
              CGU
            </Link>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
