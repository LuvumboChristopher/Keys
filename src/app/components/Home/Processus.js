import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineUser, AiOutlineFileText } from "react-icons/ai";

const Processus = () => {
    const steps = [
        {
            icon: <AiOutlineSearch className="text-yellow-500 text-2xl xs:text-3xl mr-4" />,
            title: "Étape 1: Explorez des emplois",
            text: "Découvrez des opportunités de carrière adaptées à vos compétences et intérêts. Recherchez les offres d'emploi les plus pertinentes pour vous."
        },
        {
            icon: <AiOutlineUser className="text-yellow-500 text-2xl xs:text-3xl mr-4" />,
            title: "Étape 2: Fournir des informations",
            text: "Soumettez vos informations personnelles et professionnelles pour postuler facilement. Complétez votre profil pour augmenter vos chances de trouver l'emploi idéal."
        },
        {
            icon: <AiOutlineFileText className="text-yellow-500 text-2xl xs:text-3xl mr-4" />,
            title: "Étape 3: Optimiser votre CV",
            text: "Améliorez votre CV pour attirer l'attention des recruteurs. Utilisez nos conseils et outils pour mettre en valeur vos compétences et expériences professionnelles."
        }
    ];

    const descriptions = [
        "Simplifiez votre processus de recrutement grâce à des canaux stratégiques pour atteindre des candidats qualifiés. Postuler à une offre n'a jamais été aussi facile. Suivez les étapes simples et efficaces pour soumettre votre candidature en quelques clics.",
        "Nous vous guidons à travers chaque étape : explorez les opportunités de carrière, soumettez vos informations, optimisez votre CV, et suivez l'avancement de vos candidatures. Avec ces étapes simples, vous êtes sur la voie du succès !",
        "Grâce à notre plateforme, vous bénéficiez d'un accompagnement personnalisé tout au long de votre parcours professionnel. Que vous soyez à la recherche d'un premier emploi ou que vous souhaitiez faire évoluer votre carrière, nous vous offrons les outils nécessaires pour réussir dans vos démarches et atteindre vos objectifs."
    ];

    return (
        <section id="processus" className="container flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 py-12 border-t">
            <div className="w-full text-left">
                <motion.h2 initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }} className="text-left text-xl md:text-2xl py-2 leading-[1.25] tracking-[-0.03em]">
                    <motion.span
                        className="px-1 bg-yellow-500 cursor-pointer rounded-md"
                        style={{ display: "inline-block" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Comment
                    </motion.span>
                    ça marche ?
                </motion.h2>
                <small className="w-full text-xs italic sm:text-xs block pt-2 mb-6 max-w-xs md:max-w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Découvrez comment simplifier et optimiser votre parcours pour trouver votre emploi idéal.
                    </motion.div>
                </small>
                <div className="space-y-8  mx-auto">
                    {descriptions.map((description, index) => (
                        <motion.p
                            key={index}
                            className="w-full mr-auto text-xs sm:text-sm lg:text-md text-black "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 * (index + 1), duration: 1 }}
                        >
                            {description}
                        </motion.p>
                    ))}
                </div>
            </div>
            <div className="w-full mr-auto flex flex-col gap-8 md:gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-row items-start bg-gray-100 border rounded-xl shadow-sm p-5 xs:p-6 hover:bg-gray-50 hover:border-[1px] hover:shadow-md hover:scale-[101%] cursor-pointer transition-all duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 * (index + 1), duration: 0.8 }}
                    >
                        <span>{step.icon}</span>
                        <div>
                            <h3 className="w-full text-sm xs:text-md font-semibold mb-2">{step.title}</h3>
                            <p className="text-xxs sm:text-xs text-gray-600">{step.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Processus;
