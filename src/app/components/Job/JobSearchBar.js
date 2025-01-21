"use client"

import React, { useRef, useEffect } from "react";
import { TfiSearch, TfiLocationArrow } from "react-icons/tfi";
import { useSearch } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { IoReload } from "react-icons/io5";

const JobSearchBar = () => {
    const { jobTitle, setJobTitle, location, setLocation, handleSearch, handleRemoveFilter, getUserLocation,
    } = useSearch();
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


    return (
        <div className="w-full xl:m-auto py-3 mx-auto flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row flex-row items-center duration-300 cursor-pointer">
            <div className="w-full relative bg-white border-b lg:border px-5 lg:px-10 flex items-center group lg:focus-within:border-gray-400 rounded-xl overflow-hidden shadow-sm">
                <TfiSearch className="text-md text-gray-700" />
                <input
                    ref={firstInputRef}
                    placeholder="Indiquez un métier"
                    className="w-full px-6 py-5 text-xxs xl:text-xs text-gray-800 focus:outline-none text-sm"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value.replace(/\b\w/g, (char) => char.toUpperCase()))}
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
            <div className="w-full bg-white border-b lg:border px-5 lg:px-10 flex items-center lg:focus-within:border-gray-400 relative rounded-xl overflow-hidden shadow-sm">
                <TfiLocationArrow className="text-md text-gray-700" />
                <input
                    className="w-full px-6 py-5 text-xxs xl:text-xs text-gray-800 focus:outline-none text-sm"
                    placeholder="Sélectionnez un lieu"
                    value={location}
                    onChange={(e) => setLocation(e.target.value.replace(/\b\w/g, (char) => char.toUpperCase()))}
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
                onClick={handleSearch}
                className="w-full md:w-max block text-sm mx-auto flex items-center justify-center bg-yellow-500 text-black py-5 text-xxs xl:text-xs px-20 hover:bg-black hover:text-white border-black transition-all duration-500 cursor-pointer rounded-xl overflow-hidden whitespace-nowrap shadow-sm"
            >
                Consultez nos offres
            </button>
        </div>
    );
};

export default JobSearchBar;
