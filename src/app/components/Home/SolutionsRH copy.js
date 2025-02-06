"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SolutionsRH = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === elementRef1.current) {
                        setIsVisible1(true);
                    }
                    if (entry.target === elementRef2.current) {
                        setIsVisible2(true);
                    }
                } else {
                    if (entry.target === elementRef1.current) {
                        setIsVisible1(false);
                    }
                    if (entry.target === elementRef2.current) {
                        setIsVisible2(false);
                    }
                }
            });
        }, { threshold: 0.1 });

        const element1 = elementRef1.current;
        const element2 = elementRef2.current;

        if (element1) {
            observer.observe(element1);
        }
        if (element2) {
            observer.observe(element2);
        }

        return () => {
            if (element1) {
                observer.unobserve(element1);
            }
            if (element2) {
                observer.unobserve(element2);
            }
        };
    }, []);

    return (
        <section className="bg-gray-50 border-t border-b"> 
            <div
                id="solutions-rh"
                className="container text-center sm:text-left flex flex-col lg:flex-row items-center justify-center py-8 xl:py-14 sm:space-y-10 lg:space-y-0 lg:gap-6 overflow-hidden"
            >
                <motion.section
                    ref={elementRef1}
                    className="w-full max-w-full md:w-4/5 lg:w-1/2 py-3 xl:p-0 flex flex-col sm:flex-row justify-center items-center sm:gap-6 md:gap-4 p-8"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: isVisible1 ? 1 : 0, x: isVisible1 ? 0 : -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full px-5 py-5 md:p-12">
                        <div className="w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center md:items-end justify-between">
                            <div>
                                <span className="text-5xl sm:text-6xl">🧑🏼‍🏭</span>
                                <h3 className="pt-2 text-xl sm:text-lg">Espace intérimaire</h3>
                            </div>
                        </div>
                        <p className="text-xxs sm:text-sm py-6">
                        Keys met ses compétences à votre disposition pour recruter les meilleurs talents pour vos missions temporaires. Grâce à notre expertise, nous vous offrons un service personnalisé et adapté à vos besoins spécifiques.
                        </p>
                        <Link
                            href="/https://www.keys-rh.fr/worker/security/login"
                            className="bg-black text-white text-xxs py-4 px-14 sm:px-16 border rounded-xl border-white hover:bg-transparent hover:text-black hover:border-black inline-block overflow-hidden"
                        >
                            J&#39;y vais !
                        </Link>
                    </div>
                </motion.section>
                <motion.section
                    ref={elementRef2}
                    className="w-full max-w-full md:w-4/5 lg:w-1/2 py-3 xl:px-14 xl:py-6 flex flex-col sm:flex-row justify-center items-center border bg-white rounded-xl "
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: isVisible2 ? 1 : 0, x: isVisible2 ? 0 : 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full px-10 py-5 md:p-12">
                        <div className="w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center md:items-end justify-between">
                            <div>
                                <span className="text-5xl sm:text-6xl">👨🏼‍💻</span>
                                <h3 className="pt-2 text-xl sm:text-lg">Espace Entreprise</h3>
                            </div>
                        </div>
                        <p className="text-xxs sm:text-sm py-6">
                        Nous proposons des solutions sur mesure pour répondre aux besoins de recrutement de votre entreprise. Notre équipe vous aide à trouver les talents parfaits et à intégrer efficacement ces ressources dans vos projets.
                        </p>
                        <Link
                            href="/https://www.keys-rh.fr/company/security/login"
                            className="bg-black text-white text-xxs py-4 px-14 sm:px-16 border rounded-xl border-white hover:bg-transparent hover:text-black hover:border-black inline-block overflow-hidden"
                        >
                            C&#39;est parti !
                        </Link>
                    </div>
                </motion.section>
            </div>
        </section>
    );
};

export default SolutionsRH;
