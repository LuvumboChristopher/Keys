"use client";
import React, { useState, useEffect } from "react";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import { CallToAction } from "./CallToAction";

const HeroSection = () => {
    const jobs = ["Téléconseiller !", "Développeur !", "Designer !", "Manager !", "Commercial !"];
    const [currentJob, setCurrentJob] = useState("");
    const [jobIndex, setJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorBlink, setCursorBlink] = useState(true);

    const [query, setQuery] = useState("");
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
    }, [charIndex, isDeleting, jobIndex]);

    useEffect(() => {
        const cursorTimeout = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorTimeout);
    }, []);

    return (
        <>
            <section
                className="bg-cover bg-bottom bg-no-repeat flex flex-col items-center justify-center pt-24 pb-16 lg:py-[120px] relative z-10 "
                style={{ backgroundImage: "url(/images/clouds.svg)" }}
            >
                <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto ">

                    {/* Logo y llave */}
                    <motion.div
                        className="relative w-full text-center flex flex-col items-center pb-8 md:pb-6 mt-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div className="absolute flex items-center justify-center top-14">
                            <FaKey className="text-yellow-500 text-6xl md:text-6xl lg:text-7xl" />
                        </motion.div>
                        <motion.img
                            loading="lazy"
                            alt="Keys"
                            src="/images/keyslogos/Keys-logo-black-yellow.svg"
                            className="w-[220px] md:w-66 lg:w-[240px]"
                        />
                    </motion.div>

                    {/* Texto principal */}
                    <div className="w-full mx-auto px-4">
                        <div className="mb-6 text-center">
                            <motion.h1
                                className="text-2xl md:text-2xl lg:text-3xl font-semibold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Trouvez votre futur job facilement&nbsp;!
                            </motion.h1>
                        </div>

                        {/* Inputs y botón de enviar */}
                        <motion.div
                            className="w-full flex flex-col py-4 md:flex-row gap-4 items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Input para el trabajo */}
                            <div className="w-full p-4 flex items-center gap-4 bg-white border border-black rounded-2xl">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0,0H24V24H0Z" fill="none"></path>
                                    <path
                                        d="M16.741,14.573,12.8,10.613a6.307,6.307,0,0,0,1.57-4.153A6.586,6.586,0,0,0,7.675,0,6.586,6.586,0,0,0,.984,6.46a6.586,6.586,0,0,0,6.691,6.46,6.784,6.784,0,0,0,3.833-1.169l3.974,3.991a.9.9,0,0,0,1.234.023A.823.823,0,0,0,16.741,14.573ZM7.675,1.685A4.868,4.868,0,0,1,12.621,6.46a4.868,4.868,0,0,1-4.946,4.775A4.868,4.868,0,0,1,2.73,6.46,4.868,4.868,0,0,1,7.675,1.685Z"
                                        transform="translate(3.016 4)"
                                    ></path>
                                </svg>
                                <input
                                    className="w-full bg-transparent text-black focus:outline-none"
                                    placeholder="Indiquer un métier"
                                    name="query"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>

                            {/* Input para la ubicación */}
                            <div className="w-full p-4 flex items-center gap-4 bg-white border border-black rounded-2xl">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="24" fill="none"></rect>
                                    <g id="gps">
                                        <path
                                            d="M172.892,168.7a4.17,4.17,0,1,0,4.17,4.17A4.174,4.174,0,0,0,172.892,168.7Zm0,6.9a2.734,2.734,0,1,1,2.735-2.734A2.737,2.737,0,0,1,172.892,175.6Zm0,0"
                                            transform="translate(-160.898 -160.869)"
                                        ></path>
                                        <path
                                            d="M23.3,11.3H20.716A8.768,8.768,0,0,0,12.7,3.272V.7a.7.7,0,1,0-1.406,0V3.272A8.768,8.768,0,0,0,3.271,11.3H.7A.7.7,0,0,0,.7,12.7H3.271a8.768,8.768,0,0,0,8.02,8.025V23.3a.7.7,0,1,0,1.406,0V20.728a8.768,8.768,0,0,0,8.02-8.025H23.3a.7.7,0,0,0,0-1.407Zm-11.3,8.053A7.35,7.35,0,1,1,19.339,12,7.356,7.356,0,0,1,11.994,19.35Zm0,0"
                                        ></path>
                                    </g>
                                </svg>
                                <input
                                    className="w-full bg-transparent text-black focus:outline-none"
                                    placeholder="Sélectionner un lieu"
                                    name="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            {/* Botón de enviar */}
                            <button className="w-full  md:w-96 bg-yellow-500 text-white font-semibold px-6 p-4 rounded-2xl hover:bg-black hober:text-white transition duration-300 shadow-lg">
                                C'est partie !
                            </button>
                        </motion.div>
                    </div>
                </div>
                <motion.p
                className="container text-xl md:text-3xl text-center  pt-6 md:pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Aujourd'hui je veux être <span className="text-yellow-500">{currentJob}</span>
                <span className="text-black">{cursorBlink ? "|" : " "}</span>
            </motion.p>
            </section>
            
            <CallToAction/>

        </>
    );
};

export default HeroSection;
