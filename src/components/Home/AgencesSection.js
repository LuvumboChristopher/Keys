"use client";

import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
        <section id="nos-agences" className="pt-10">
            <div className="flex flex-col md:flex-row-reverse container">
                <div className="w-full md:w-2/3 lg:w-4/6 h-full mx-auto flex flex-col lg:flex-col space-between ">
                    <div className="p-6 space-y-6 text-justify">
                        <motion.h2
                            className="text-2xl md:text-3xl font-extrabold text-left"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{
                                y: isVisible1 ? 0 : -20,
                                opacity: isVisible1 ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            ref={elementRef1}
                        >
                            Nos agences, à deux pas de
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
                            Nous avons de grandes ambitions pour l&#39;avenir et
                            bientôt, vous pourrez trouver nos agences dans
                            d&#39;autres grandes villes à travers la France. Restez
                            à l&#39;écoute pour plus de nouvelles !
                        </motion.p>
                    </div>
                    <div className="p-6 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-12 sm:py-12 xl:py-14 ">
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
                                <Link
                                    href="https://www.google.com/maps?q=143+Cr+Émile-Zola,+69100+Villeurbanne"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md hover:text-yellow-500"
                                >
                                    143 Cr Émile-Zola, 69100 Villeurbanne
                                </Link>
                                <Link
                                    href="tel:+33491901835"
                                    className="text-md block group"
                                >
                                    Tél:{" "}
                                    <span className="group-hover:text-yellow-500">
                                        04 91 90 18 35
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="agence-item"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: isVisible2 ? 1 : 0,
                                x: isVisible2 ? 0 : 50,
                            }}
                            transition={{ duration: 0.5 }}
                        >
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
                                <Link
                                    href="https://www.google.com/maps?q=52+Bd+Déodat+de+Sévérac,+31300+Toulouse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md hover:text-yellow-500"
                                >
                                    52 Bd Déodat de Sévérac, 31300 Toulouse
                                </Link>
                                <Link
                                    href="tel:+33561804950"
                                    className="text-md block group"
                                >
                                    Tél:{" "}
                                    <span className="group-hover:text-yellow-500">
                                        05 61 80 49 50
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-96 lg:w-2/6 flex items-start xl:items-center justify-center mx-auto">
                    <motion.img
                        src="/images/country.svg"
                        alt="France Icon"
                        className="w-80 h-auto"
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
