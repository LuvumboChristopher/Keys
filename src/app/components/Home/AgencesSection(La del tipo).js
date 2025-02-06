"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBuilding } from "react-icons/fa";
import { agencies } from "@/app/utils/agencies";

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
        <section id="nos-agences" className="dark:bg-gray-900 bg-gray-100 py-16">
            <div className="container lg:border-[1px] bg-white rounded-3xl md:px-10 md:py-14 bg-white flex flex-col md:flex-row-reverse items-start justify-center gap-10">
                <div className="w-full h-full xl:w-[70%] mx-auto flex flex-col lg:flex-col justify-between gap-6">
                    <div className="space-y-6 ">
                        <motion.h2
                            className="text-base md:text-lg md:text-xl lg:text-lg xl:text-2xl font-extrabold text-left"
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
                                className="flex items-center px-1 bg-yellow-500 cursor-pointer rounded-lg"
                                style={{ display: "inline-block" }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                chez vous
                            </motion.span>
                        </motion.h2>
                        <motion.p
                            className="w-full mr-auto text-left text-xs sm:text-sm lg:text-md text-black mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible1 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Avec nos agences situées à Lyon, Toulouse, Chambéry, Meyzieu, et Marne La Vallée, Keys est déjà proche de vous. Nous nous engageons à vous offrir un service de qualité et de proximité, afin de répondre rapidement à vos besoins.
                        </motion.p>
                        <motion.p
                            className="w-full mr-auto text-left text-xs sm:text-sm md:text-md text-black  mb-6"
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
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 py-6">
                        {agencies.map((agency, index) => (
                            <div key={index} className="w-full group  cursor-pointer">
                                <div className="w-full mx-auto text-left">
                                    <h1 className="flex items-center gap-1 pb-3 text-black text-sm md:text-md font-semibold transition-all duration-300 text-shadow-sm">
                                        <FaBuilding className="inline-block mr-2 text-md md:text-base" />
                                        Agence de {agency.name}
                                    </h1>
                                    <div className="text-black text-xs sm:text-sm">
                                        <a
                                            href={agency.mapLink}
                                            target="_blank"
                                            className="w-full inline-block hover:text-yellow-500"
                                        >
                                            {agency.address}
                                        </a><br />
                                        <a
                                            href={agency.phoneLink}
                                            target="_blank"
                                            className="w-full inline-block hover:text-yellow-500"
                                        >
                                            {agency.phone}
                                        </a><br />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block xl:w-max flex items-start xl:items-center justify-center mx-auto">
                    <motion.img
                        src="/images/country.svg"
                        alt="France Icon"
                        className="w-[310px] h-auto"
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