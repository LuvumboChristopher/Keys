"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
    TfiBolt, TfiLightBulb, TfiIdBadge
} from "react-icons/tfi";
import { motion } from "framer-motion";

const Features = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <motion.div
            className="w-full mx-auto z-10 flex justify-center items-center "
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="w-full mx-auto  flex flex-col items-start justify-start gap-6">
                {[TfiBolt, TfiLightBulb, TfiIdBadge].map((Icon, index) => (
                    <motion.div
                        key={index}
                        className="w-full mx-auto border-l-[10px] border-yellow-500 p-5 cursor-pointer transition-all duration-300 rounded-md bg-gray-50 bg-opacity-10 text-white"
                        variants={itemVariants}
                        animate={{
                            scale: activeIndex === index ? 1.03 : 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.1, ease: "easeInOut" },
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundColor: activeIndex === index && "rgba(255, 255, 255, 0.95)",
                            color: activeIndex === index && "rgba(0, 0, 0, 0.95)",
                            zIndex: activeIndex === index && "99",

                        }}

                        onHoverStart={() => {
                            setIsHovered(true);
                            setActiveIndex(index);
                        }}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        <div className="w-full max-w-[95%] mx-auto ">
                            <div className="w-full flex items-center gap-3 mb-3">
                                <Icon className="text-xl" />
                                <h3 className="text-xxs font-semibold">
                                    {["RECHERCHE SIMPLIFIÉE", "SÉLECTION SUR CRITÈRES", "KEYS ESPACE"][index]}
                                </h3>
                            </div>
                            <p className="text-[11px] ">
                                {[
                                    "Obtenez en un instant toutes les informations essentielles concernant le poste.",
                                    "Explorez les environnements de travail et choisissez selon vos critères.",
                                    "Enregistrez-vous gratuitement et suivez vos candidatures.",
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
