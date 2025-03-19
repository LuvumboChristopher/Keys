"use client";

import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import StatsSection from "./StatsSection";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function AboutKeys() {
    return (
        <div id="keys" className="bg-white">
            <motion.div
                className="container flex flex-col lg:flex-row gap-6 lg:gap-12 items-center py-8 lg:py-14"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="w-full lg:w-[40%]">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-xxs md:text-xs uppercase text-gray-500 mb-3">Qui Sommes-Nous ?</h2>
                        <h2 className="text-lg md:text-[22px] xl:text-2xl text-left pb-6 leading-tight">
                            Une agence de recrutement qui valorise la stratégie et l&apos;engagement humain.
                        </h2>
                        <p className="text-xs xl:text-md mb-6">
                            Chez Keys, nous croyons en l&apos;importance d&apos;une approche sur-mesure pour chaque client et candidat.
                            Notre équipe s&apos;efforce d&apos;identifier des talents qui correspondent parfaitement aux besoins des entreprises
                            tout en respectant les aspirations des individus.
                        </p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 py-1 text-xxs xs:text-xs xl:text-md">
                        {[
                            "Recrutement sur mesure pour chaque poste clé.",
                            "Suivi personnalisé pour les entreprises et candidats.",
                            "Stratégie de recrutement alignée sur vos objectifs.",
                            "Accompagnement continu pour une intégration réussie.",
                        ].map((text, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center mb-3"
                                variants={itemVariants}
                            >
                                <FaCheckCircle className="text-yellow-500 mr-3" />
                                {text}
                            </motion.li>
                        ))}
                    </motion.div>

                    </motion.div>
                    <div
                        className="w-full lg:w-[60%] lg:mt-0"
                    >
                        <StatsSection />
                    </div>
                </motion.div>
        </div>
    );
}
