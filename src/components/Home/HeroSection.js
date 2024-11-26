"use client";
import React, { useState, useEffect, useMemo } from "react";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import { CallToAction } from "./CallToAction";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";

const HeroSection = () => {
    const jobs = useMemo(() => ["Téléconseiller !", "Développeur !", "Designer !", "Manager !", "Commercial !"], []);
    const [currentJob, setCurrentJob] = useState("");
    const [jobIndex, setJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorBlink, setCursorBlink] = useState(true);

    const [location, setLocation] = useState("");
    useEffect(() => {
        const typingSpeed = isDeleting ? 120 : 150;
        const delay = isDeleting && charIndex === 0 ? 1000 : typingSpeed;
    
        const typeTimeout = setTimeout(() => {
            const job = jobs[jobIndex];
            if (!isDeleting && charIndex < job.length) {
                setCurrentJob(job.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentJob(job.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === job.length) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setJobIndex((jobIndex + 1) % jobs.length);
            }
        }, delay);
    
        return () => clearTimeout(typeTimeout);
    }, [charIndex, isDeleting, jobIndex, jobs]);

    useEffect(() => {
        const cursorTimeout = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorTimeout);
    }, []);

    return (
        <>
            <section
                className="bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center py-[100px] relative z-10"
                style={{ backgroundImage: "url(/images/clouds.svg)" }}
            >
                <div className="w-full max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                    <motion.div
                        className="relative w-full text-center flex flex-col items-center pb-8 mt-4 lg:mt-14"
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <motion.div className="absolute flex items-center justify-center top-[65px]">
                            <FaKey className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl" />
                        </motion.div>
                        <motion.img
                            loading="lazy"
                            alt="Keys"
                            src="/images/keyslogos/Keys-logo-black-yellow.svg"
                            className="w-[200px] md:w-66 lg:w-[260px]"
                        />
                    </motion.div>
                    <div className="w-full mx-auto px-4">
                        <div className="mb-2 text-center">
                            <motion.h1
                                className="text-lg md:text-lg lg:text-xl font-semibold"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                Trouvez votre futur job facilement !
                            </motion.h1>
                        </div>
                        <motion.div
                            className="flex justify-center lg:py-2 lg:mt-2 "
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-white lg:pl-6 lg:border lg:hover:scale-105 duration-300 cursor-pointer lg:rounded-xl overflow-hidden space-y-8 lg:space-y-0">
                                <div className="w-full lg:w-3/5 border-b lg:border-none flex items-center">
                                    <TfiSearch className="text-xl text-gray-700" />
                                    <input
                                        placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                        className="w-full px-3 py-6 text-gray-800 focus:outline-none text-sm lg:text-base"
                                    />
                                </div>
                                <div className="hidden lg:block bg-gray-500 h-1/2 w-0.5 mx-4"></div>
                                <div className="w-full lg:w-3/5 border-b lg:border-none flex items-center">
                                    <TfiLocationArrow className="text-xl text-gray-700" />
                                    <input
                                        className="w-full px-3 py-6 text-gray-800 focus:outline-none text-sm lg:text-base"
                                        placeholder="Sélectionner un lieu"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <button className="w-full lg:w-1/2 text-sm lg:text-base mx-auto flex items-center justify-center hover:bg-yellow-500 hover:text-black py-5 lg:py-6 font-semibold bg-black text-white lg:border-l-2 border-black transition-all duration-500 rounded-lg lg:rounded-none">
                                    <TfiWand className="mr-4" />
                                    Explorer les jobs
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.p
                    className="container text-xl sm:text-2xl lg:text-3xl text-center antialiased tracking-tight pt-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Aujourd&#39;hui je veux être
                    <span className="text-yellow-500 ml-2">{currentJob}</span>
                    <span className="text-black">{cursorBlink ? "|" : " "}</span>
                </motion.p>
            </section>
            <CallToAction />
        </>
    );
};

export default HeroSection;
