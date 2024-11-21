import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-cover bg-center text-white  mt-[70px] flex flex-col items-center"
        style={{ backgroundImage: "url(/images/footer.svg)" }}
      >
        {/* Logo */}
        <div className="mt-16 max-w-4xl flex flex-col items-center justify-center mx-auto">
          <Image    layout="responsive"
                                                    width={16}
                                                    height={9}  className="max-w-[100px]" src="/images/keyslogos/Keys-logo-white.svg" alt="Logo" />
          <p className=" max-w-md mx-auto text-center text-sm py-6">
            Créé en 2017, Keys a pour ambition de s"imposer durablement sur le marché de l"emploi. Nous vous mettons à disposition nos experts métiers afin de trouver le(a) candidat(e) qui correspondra le mieux à vos attentes.
          </p>
        </div>

        {/* Social Media Menu */}
        <ul className="mt-9 flex flex-row">
          <li className="mx-2 flex items-center gap-4"><Link href="/">Facebook <FaFacebook className="text-3xl md:text-5xl" /></Link></li>
          <li className="mx-2 flex items-center gap-4"><Link href="/">Twitter</Link><FaTwitter className="text-3xl md:text-5xl" /></li>
          <li className="mx-2 flex items-center gap-4 "><Link href="/" >LinkedIn</Link><FaLinkedin className="text-3xl md:text-5xl" /> </li>
        </ul>

        {/* Footer Menu */}
        <div className="mt-12 w-full grid grid-cols-3 justify-items-center border-b border-white pb-5">
          <div>
            <Link href="/">Link 1</Link>
          </div>
          <div>
            <Link href="/">Link 2</Link>
          </div>
          <div>
            <Link href="/">Link 3</Link>
          </div>
        </div>
      </footer>
      <footer className="bg-white py-10">
        <div className="container flex  justify-between items-center text-center">
          <p className="text-xs">Copyright © {new Date().getFullYear()} Keys - Intérim & Recrutement</p>
          <p className="text-xs">
            Réalisation et conception par 🚀
            <Link className="font-bold ml-1 hover:text-yellow-300" href="https://www.linkedin.com/in/christopher-luvumbo/" target="_blank" rel="noopener noreferrer">
              L.Christopher
            </Link>
          </p>
          <p className="flex justify-center text-xs gap-2">
            <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link> |
            <Link href="/cgu" className="hover:underline"> CGU</Link> |
            <Link href="/plan-du-site" className="hover:underline"> Plan du site</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
