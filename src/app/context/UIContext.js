"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showBar, setShowBar] = useState(false);
    const [isSavedJobsMenuOpen, setIsSavedJobsMenuOpen] = useState(false);
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleSavedJobsMenu = () => setIsSavedJobsMenuOpen((prev) => !prev);
    const toggleFilters = () => setIsFiltersVisible((prev) => !prev); 

    const toggleBodyScroll = (isOpen) => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    useEffect(() => {
        toggleBodyScroll(isSavedJobsMenuOpen || isMenuOpen);
    }, [isSavedJobsMenuOpen, isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 40);
            setShowBar(scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const updateUI = () => {
            if (!mediaQuery.matches) {
                setIsFiltersVisible(false);
            }

            if (isFiltersVisible && mediaQuery.matches) {
                document.documentElement.style.scrollPaddingTop = "331px";
            } else {
                document.documentElement.style.scrollPaddingTop = mediaQuery.matches
                    ? "208px"
                    : "110px";
            }
        };

        updateUI();

        mediaQuery.addEventListener("change", updateUI);

        return () => {
            mediaQuery.removeEventListener("change", updateUI);
        };
    }, [isFiltersVisible]);

    return (
        <UIContext.Provider
            value={{
                isMenuOpen,
                toggleMenu,
                scrolled,
                showBar,
                isSavedJobsMenuOpen,
                toggleSavedJobsMenu,
                isFiltersVisible,         
                toggleFilters,            
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

export const useUIContext = () => useContext(UIContext);
