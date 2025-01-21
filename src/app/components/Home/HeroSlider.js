"use client";

import { useState, useEffect } from "react";
import { TfiSearch, TfiLightBulb, TfiIdBadge, TfiBolt } from "react-icons/tfi";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { src: "/images/heroslider/digger-machine-machinery-construction-162639.jpeg" },
        { src: "/images/heroslider/ouvrier-industriel-utilisant-une-meuleuse.jpeg" },
        { src: "/images/heroslider/pexels-photo-185039.webp" },
    ];

    const totalImages = images.length;

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3500);

        return () => clearInterval(intervalId);
    }, [totalImages]);

    return (
        <section className="relative transition-transform transform duration-300 py-28">
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[currentImage].src})`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                ></motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="absolute inset-0 bg-yellow-400 heropath"></div>
            <motion.div
                className="container flex items-star gap-10 relative z-10"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
            >
                <motion.div
                    className="flex flex-col justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div>
                        <motion.h1
                            className="text-6xl font-bold text-white shadow-text"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Keys
                        </motion.h1>
                        <motion.h1
                            className="text-6xl font-bold text-white shadow-text"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Interim <span className="text-yellow-500">&</span>
                        </motion.h1>
                        <motion.h1
                            className="text-6xl font-bold text-white shadow-text"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Recrutement
                        </motion.h1>
                        <motion.h2 className="text-sm pt-4 text-white text-left"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}>
                            Découvrez votre prochain{" "}
                            <motion.span className="text-yellow-500">emploi</motion.span> en toute{" "}
                            <motion.span className="text-yellow-500">simplicité</motion.span> !
                        </motion.h2>
                        <motion.div className="flex gap-2 pt-6"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}>
                            <CiCircleChevLeft
                                className="text-white text-4xl font-extrabold cursor-pointer hover:text-yellow-500"
                                aria-label="Previous slide"
                                onClick={prevImage}
                            />
                            <CiCircleChevRight
                                className="text-white text-4xl font-extrabold cursor-pointer hover:text-yellow-500"
                                aria-label="Next slide"
                                onClick={nextImage}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="pl-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="flex justify-start space-x-12 mb-12">
                        {[TfiBolt, TfiLightBulb, TfiIdBadge].map((Icon, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start space-y-6 cursor-pointer"
                                whileHover={{ scale: 0.95 }}
                            >
                                <Icon className="text-4xl cursor-pointer text-white pb-2" />
                                <h3 className="text-sm font-semibold text-white">
                                    {["RECHERCHE SIMPLIFIÉE", "SÉLECTION SUR CRITÈRES", "KEYS ESPACE"][
                                        index
                                    ]}
                                </h3>
                                <p className="text-gray-100 max-w-xs text-sm">
                                    {[
                                        "Obtenez en un instant toutes les informations essentielles concernant le poste.",
                                        "Explorez les environnements de travail et choisissez selon vos critères.",
                                        "Enregistrez-vous sans frais et suivez l'avancement de vos candidatures en toute simplicité.",
                                    ][index]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="flex justify-center shadow-lg rounded-3xl hover:scale-110 duration-200 cursor-pointer"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex items-center bg-white pl-6 rounded-3xl shadow-lg w-full">
                            <p className="text-xl text-gray-600">
                                <TfiSearch />
                            </p>
                            <input
                                type="search"
                                placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                className="w-full px-3 py-5 text-gray-800 focus:outline-none"
                            />
                            <button className="w-1/2 bg-yellow-500 text-black py-5 rounded-r-xl font-semibold hover:bg-black hover:text-white border-l-2 border-black transition-all duration-500">
                                Explorer les jobs
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSlider;
