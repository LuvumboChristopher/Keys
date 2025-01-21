"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const DownloadApp = () => {
    return (
        <section className="w-full flex justify-center items-center bg-gray-50 py-12 border-t border-b">
            <motion.div
                id="keys-recrute"
                className="container flex flex-col lg:flex-row items-center justify-between rounded-2xl overflow-hidden bg-white text-black shadow-lg border relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Mockup del teléfono */}
                <div className="w-full lg:w-[35%] relative overflow-hidden h-[500px] border-r">
                    <div className="absolute  top-[125px] left-1/2 transform -translate-x-1/2 scale-[2]">
                        <Image
                            src="/images/banner/keys-hands-iphone-mockup.png"
                            alt="Mockup del téléphone"
                            width={5000}
                            height={5000}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Texto descriptivo */}
                <div className="w-full lg:w-[65%] p-12">
                    <div className="text-center lg:text-left">
                        {/* Título principal */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-9 tracking-tight">
                            Simplifiez votre recherche d’emploi
                        </h1>
                        {/* Subtítulo */}
                        <h2 className="text-xl font-bold mb-4">
                            Téléchargez notre application mobile
                        </h2>
                        {/* Texto de descripción */}
                        <p className="text-base mb-6">
                            Découvrez des centaines d’offres d’emploi adaptées à vos compétences, postulez en un clic et suivez l’évolution de vos candidatures en temps réel.
                        </p>
                        {/* Beneficios destacados */}
                        <ul className="text-md mb-6 space-y-2">
                            <li>✔ Trouvez des missions près de chez vous.</li>
                            <li>✔ Gérez facilement votre emploi du temps.</li>
                            <li>✔ Recevez des notifications en temps réel.</li>
                        </ul>
                        {/* Llamado a la acción */}
                        <p className="text-base font-medium mb-6">
                            Ne manquez aucune opportunité : téléchargez l’application dès maintenant !
                        </p>

                        <div className="w-full flex justify-start items-center space-x-4">
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
                                    className="hover:scale-105 transition-transform w-32"
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
                                    className="hover:scale-105 transition-transform w-32"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
