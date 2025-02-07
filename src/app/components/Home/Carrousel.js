"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSearch } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cities } from "@/app/utils/cities";

const Carousel = () => {
    const { setLocation, handleSearch } = useSearch();
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleCityClick = (cityName) => {
        setLocation(cityName);
        handleSearch();
        router.push(`/jobs?location=${encodeURIComponent(cityName)}`);
    };
    const handleImageClick = (index) => {
        if (index === currentIndex) {
            handleCityClick(cities[currentIndex].name);
        } else {
            setCurrentIndex(index);
        }
    };
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
    };
    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + cities.length) % cities.length
        );
    };
    return (
        <div className="lg:hidden w-[90%] sm:w-full mx-auto overflow-hidden relative flex justify-center items-center pb-12">
            <div className="w-full  sm:w-max relative flex items-center justify-center ">
                <div
                    className="absolute transition-all duration-1000 ease-in-out transform z-0"
                    style={{
                        transform: `translateX(-110%)`,
                    }}
                >
                    <div
                        key={currentIndex - 1}
                        onClick={() => handleImageClick((currentIndex + 1) % cities.length)}
                        className="w-full sm:w-[430px] h-[240px] relative group overflow-hidden cursor-pointer shadow-lg rounded-2xl mx-2 md:mx-3"
                    >
                        <div className="h-[440px] sm:h-[240px] transition-all duration-300 md:group-hover:scale-105">
                        <img
                                width={1000}
                                height={1000}
                                src={cities[(currentIndex - 1 + cities.length) % cities.length].image}
                                alt={`city-${cities[(currentIndex - 1 + cities.length) % cities.length].name}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-55"></div>
                        <div className="absolute top-1/4 sm:top-1/3 flex w-full z-10">
                            <div className="relative max-w-[60%] sm:max-w-[80%] mx-auto text-center sm:text-left text-white group">
                                <h1
                                    className="text-2xl font-bold transition-all duration-300 md:group-hover:text-[26px]"
                                    style={{
                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    {cities[(currentIndex - 1 + cities.length) % cities.length].name}                                </h1>
                                <small className="block text-yellow-500 text-xxs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Voir les offres
                                </small>
                                <p className="text-xs mt-2 line-clamp-3">{cities[currentIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full sm:w-max transition-all duration-1000 ease-in-out transform z-10"
                    style={{
                        transform: `translateX(0%)`,
                    }}
                >
                    <div
                        key={currentIndex}
                        onClick={() => handleCityClick(cities[currentIndex].name)}
                        className="w-full mx-auto sm:w-[430px]  h-[240px] md:h-[280px] relative group overflow-hidden cursor-pointer shadow-lg rounded-2xl mx-2 md:mx-3"
                    >
                        <div className="h-[240px] sm:h-full transition-all duration-300 md:group-hover:scale-105">
                            <img
                                width={1000}
                                height={1000}
                                src={cities[currentIndex].image}
                                alt={`city-${cities[currentIndex].name}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-55"></div>
                        <div className="absolute top-1/4 sm:top-1/3 flex w-full z-10">
                            <div className="relative max-w-[60%] sm:max-w-[80%] mx-auto text-center sm:text-left text-white group">
                                <h1
                                    className="text-2xl font-bold transition-all duration-300 md:group-hover:text-[26px]"
                                    style={{
                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    {cities[currentIndex].name}
                                </h1>
                                <small className="block text-yellow-500 text-xxs md:opacity-0 py-2 md:py-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    Voir les offres
                                </small>
                                <p className="text-xxs mt-2 line-clamp-3">{cities[(currentIndex + cities.length) % cities.length].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute transition-all duration-1000 ease-in-out transform z-0"
                    style={{
                        transform: `translateX(110%)`,
                    }}
                >
                    <div
                        key={currentIndex + 1}
                        onClick={() => handleImageClick((currentIndex + 1) % cities.length)}
                        className="w-full sm:w-[430px] h-[240px] relative group overflow-hidden cursor-pointer shadow-lg rounded-2xl mx-2 md:mx-3"
                    >
                        <div className="h-[440px] sm:h-full transition-all duration-300 md:group-hover:scale-105">
                            <img
                                width={1000}
                                height={1000}
                                src={cities[(currentIndex + 1) % cities.length].image}
                                alt={`city-${cities[(currentIndex + 1) % cities.length].name}`}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-70 md:opacity-50 transition-opacity duration-500 group-hover:opacity-55"></div>
                        <div className="absolute top-1/4 sm:top-1/3 flex w-full z-10 ">
                            <div className="relative max-w-[60%] sm:max-w-[80%] mx-auto text-center sm:text-left text-white group">
                                <h1
                                    className="text-2xl font-bold transition-all duration-300 md:group-hover:text-[26px]"
                                    style={{
                                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    {cities[(currentIndex + 1 + cities.length) % cities.length].name}
                                </h1>
                                <small className="block text-yellow-500 text-xxs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Voir les offres
                                </small>
                                <p className="text-xs mt-2">{cities[(currentIndex + 1 + cities.length) % cities.length].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={prevImage}
                    className="absolute left-[15px] sm:left-[-40px] z-20 text-white bg-transparent sm:bg-black  p-2 rounded-full top-1/2 transform -translate-y-1/2"
                >
                    <FaArrowLeft className="text-xxs md:text-md" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-[15px] sm:right-[-40px] z-20 text-white bg-transparent sm:bg-black p-2 rounded-full top-1/2 transform -translate-y-1/2"
                >
                    <FaArrowRight className="text-xxs md:text-md" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
