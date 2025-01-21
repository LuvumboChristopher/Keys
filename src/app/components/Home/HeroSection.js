"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from './CallToAction';
import { TfiLocationArrow, TfiSearch } from 'react-icons/tfi';
import { useSearch } from '@/app/context/SearchContext';

const HeroSection = () => {
    const jobs = useMemo(() => [
        "Téléconseiller !", "Développeur !", "Designer !", "Manager !", "Commercial !", "Ingénieur !", "Technicien de maintenance !",
        "Responsable RH !", "Chauffeur-livreur !", "Infirmier !", "Électricien !", "Plombier !", "Chef de projet !", "Data Analyst !",
        "Consultant !", "Agent immobilier !", "Comptable !", "Assistant administratif !", "Technicien informatique !", "Graphiste !",
        "Professeur !", "Pharmacien !", "Juriste !"
    ], []);
    const [currentJob, setCurrentJob] = useState("");
    const [jobIndex, setJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorBlink, setCursorBlink] = useState(true);
    const firstInputRef = useRef(null);

    const { jobTitle, setJobTitle, location, setLocation, handleSearch } = useSearch();

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

    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    return (
        <div className="min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-185px)] bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center relative z-10"
                style={{ backgroundImage: "url(/images/clouds.svg)" }}
            >
                <div className="w-full max-w-xl md:max-w-4xl xl:max-w-7xl mx-auto pt-8">
                    <div className="w-full mx-auto">
                        <motion.div
                            className="relative w-full text-center flex flex-col items-center pb-8"
                            initial={{ opacity: 0, y: -60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <motion.img
                                loading="lazy"
                                alt="Keys"
                                src="/images/keyslogos/Keys-logo-black-yellow.svg"
                                className="w-[140px] lg:w-[180px]"
                            />
                        </motion.div>
                        <motion.div
                            className="container pb-8"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="w-full md:w-[450px] mx-auto flex flex-col items-center duration-300 cursor-pointer space-y-5">
                                <div className="w-full relative border rounded-2xl px-5 flex items-center group focus-within:border-gray-400">
                                    <TfiSearch className="text-lg text-gray-700" />
                                    <input
                                        ref={firstInputRef}
                                        placeholder="Indiquez un métier"
                                        className="w-full px-3 py-5 text-gray-800 focus:outline-none text-sm text-center"
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value.replace(/\b\w/g, (char) => char.toUpperCase()))}
                                    />
                                    {jobTitle && (
                                        <button
                                            onClick={() => setJobTitle("")}
                                            className="absolute right-5 text-red-500 hover:text-gray-800"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <div className="w-full relative border rounded-2xl px-5 flex items-center focus-within:border-gray-400">
                                    <TfiLocationArrow className="text-lg text-gray-700" />
                                    <input
                                        className="w-full px-3 py-5 text-gray-800 focus:outline-none text-sm text-center"
                                        placeholder="Sélectionnez un lieu"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value.replace(/\b\w/g, (char) => char.toUpperCase()))}
                                    />
                                    {location && (
                                        <button
                                            onClick={() => setLocation("")}
                                            className="absolute right-5 text-red-500 hover:text-gray-800"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleSearch}
                                    className="w-full mx-auto group"
                                >
                                    <div className="w-full flex justify-center items-center gap-3 hover:gap-4 text-sm text-center mx-auto px-6 py-5 bg-black text-white font-semibold hover:bg-white hover:text-black hover:outline outline-gray-400 transition-all group rounded-2xl overflow-hidden">
                                        <span>Consultez nos offres</span>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.p
                        className="container text-md sm:text-lg lg:text-xl text-center antialiased tracking-tight pt-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        Aujourd&#39;hui je veux être
                        <span className="text-yellow-500 ml-2">{currentJob}</span>
                        <span className="text-black">{cursorBlink ? "|" : " "}</span>
                    </motion.p>
                </div>
            </motion.div>
            <CallToAction />
        </div>
    );
};

export default HeroSection;
