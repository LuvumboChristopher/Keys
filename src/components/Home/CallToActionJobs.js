"use client";

import { motion } from "framer-motion";

export const CallToActionJobs = () => {
    return (
        <motion.div
            className="bg-yellow-500 text-black py-10 px-6 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}

        >
            <motion.h1
                className="max-w-7xl mx-auto text-2xl md:text-4xl font-extrabold text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Rejoignez l"équipe KEYS ! 🚀 <br />
                Keys
                <motion.span
                    className="px-3 bg-white cursor-pointer"
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Recrute
                </motion.span>{" "}
                pour                <motion.span
                    className="px-3 bg-black text-white  cursor-pointer"
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Keys
                </motion.span>
            </motion.h1>

            <motion.p
                className="text-md text-center mt-4 max-w-7xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
                Votre talent est notre force. Postulez dès aujourd"hui et construisons l"avenir ensemble !"
            </motion.p>
            <motion.div
                className="text-center"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <button className="flex items-center gap-2 hover:gap-4 text-md w-max mx-auto px-12 mt-8 bg-black text-white py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-400 group">
                    <span className="group-hover:scale-125 text-3xl transition-all duration-400">👊 </span>Postuler maintnant !
                </button>
            </motion.div>
        </motion.div>
    );
};