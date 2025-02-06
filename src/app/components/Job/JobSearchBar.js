"use client"

import React, { useRef, useEffect } from "react";
import { TfiSearch, TfiLocationArrow } from "react-icons/tfi";
import { useSearch } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { IoReload } from "react-icons/io5";
import { motion } from 'framer-motion';

const JobSearchBar = () => {
    const { jobTitle, setJobTitle, location, setLocation, handleSearch, handleRemoveFilter, getUserLocation } = useSearch();
    const router = useRouter();
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    const handleClearJobTitle = () => {
        setJobTitle("");
        router.push("/jobs");
    };

    const handleClearLocation = () => {
        setLocation("");
        router.push("/jobs");
    };

    const handleRemoveAllFilters = () => {
        handleRemoveFilter();
    };

    const handleSearchAndScroll = () => {
        handleSearch();
        if (window.innerWidth < 768 || (window.innerWidth >= 1024 && window.innerWidth < 1280)) {
            setTimeout(() => {
                const offresSection = document.getElementById("offresdemploi");
                if (offresSection) {
                    offresSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
    };


    return (
        <section className="lg:dark:bg-gray-900 pt-3">
            <div className="container flex items-start flex-col w-full gap-2 justify-center ">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex items-center gap-5 py-5 border-b md:hidden md:py-0 "
                >
                    <TfiSearch className="dark:text-white text-base" />
                    <h2 className="dark:text-white text-base text-left font-semibold ">Recherche d&#39;emplois</h2>
                </motion.div>
                <div className="w-full pt-5 mx-auto flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row flex-row items-center duration-300">
                    <div className="w-full relative dark:bg-gray-100 bg-white border-b lg:border px-5 lg:px-10 flex items-center group lg:focus-within:border-gray-300 rounded-xl overflow-hidden shadow-sm">
                        <TfiSearch className="text-md text-gray-700" />
                        <input
                            ref={firstInputRef}
                            placeholder="Indiquez un métier"
                            className="w-full dark:bg-gray-100 px-6 py-5 text-xxs xl:text-xs text-gray-800 focus:outline-none text-sm"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                        {jobTitle && (
                            <button
                                onClick={handleClearJobTitle}
                                className="absolute right-5 text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    <div className="w-full dark:bg-gray-100  bg-white border-b lg:border px-5 lg:px-10 flex items-center lg:focus-within:border-gray-300 relative rounded-xl overflow-hidden shadow-sm">
                        <TfiLocationArrow className="text-md text-gray-700" />
                        <input
                            className="w-full dark:bg-gray-100 px-6 py-5 text-xxs xl:text-xs text-gray-800 focus:outline-none text-sm"
                            placeholder="Sélectionnez un lieu"
                            value={location}
                            onChange={(e) => setLocation(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                        {location && (
                            <button
                                onClick={handleClearLocation}
                                className="absolute right-5 text-gray-500 hover:text-gray-800"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    <button
                        onClick={handleRemoveAllFilters}
                        className="hidden lg:block bg-white lg:border-[1px] p-5 text-gray-500 rounded-xl hover:text-black hover:bg-gray-200 focus:outline-none shadow-sm"
                    >
                        <IoReload className="text-lg" />
                    </button>
                    <button
                        onClick={handleSearchAndScroll}
                        className="w-full md:w-max block text-sm mx-auto flex items-center justify-center bg-yellow-500 text-black py-5 text-xxs xl:text-xs px-20 hover:bg-black dark:hover:bg-gray-50 dark:hover:text-black hover:text-white border-black transition-all duration-500 cursor-pointer rounded-xl overflow-hidden whitespace-nowrap "
                    >
                        Consultez nos offres
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JobSearchBar;
