"use client";

import { motion } from "framer-motion";

export const CallToAction = () => {
    return (
        <motion.div
            className="bg-yellow-500 text-black py-16 px-6 " 
            style={{ marginTop: "-70px" }} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h1
                className="max-w-7xl mx-auto text-2xl md:text-4xl font-extrabold text-center pt-16"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Avancez dans Votre
                <motion.span
                    className="px-3 bg-white cursor-pointer rounded-lg"
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Carrière
                </motion.span>
                avec
                <motion.span
                    className="px-3 bg-black text-white  cursor-pointer rounded-lg"
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Confiance
                </motion.span>
            </motion.h1>

            <motion.p
                className="text-md text-center mt-4 max-w-7xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
                &#39;Découvrez des opportunités professionnelles qui correspondent à vos
                aspirations et construisez l&#39;avenir que vous méritez.&#39;
            </motion.p>
        </motion.div>
    );
};
