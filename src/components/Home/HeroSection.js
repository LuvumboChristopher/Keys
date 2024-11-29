import React, { useState, useEffect, useMemo, useRef } from "react";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import { CallToAction } from "./CallToAction";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";
import Link from "next/link";

const HeroSection = () => {
    const jobs = useMemo(() => [
        "Téléconseiller !",
        "Développeur !",
        "Designer !",
        "Manager !",
        "Commercial !",
        "Ingénieur !",
        "Technicien de maintenance !",
        "Responsable RH !",
        "Chauffeur-livreur !",
        "Infirmier !",
        "Électricien !",
        "Plombier !",
        "Chef de projet !",
        "Data Analyst !",
        "Consultant !",
        "Agent immobilier !",
        "Comptable !",
        "Assistant administratif !",
        "Technicien informatique !",
        "Graphiste !",
        "Professeur !",
        "Pharmacien !",
        "Juriste !"
    ], []);
    const [currentJob, setCurrentJob] = useState("");
    const [jobIndex, setJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorBlink, setCursorBlink] = useState(true);
    const [location, setLocation] = useState("");
    const firstInputRef = useRef(null);

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
        <>
            <section
                className="bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center pt-[165px] pb-24 relative z-10"
                style={{ backgroundImage: "url(/images/clouds.svg)" }}
            >
                <div className="w-full max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto">
                    <motion.div
                        className="relative w-full text-left flex flex-col items-center mb-8"
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <motion.img
                            loading="lazy"
                            alt="Keys"
                            src="/images/keyslogos/Keys-logo-black-yellow.svg"
                            className="w-[200px] md:w-66 lg:w-[270px]"
                        />
                    </motion.div>
                    <div className="w-full mx-auto">
                        <motion.div
                            className="w-full max-w-5xl  mx-auto  mx-auto pt-3 pb-7"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="w-full flex gap-3 flex-row items-center duration-300 cursor-pointer space-y-8 lg:space-y-0">
                                <div className="w-full border-b lg:border rounded-3xl px-5 flex items-center group focus-within:border-gray-400">
                                    <TfiSearch className="text-lg text-gray-700" />
                                    <input
                                        ref={firstInputRef}
                                        placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                        className="w-full px-3 py-[28px] text-gray-800 focus:outline-none text-sm"
                                    />
                                </div>
                                <div className="w-full border-b lg:border rounded-3xl px-5 flex items-center focus-within:border-gray-400">
                                    <TfiLocationArrow className="text-lg text-gray-700" />
                                    <input
                                        className="w-full px-3 py-[28px] text-gray-800 focus:outline-none text-sm"
                                        placeholder="Sélectionner un lieu"
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <Link className="w-1/2 mx-auto group" href="/jobs">
                                    <button className="w-max flex  justify-center items-center gap-2 hover:gap-4 text-md text-center mx-auto px-6 py-[19px]  bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-400 group rounded-3xl overflow-hidden">
                                        <span className="group-hover:scale-125 text-3xl transition-all duration-400">👊 </span>
                                        <span>C&#39;est parti ! </span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.p
                    className="container text-lg sm:text-2xl lg:text-3xl text-center antialiased tracking-tight pt-6"
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
