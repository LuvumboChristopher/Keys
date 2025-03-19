"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BoutonsDownload from "./BoutonsDownload";

export const DownloadApp = () => {
    return (
        <div id="app" className="bg-gray-100 dark:bg-gray-900 py-10 md:py-18 border-t border-b border-gray-300">
            <motion.div
                className="container w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden text-black relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="hidden lg:block w-full lg:w-[40%] relative overflow-hidden lg:h-[460px] rounded-l-3xl">
                    <Image
                        src="/images/banner/utilisateur-app-keys.webp"
                        alt="Mockup del téléphone"
                        width={5000}
                        height={5000}
                        className="object-cover h-full"
                    />
                </div>
                <div className="w-full h-full mx-auto lg:w-[60%] lg:h-[460px] rounded-3xl lg:rounded-none lg:rounded-r-3xl bg-white p-8 md:p-16 flex items-center justify-center border border-gray-300">
                    <div className="w-max text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 lg:mb-2 leading-[1.1] tracking-tight">
                            Simplifiez votre recherche d’emploi
                        </h1>
                        <h2 className="text-md xl:text-lg font-bold mb-4">
                            Téléchargez notre application mobile
                        </h2>
                        <div>
                            <p className="text-xs md:text-md lg:text-xs xl:text-md mb-5 max-w-xl">
                                Découvrez des centaines d’offres d’emploi adaptées à vos compétences, postulez en un clic et suivez l’évolution de vos candidatures en temps réel.
                            </p>
                            <ul className="w-max mx-auto lg:ml-0 text-xs lg:text-xxs xl:text-xs mb-5 space-y-2 flex flex-col">
                                <li className="flex items-center gap-3"><span>✔</span>Trouvez des missions près de chez vous.</li>
                                <li className="flex items-center gap-3"><span>✔</span>Gérez facilement votre emploi du temps.</li>
                                <li className="flex items-center gap-3"><span>✔</span>Recevez des notifications en temps réel.</li>
                            </ul>
                        </div>
                        <p className="text-xs md:text-sm font-medium mb-5">
                            Ne manquez aucune opportunité : téléchargez l’application dès maintenant
                        </p>

                        <div className="w-full flex justify-center pt-2 md:pt-0 lg:justify-start items-center space-x-4">
                            <BoutonsDownload/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
