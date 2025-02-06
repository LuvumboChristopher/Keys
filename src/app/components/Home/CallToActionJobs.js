"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CallToActionJobs = () => {
    return (
        <div className="container pt-0 pb-12">
            <motion.div
                id="keys-recrute"
                className="relative rounded-2xl overflow-hidden bg-yellow-500 dark:bg-gray-900 py-16 dark:text-white text-black "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute inset-0 bg-cover bg-center hidden"
                    style={{
                        backgroundImage: `url(/images/banner/office.webp)`,
                        zIndex: "-1",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                ></motion.div>
                <div className="absolute inset-0 bg-black opacity-0"></div>
                <div className="absolute inset-0 heropath"></div>
                <motion.div
                    className="max-w-[85%] mx-auto relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-[20px] sm:text-3xl md:text-[32px] font-extrabold text-center md:leading-tight"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        Rejoignez l&#39;équipe KEYS ! 🚀 <br />
                        Keys
                        <motion.span
                            className="px-3 bg-white dark:bg-yellow-500 cursor-pointer rounded-lg"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Recrute
                        </motion.span>{" "}
                        pour                <motion.span
                            className="px-3 bg-black text-white  cursor-pointer  rounded-lg"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Keys
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        className="text-xxs sm:text-xs md:text-sm text-center mt-4 max-w-md mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        Postulez dès aujourd&#39;hui et construisons l&#39;avenir ensemble ! <br />Votre talent est notre force.
                    </motion.p>
                    <motion.div
                        className="text-center"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Link href="/#nos-agences"
                            className="flex items-center gap-2 hover:gap-4 text-[11px] xs:text-xs  w-max mx-auto px-5 md:px-10 mt-8 py-2 bg-black dark:bg-white  dark:text-black text-white hover:bg-white hover:text-black  transition-all duration-400 group rounded-xl overflow-hidden"
                        >
                            <span className="group-hover:scale-125 text-xl transition-all duration-400">👊 </span>Postuler maintnant !
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};
