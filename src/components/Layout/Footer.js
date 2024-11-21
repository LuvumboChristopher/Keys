"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="bg-gray-50 border-t bg-center text-black flex flex-col items-center">
        {/* Logo */}
        <div className="mt-16 max-w-4xl flex flex-col items-center justify-center mx-auto">
          <Image
            layout="responsive"
            width={16}
            height={9}
            className="max-w-[130px]"
            src="/images/keyslogos/Keys-logo-black.svg"
            alt="Logo"
          />
          <ul className="mt-9 flex flex-row">
            <li className="mx-2 flex items-center gap-4">
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
          <p className="max-w-md mx-auto text-center text-sm py-6">
            Créé en 2017, Keys a pour ambition de s&#39;imposer durablement sur le
            marché de l&#39;emploi. Nous vous mettons à disposition nos experts
            métiers afin de trouver le(a) candidat(e) qui correspondra le mieux à
            vos attentes.
          </p>
        </div>

        {/* Footer Menu */}
        <div className="mt-12 w-full grid grid-cols-3 justify-items-center border-b border-white pb-5">
          <div>
            <Link href="/" className="text-sm">
              Link 1
            </Link>
          </div>
          <div>
            <Link href="/" className="text-sm">
              Link 2
            </Link>
          </div>
          <div>
            <Link href="/" className="text-sm">
              Link 3
            </Link>
          </div>
        </div>
      </footer>
      <footer className="bg-white py-10">
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
      </footer>
    </>
  );
};

export default Footer;
