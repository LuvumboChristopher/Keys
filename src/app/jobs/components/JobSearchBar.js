"use client";

import React from "react";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";
import Link  from 'next/link';

const JobSearchBar = ({ location, setLocation }) => {
    return (

        <div className="w-full max-w-7xl py-7 mx-auto flex gap-4 flex-row items-center duration-300 cursor-pointer ">
            <div className="w-full bg-white border-b lg:border rounded-3xl px-10 flex items-center group focus-within:border-gray-400">
                <TfiSearch className="text-xl text-gray-700" />
                <input
                    placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                    className="w-full px-3 py-[31px] text-gray-800 focus:outline-none text-sm"
                />
            </div>
            <div className="w-full bg-white border-b lg:border rounded-3xl px-10 flex items-center focus-within:border-gray-400">
                <TfiLocationArrow className="text-xl text-gray-700" />
                <input
                    className="w-full px-3 py-[31px] text-gray-800 focus:outline-none text-sm"
                    placeholder="Sélectionner un lieu"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <Link className="block w-1/2" href="/jobs">
                <div className="w-full mt-1 block text-sm mx-auto flex items-center justify-center bg-yellow-500 text-black py-[31px]  px-10 font-semibold hover:bg-black hover:text-white border-black transition-all duration-500 rounded-3xl cursor-pointer">
                    <TfiWand className="mr-4" />
                    Explorer les jobs
                </div>
            </Link>
        </div>

    );
};

export default JobSearchBar;

