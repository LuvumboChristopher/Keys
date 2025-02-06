"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

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

    return (
        <button
            className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-500 rounded-full p-1 transition-colors duration-300 cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <motion.div
                className="absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                animate={{ x: theme === "dark" ? 32 : 0 }}
                initial={false} 
            />
            <FiSun className="absolute left-2 text-yellow-500 text-md" />
            <FiMoon className="absolute right-2 text-gray-500 dark:text-white text-md" />
        </button>
    );
};
