"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const partenaires = [
    { name: "metropole", image: "/images/partenaires/metropolelyon.png" },
    { name: "bouygues", image: "/images/partenaires/bouygues.png" },
    { name: "suez", image: "/images/partenaires/suez.png" },
    { name: "gxo", image: "/images/partenaires/gxo.png" },
    { name: "vinci", image: "/images/partenaires/vinci.png" },
    { name: "geodis", image: "/images/partenaires/geodis.png" },
    { name: "eiffage", image: "/images/partenaires/eiffage.webp" },
];

const Partenaires = () => {
    return (
        <section className="container mx-auto ">
            <div className="w-full sm:max-w-[90%] mx-auto py-8 md:py-12">
                <h1 className="text-sm sm:text-md lg:text-base text-center pb-4">
                    Ils nous font confiance
                </h1>
                <div className="relative z-20 py-2">
                    <div className="w-full flex justify-start xl:justify-center items-center overflow-x-auto whitespace-nowrap gap-6 scrollbar-hide mb-4">
                        {partenaires.map((partenaire, index) => (
                            <motion.div
                                key={partenaire.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                                className="flex-shrink-0 p-2 md:p-4"
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={partenaire.image}
                                    alt={partenaire.name}
                                    className="h-auto object-contain w-[100px] md:w-[110px] hover:scale-110 duration-300 cursor-pointer"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="hidden absolute bottom-0  left-1/2 transform -translate-x-1/2 translate-y-3 flex flex-row items-center gap-2 gap-2 z-30  xl:hidden text-[9px] md:text-xxs"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity, 
                            ease: "easeInOut",
                        }}
                    >
                        <span className=" text-gray-500">
                            Faites défiler pour voir plus
                        </span>
                        <FaArrowRight className="text-gray-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partenaires;
