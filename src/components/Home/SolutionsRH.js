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
        <div className="container text-center sm:text-left flex flex-col lg:flex-row items-center justify-center py-4 xl:gap-6">
            <motion.section
                ref={elementRef1}
                className="w-full md:w-4/5 lg:w-1/2  p-2 sm:p-6 rounded-xl flex flex-col sm:flex-row justify-center items-center sm:gap-10 md:gap-4 md:space-x-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: isVisible1 ? 1 : 0, x: isVisible1 ? 0 : -100 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-7xl">🧑🏼‍🏭</span>
                <div className="w-full">
                <div className="w-full flex flex-col sm:flex-row  items-center justify-between gap-4">
                 <h3 className="text-xl">Espace intérimaire</h3>
                        <Link href="/https://www.keys-rh.fr/worker/security/login" className="bg-black text-white text-sm p-2 px-10 rounded-md border border-white hover:bg-transparent hover:text-black hover:border-black inline-block">
                            J&#39;y vais !
                        </Link>
                    </div>
                    <p className="max-w-xs sm:max-w-full mx-auto text-sm md:text-base py-4">
                        Les compétences de Keys mises à disposition de nos clients pour répondre à leurs besoins
                    </p>
                </div>
            </motion.section>

            <motion.div
                className="bg-gray-200 my-4  w-1/2 h-px lg:w-px lg:h-[120px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />

            <motion.section
                ref={elementRef2}
                className="w-full md:w-4/5 lg:w-1/2  p-2 sm:p-6 rounded-xl flex flex-col sm:flex-row justify-center items-center sm:gap-10 md:gap-4 md:space-x-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: isVisible2 ? 1 : 0, x: isVisible2 ? 0 : 100 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-7xl">👨🏼‍💻</span>
                <div className="w-full">
                    <div className="w-full flex flex-col sm:flex-row  items-center justify-between gap-4">
                        <h3 className="text-xl">Espace Entreprise</h3>
                        <Link href="/https://www.keys-rh.fr/company/security/login" className="bg-black text-white text-sm p-2 px-10 rounded-md border border-white hover:bg-transparent hover:text-black hover:border-black inline-block">
                            C&#39;est parti !
                        </Link>
                    </div>
                    <p className="max-w-xs sm:max-w-full mx-auto text-sm md:text-base py-4">
                        Nous proposons des solutions sur mesure pour répondre aux besoins de recrutement et d’emploi de votre entreprise !
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default SolutionsRH;
