"use client";

import { motion } from "framer-motion";

export const CallToActionInfo = () => {
    return (
        <motion.div
            id="keys-recrute"
            className="bg-yellow-500 text-black py-10 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h1
                className="max-w-7xl mx-auto text-xl md:text-4xl font-extrabold text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Commencez à bâtir votre  {" "}
                <motion.span
                    className="px-3 bg-black text-white cursor-pointer"
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    avenir
                    
                </motion.span>
                professionnel 📈
            </motion.h1>

            <motion.p
                className="text-sm text-center mt-2 max-w-7xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
                Postulez dès aujourd&#39;hui pour des opportunités uniques. Ensemble, créons un futur qui vous ressemble.
            </motion.p>
        </motion.div>
    );
};
