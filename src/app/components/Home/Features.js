"use client";

import React, { useState, useEffect } from "react";
import { TfiBolt, TfiLightBulb, TfiIdBadge } from "react-icons/tfi";
import { motion } from "framer-motion";

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isHovered && isLargeScreen) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, isLargeScreen]);

    return (
        <motion.div className="w-full  mx-auto z-10 flex justify-center items-center">
            <motion.div className="w-full mx-auto flex flex-col items-start justify-start gap-6">
                {[TfiBolt, TfiLightBulb, TfiIdBadge].map((Icon, index) => (
                    <motion.div
                        key={index}
                        className={`w-full mx-auto border-l-[10px] border-yellow-500 p-7  cursor-pointer transition-all duration-300 rounded-md ${isLargeScreen ? "bg-gray-50 bg-opacity-10 text-white" : "bg-white text-black"}`}
                        animate={isLargeScreen ? { scale: activeIndex === index ? 1.03 : 1 } : {}}
                        whileHover={isLargeScreen ? { scale: 1.03, transition: { duration: 0.1, ease: "easeInOut" } } : {}}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={isLargeScreen ? {
                            backgroundColor: activeIndex === index ? "rgba(255, 255, 255, 0.95)" : undefined,
                            color: activeIndex === index ? "rgba(0, 0, 0, 0.95)" : undefined,
                            zIndex: activeIndex === index ? "99" : undefined,
                        } : { backgroundColor: "white", color: "black" }}
                        onHoverStart={() => {
                            if (isLargeScreen) {
                                setIsHovered(true);
                                setActiveIndex(index);
                            }
                        }}
                        onHoverEnd={() => isLargeScreen && setIsHovered(false)}
                    >
                        <div className="w-full max-w-[95%] mx-auto">
                            <div className="w-full flex  items-center gap-3 mb-4">
                                <Icon className="text-md md:text-sm lg:text-xl" />
                                <h3 className="text-[11px] md:text-xxs font-semibold">
                                    {["RECHERCHE SIMPLIFIÉE", "SÉLECTION SUR CRITÈRES", "KEYS ESPACE"][index]}
                                </h3>
                            </div>
                            <p className="text-[10px]">
                                {[
                                    "Accédez rapidement aux offres qui correspondent à votre profil grâce à un moteur de recherche intuitif et optimisé.",
                                    "Affinez vos résultats en appliquant des filtres précis selon vos critères : localisation, secteur, type de contrat, et bien plus.",
                                    "Créez un compte personnel pour suivre vos candidatures, sauvegarder vos offres préférées et gérer vos informations facilement.",
                                ][index]}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Features;
