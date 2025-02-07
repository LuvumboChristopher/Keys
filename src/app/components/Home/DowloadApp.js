"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const DownloadApp = () => {
    return (
        <div id="app" className="bg-gray-100 dark:bg-gray-900 py-10 md:py-14 border-t border-b border-gray-300">
            <motion.div
                className="container w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden text-black relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="hidden lg:block w-full lg:w-[37%] relative overflow-hidden lg:h-[450px] rounded-l-3xl">
                    <Image
                        src="/images/banner/utilisateur-app-keys.webp"
                        alt="Mockup del téléphone"
                        width={5000}
                        height={5000}
                        className="object-cover h-full"
                    />
                </div>
                <div className="w-full h-full mx-auto lg:w-[63%] lg:h-[450px] rounded-3xl lg:rounded-none lg:rounded-r-3xl bg-white p-8 md:p-16 flex items-center justify-center border border-gray-300">
                    <div className="w-max text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 lg:mb-2 leading-[1.1] tracking-tight">
                            Simplifiez votre recherche d’emploi
                        </h1>
                        <h2 className="text-md xl:text-lg font-bold mb-4">
                            Téléchargez notre application mobile
                        </h2>
                        <div>
                            <p className="text-xs md:text-md lg:text-xs xl:text-md mb-6 max-w-xl">
                                Découvrez des centaines d’offres d’emploi adaptées à vos compétences, postulez en un clic et suivez l’évolution de vos candidatures en temps réel.
                            </p>
                            <ul className="w-max mx-auto lg:ml-0 text-xs lg:text-xxs xl:text-xs mb-6 space-y-2 flex flex-col">
                                <li className="flex items-center gap-3"><span>✔</span>Trouvez des missions près de chez vous.</li>
                                <li className="flex items-center gap-3"><span>✔</span>Gérez facilement votre emploi du temps.</li>
                                <li className="flex items-center gap-3"><span>✔</span>Recevez des notifications en temps réel.</li>
                            </ul>
                        </div>
                        <p className="text-xs md:text-sm font-medium mb-6">
                            Ne manquez aucune opportunité : téléchargez l’application dès maintenant
                        </p>

                        <div className="w-full flex justify-center pt-2 md:pt-0 lg:justify-start items-center space-x-4">
                            <Link
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/images/banner/Google_Play_Store_badge_FR.svg.png"
                                    alt="Télécharger sur Google Play"
                                    width={3000}
                                    height={3000}
                                    className="hover:scale-105 transition-transform w-28"
                                />
                            </Link>
                            <Link
                                href="https://apps.apple.com/us/app/mykeys/id1544920523"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/images/banner/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg.png"
                                    alt="Télécharger sur l'App Store"
                                    width={3000}
                                    height={3000}
                                    className="hover:scale-105 transition-transform w-28"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
