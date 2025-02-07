"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useUIContext } from "@/app/context/UIContext";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");
    const { scrolled } = useUIContext();
    const [isChangingTheme, setIsChangingTheme] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeChange = () => {
        setIsChangingTheme(true); 
        setTheme(theme === "dark" ? "light" : "dark");

        setTimeout(() => {
            setIsChangingTheme(false); 
        }, 300); 
    };

    return (
        <button
            className={`relative w-16 h-8 flex items-center 
                bg-gray-300 dark:bg-gray-500 rounded-full p-1 
                transition-colors duration-300 cursor-pointer 
                ${!scrolled && theme === "dark" ? "dark:bg-gray-300" : "bg-gray-300"}`}
            onClick={handleThemeChange}
        >
            <motion.div
                className="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                animate={{ x: theme === "dark" ? 32 : 0 }}
                initial={false}
            />
            <FiSun 
                className={`absolute left-2 text-md 
                    ${!scrolled && theme === "dark" ? "text-black" : "text-black"} 
                    ${scrolled && "text-yellow-500"}`} 
            />
            <FiMoon 
                className={`absolute right-2 text-md 
                    ${!scrolled && theme === "dark" ? "text-white" : "text-black"} 
                    ${scrolled && theme === "dark" ? "text-white" : "text-black"} 
                `} 
            />
        </button>
    );
};
