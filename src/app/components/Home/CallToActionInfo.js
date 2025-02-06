"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export const CallToActionInfo = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <motion.div
            id="keys-recrute"
            className="relative bg-gray-900 dark:bg-yellow-500 text-white dark:text-black py-8 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <button
                className="absolute top-6 right-6 text-white text-2xl p-1"
                onClick={() => setIsVisible(false)}
            >
                <IoClose />
            </button>
            
            <motion.h1
                className="text-xl md:text-3xl font-extrabold text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Commencez à bâtir votre avenir professionnel 📈
            </motion.h1>

            <motion.p
                className="text-xxs text-center mt-2 mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
                Postulez dès aujourd&#39;hui pour des opportunités uniques. Ensemble, créons un futur qui vous ressemble.
            </motion.p>
        </motion.div>
    );
};
