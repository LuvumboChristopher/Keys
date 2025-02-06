"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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

        if (element1) observer.observe(element1);
        if (element2) observer.observe(element2);

        return () => {
            if (element1) observer.unobserve(element1);
            if (element2) observer.unobserve(element2);
        };
    }, []);

    return (
        <section className="bg-gray-50 border-t border-b">
            <div
                id="solutions-rh"
                className="container flex flex-col lg:flex-row items-center justify-center py-8 xl:py-14 gap-6 overflow-hidden"
            >
                {[{
                    ref: elementRef1,
                    isVisible: isVisible1,
                    imgSrc: "/images/contact/candidate-image.webp",
                    alt: "Espace intérimaire",
                    title: "Espace intérimaire",
                    emoji: "🧑🏼‍💼",
                    description: "Keys met ses compétences à votre disposition pour recruter les meilleurs talents pour vos missions temporaires.",
                    link: "https://www.keys-rh.fr/worker/security/login",
                    buttonText: "J'y vais !"
                }, {
                    ref: elementRef2,
                    isVisible: isVisible2,
                    imgSrc: "/images/contact/recruiter-image.webp",
                    alt: "Espace Entreprise",
                    title: "Espace Entreprise",
                    emoji: "👨🏼‍💻",
                    description: "Nous proposons des solutions sur mesure pour répondre aux besoins de recrutement de votre entreprise.",
                    link: "https://www.keys-rh.fr/company/security/login",
                    buttonText: "C'est parti !"
                }].map((item, index) => (
                    <motion.section
                        key={index}
                        ref={item.ref}
                        className="relative w-full lg:w-1/2 aspect-[16/9] flex flex-col justify-center items-center overflow-hidden rounded-xl"
                        initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                        animate={{ opacity: item.isVisible ? 1 : 0, x: item.isVisible ? 0 : (index === 0 ? -100 : 100) }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image 
                            src={item.imgSrc} 
                            alt={item.alt} 
                            layout="fill" 
                            objectFit="cover" 
                            className="absolute inset-0 z-0" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

                        <div className="relative z-30 w-full px-8 py-6 text-white text-center">
                            <div className="flex flex-col items-center">
                                <h3 className="pt-2 text-xl font-bold">{item.title}</h3>
                            </div>
                            <p className="text-sm py-4 leading-relaxed">
                                {item.description}
                            </p>
                            <Link
                                href={item.link}
                                className="bg-white text-black text-sm py-3 px-10 border rounded-xl hover:bg-transparent hover:text-white hover:border-white transition"
                            >
                                {item.buttonText}
                            </Link>
                        </div>
                    </motion.section>
                ))}
            </div>
        </section>
    );
};

export default SolutionsRH;
