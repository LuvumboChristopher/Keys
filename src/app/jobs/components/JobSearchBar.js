"use client";

import React from "react";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";

const JobSearchBar = ({ location, setLocation }) => {
    return (
        <div className="container flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer text-sm">
        <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
            <TfiSearch className="text-xl text-black" />
            <input
                placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                className="w-full px-3 py-7 text-black bg-white focus:outline-none"
            />
        </div>
        <div className="bg-black h-8 w-px mx-4"></div>
        <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
            <TfiLocationArrow className="text-xl text-black" />
            <input
                className="w-full px-3 py-7 text-black bg-white focus:outline-none"
                placeholder="Sélectionner un lieu"
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                />
        </div>
        <button className="w-auto block mx-auto flex items-center justify-center bg-yellow-500 hover:text-black px-5 py-7 font-semibold text-white lg:border-l border-black transition-all duration-500">
            <TfiWand className="mr-4" />
            <span className="whitespace-nowrap">Explorer les jobs</span>
        </button>
    </div>
    );
};

export default JobSearchBar;

