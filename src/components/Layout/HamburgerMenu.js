"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (scrollY > window.innerHeight * 0.25) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
                    }`}
            >
                <div
                    className={`relative flex items-center justify-between container transition-opacity duration-300 py-10 ${isScrolled ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="/">
                            <Image
                                src="/images/logo-keys-rh.svg"
                                alt="Logo de Keys-RH, agence de travail temporaire"
                                width={110}
                                height={100}
                                priority="true"
                                />
                        </a>
                    </div>
                    <div className="ml-auto flex space-x-4">
                        <button
                            onClick={toggleMenu}
                            className={`hamburger-btn ${isMenuOpen ? "active bg-white" : ""} ${isScrolled ? "text-black" : "text-white"
                                } z-60 transition-all transform duration-300 hover:scale-105`}
                        >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white text-black transform transition-transform duration-300 z-[9999] ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <nav className="mt-8">
                    <ul>
                        <li>
                            <a href="#about" className="block py-2">
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="block py-2">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}
