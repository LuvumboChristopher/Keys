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

    return (
        <div
            className={`fixed w-[2.5rem] h-[2.5rem] cursor-pointer flex items-center justify-center shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010]
            transition-all duration-200 ease-linear  right-4 bottom-5  rounded-md overflow-hidden
            ${isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3"}
            ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}
        `}
            onClick={scrollToTop}
        >
            <svg
                className="absolute w-full h-full rounded-md overflow-hidden"
                viewBox="0 0 100 100"
            >
                <rect
                    x="0"
                    y="0"
                    width={`${scrollProgress}%`}
                    height="100"
                    className="fill-yellow-500 transition-all duration-200 ease-linear"
                />
            </svg>
            <span className="relative text-center leading-[2.3rem] text-[1.2rem] font-Unicons">
                <FaArrowUp />
            </span>
        </div>
    );
}
