"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
            setIsVisible(scrollTop > 300);
        };

        const checkBackgroundColor = () => {
            if (typeof document !== "undefined") {
                setIsDarkMode(document.body.style.backgroundColor === "black");
            }
        };

        window.addEventListener("scroll", handleScroll);
        checkBackgroundColor();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const strokeDashoffset = 307.919 - (scrollProgress / 100) * 307.919;

    return (
        <div
            className={`fixed w-[2.5rem] h-[2.5rem] cursor-pointer flex items-center justify-center shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010]
            transition-all duration-200 ease-linear rounded-full right-6 bottom-5
            ${isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3"}
            ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}
        `}
            onClick={scrollToTop}
        >
            <svg
                className="absolute w-full h-full"
                viewBox="-1 -1 102 102"
            >
                <path
                    className="fill-none stroke-yellow-500 transition-all duration-200 ease-linear"
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: "307.919",
                        strokeDashoffset: strokeDashoffset,
                        transition: "stroke-dashoffset 0.2s linear",
                        strokeWidth: "6", 
                    }}
                />
            </svg>
            <span className="relative text-center leading-[2.3rem] text-[1.2rem] font-Unicons">
                <FaArrowUp />
            </span>
        </div>
    );
}
