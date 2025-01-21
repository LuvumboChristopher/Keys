"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CallToActionJobs = () => {
    return (
        <div className="">
            <motion.div
                id="keys-recrute"
                className="container relative rounded-2xl overflow-hidden bg-yellow-500 py-12 text-black "
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
                    className="container relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
                >


                    <motion.h1
                        className="max-w-7xl mx-auto text-2xl md:text-[32px] font-extrabold text-center md:leading-tight"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        Rejoignez l&#39;équipe KEYS ! 🚀 <br />
                        Keys
                        <motion.span
                            className="px-3 bg-white cursor-pointer rounded-lg"
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
                        className="text-xs md:text-sm text-center mt-4 max-w-md mx-auto"
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
                            className="flex items-center gap-2 hover:gap-4 text-xs  w-max mx-auto px-5 md:px-10 mt-8 py-2 font-semibold bg-black text-white hover:bg-white hover:text-black  transition-all duration-400 group rounded-xl overflow-hidden"
                            style={{
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
                            }}>
                            <span className="group-hover:scale-125 text-2xl transition-all duration-400">👊 </span>Postuler maintnant !
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};
