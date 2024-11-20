"use client";

import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AgencesSection = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isIntersecting = entry.isIntersecting;

                    if (entry.target === elementRef1.current) {
                        setIsVisible1(isIntersecting);
                    }

                    if (entry.target === elementRef2.current) {
                        setIsVisible2(isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element1 = elementRef1.current;
        const element2 = elementRef2.current;

        if (element1) observer.observe(element1);
        if (element2) observer.observe(element2);

        return () => {
            if (element1) observer.unobserve(element1);
            if (element2) observer.unobserve(element2);
        };
    }, []);

    return (
        <section className="py-14">
            <div className="flex gap-10 container py-8">
                <div className="w-4/6 mx-auto">
                    {/* Encabezado animado */}
                    <motion.h1
                        className="text-2xl md:text-4xl font-extrabold text-left pb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{
                            y: isVisible1 ? 0 : -20,
                            opacity: isVisible1 ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={elementRef1}
                    >
                        KEYS, toujours à vos côtés !
                    </motion.h1>

                    {/* Contenido con animaciones */}
                    <div className="space-y-6 text-justify">
                        <motion.h2
                            className="text-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible1 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nos agences, à deux pas de{" "}
                            <motion.span
                                className="flex items-center px-1 bg-yellow-500 cursor-pointer"
                                style={{ display: "inline-block" }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                chez vous
                            </motion.span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible1 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Avec nos agences situées à Lyon et Toulouse, Keys est
                            déjà proche de vous. Nous nous engageons à vous
                            offrir un service de qualité et de proximité, afin
                            de répondre rapidement à vos besoins.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible1 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nous avons de grandes ambitions pour l"avenir et
                            bientôt, vous pourrez trouver nos agences dans
                            d"autres grandes villes à travers la France. Restez
                            à l"écoute pour plus de nouvelles !
                        </motion.p>
                    </div>

                    {/* Animaciones de las agencias */}
                    <div className="flex gap-12 py-6">
                        {/* Agencia de Lyon */}
                        <motion.div
                            className="agence-item"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{
                                opacity: isVisible2 ? 1 : 0,
                                x: isVisible2 ? 0 : -50,
                            }}
                            transition={{ duration: 0.5 }}
                            ref={elementRef2}
                        >
                            <FaBuilding className="text-2xl text-white mr-6" />
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold pb-2">
                                    <span className="group-hover:scale-125 text-xl transition-all duration-400">
                                        📍
                                    </span>
                                    Agence de
                                    <motion.span
                                        className="px-2 bg-black text-white cursor-pointer"
                                        style={{ display: "inline-block" }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        Lyon
                                    </motion.span>
                                </h3>
                                <a
                                    href="https://www.google.com/maps?q=143+Cr+Émile-Zola,+69100+Villeurbanne"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md hover:text-yellow-500"
                                >
                                    143 Cr Émile-Zola, 69100 Villeurbanne
                                </a>
                                <a
                                    href="tel:+33491901835"
                                    className="text-md block group"
                                >
                                    Tél:{" "}
                                    <span className="group-hover:text-yellow-500">
                                        04 91 90 18 35
                                    </span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Agencia de Toulouse */}
                        <motion.div
                            className="agence-item"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: isVisible2 ? 1 : 0,
                                x: isVisible2 ? 0 : 50,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaBuilding className="text-2xl text-white mr-6" />
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold pb-2">
                                    <span className="group-hover:scale-125 text-xl transition-all duration-400">
                                        📍
                                    </span>
                                    Agence de{" "}
                                    <motion.span
                                        className="px-3 bg-black text-white cursor-pointer"
                                        style={{ display: "inline-block" }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        Toulouse
                                    </motion.span>
                                </h3>
                                <a
                                    href="https://www.google.com/maps?q=52+Bd+Déodat+de+Sévérac,+31300+Toulouse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md hover:text-yellow-500"
                                >
                                    52 Bd Déodat de Sévérac, 31300 Toulouse
                                </a>
                                <a
                                    href="tel:+33561804950"
                                    className="text-md block group"
                                >
                                    Tél:{" "}
                                    <span className="group-hover:text-yellow-500">
                                        05 61 80 49 50
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-2/6 flex items-center justify-center mx-auto rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 ">
                    <motion.img
                        src="/images/country.svg"
                        alt="France Icon"
                        className="w-full h-auto transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AgencesSection;
