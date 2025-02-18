"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { TfiSearch, TfiLocationArrow, TfiBolt, TfiLightBulb, TfiIdBadge } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/app/context/SearchContext";
import Features from "./Features";
import { heroImages } from "@/app/utils/heroImages";
import { metiers } from "@/app/utils/metiers";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const { jobTitle, setJobTitle, location, setLocation, handleSearch } = useSearch();
    const jobs = useMemo(() => metiers, []);

    const totalImages = heroImages.length;

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (e.target === firstInputRef.current) {
                secondInputRef.current.focus();
            }
            else if (e.target === secondInputRef.current) {
                handleSearch();
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 2000);

        return () => clearInterval(intervalId);
    }, [totalImages]);

    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
            }, 3500);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div className="w-full  mx-auto flex items-center justify-center">
            <motion.section
                className="w-full h-full mx-auto relative transition-transform transform duration-300 flex flex-col pt-[8.5rem] pb-[4.5rem] justify-center items-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
            >
                <AnimatePresence>
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        key={currentImage}
                        style={{ backgroundImage: `url(${heroImages[currentImage].src})` }}
                        initial={{ opacity: 0, scale: 1.01 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.01 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[#0a0a0a] opacity-[85%]"></div>
                <div className="max-w-[85%] xs:max-w-[80%] md:max-w-[90%] xl:max-w-[70%] 2xl:max-w-[55%] w-full h-full flex items-center justify-center">
                    <div
                        className="w-full z-10 h-full flex flex-col gap-10 md:flex-row lg:gap-16 2xl:gap-20 justify-center items-center"
                    >
                        <div
                            className="w-full md:w-[55%] lg:w-full flex flex-col items-center justify-center gap-3 md:max-w-xl xl:max-w-full mx-auto"
                        >
                            <motion.div
                                className="w-full mx-auto"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <div className=" flex flex-col items-start ">
                                    <motion.h1
                                        className="text-responsive-lg font-bold text-white shadow-text mb-[-35px]"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        Keys
                                    </motion.h1>

                                    <motion.h1
                                        className="flex items-center text-responsive-lg font-bold text-white shadow-text mb-[-35px]"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        Interim <span className="text-yellow-500 ml-2">&</span>
                                    </motion.h1>

                                    <motion.h1
                                        className="text-responsive-lg font-bold text-white shadow-text mb-[-20px]"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.9 }}
                                    >
                                        Recrutement
                                    </motion.h1>
                                </div>
                                <Image
                                    src="/images/keyslogos/Keys-logo-white-yellow.svg"
                                    alt="Keys"
                                    title="Keys"
                                    width={2000}
                                    height={2000}
                                    loading="lazy"
                                    className={`hidden transition-opacity ease-in-out w-[95px]  sm:w-[105px] md:w-[225px] }`}
                                    />
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    <motion.p
                                        className="text-xxs sm:text-xs space-x-1 text-white text-left shadow-text flex pt-4"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.8 }}
                                    >
                                        <span className="block sm:inline">Découvrez votre prochain</span>
                                        <span className="text-yellow-500 block sm:inline">emploi</span>
                                        <span className="block sm:inline">en toute</span>
                                        <span className="text-yellow-500 block sm:inline">simplicité</span>
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="w-full mx-auto flex flex-col items-center gap-4 duration-300 cursor-pointer pt-5"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                <div className="w-full relative border bg-white rounded-xl px-7 flex items-center group focus-within:border-gray-300">
                                    <TfiSearch className="text-md md:text-base text-gray-700" />
                                    <input
                                        ref={firstInputRef}
                                        placeholder="Indiquez un métier"
                                        className="w-full px-6 py-4 sm:py-5  lg:py-[18px]  text-gray-800 focus:outline-none text-xxs lg:text-xs text-center"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                                        onKeyDown={handleKeyDown}
                                    />
                                    {jobTitle && (
                                        <button
                                            onClick={() => setJobTitle("")}
                                            className="absolute right-5 text-gray-500 hover:text-gray-800"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <div className="w-full relative border bg-white rounded-xl px-7 flex items-center focus-within:border-gray-300">
                                    <TfiLocationArrow className="text-md md:text-base text-gray-700" />
                                    <input
                                        ref={secondInputRef}
                                        className="w-full px-6 py-4 sm:py-5  lg:py-[18px] text-gray-800 focus:outline-none text-xxs lg:text-xs text-center"
                                        placeholder="Sélectionnez un lieu"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                                        onKeyDown={handleKeyDown}
                                    />
                                    {location && (
                                        <button
                                            onClick={() => setLocation("")}
                                            className="absolute right-5 text-gray-500 hover:text-gray-800"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleSearch}
                                    className="w-full mx-auto group"
                                >
                                    <div className="w-full flex justify-center items-center gap-3 text-xxs lg:text-xs text-center mx-auto px-6 py-4 sm:py-5  lg:py-[18px] bg-yellow-500 text-black hover:bg-gray-100 hover:outline-[1px] hover:shadow-md hover:text-black transition-all duration-300 group rounded-xl overflow-hidden">
                                        Consultez nos offres
                                    </div>
                                </button>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-full pt-3">
                            <Features />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Hero;
