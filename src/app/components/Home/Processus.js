
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineUser, AiOutlineFileText } from "react-icons/ai";


const Processus = () => {
    const steps = [
        {
            icon: <AiOutlineSearch className="dark:text-blue-500 text-xl mr-4" />, 
            title: "Étape 1: Explorez des emplois",
            text: "Découvrez des opportunités de carrière adaptées à vos compétences et intérêts. Recherchez les offres d'emploi les plus pertinentes pour vous."
        },
        {
            icon: <AiOutlineUser className="dark:text-emerald-600 text-xl mr-4" />, 
            title: "Étape 2: Fournir des informations",
            text: "Soumettez vos informations personnelles et professionnelles pour postuler facilement. Complétez votre profil pour augmenter vos chances de trouver l'emploi idéal."
        },
        {
            icon: <AiOutlineFileText className="dark:text-amber-500 text-xl mr-4" />, 
            title: "Étape 3: Optimiser votre CV",
            text: "Améliorez votre CV pour attirer l'attention des recruteurs. Utilisez nos conseils et outils pour mettre en valeur vos compétences et expériences professionnelles."
        }
    ];

    const descriptions = [
        "Simplifiez votre processus de recrutement grâce à des canaux stratégiques optimisés pour atteindre encore plus efficacement des candidats qualifiés. Postuler à une offre n'a jamais été aussi simple et rapide. Suivez les étapes claires, simples et efficaces pour soumettre votre candidature en très peu de clics.",
        "Nous vous guidons à travers chaque étape essentielle : explorez les opportunités de carrière variées, soumettez toutes vos informations pertinentes, optimisez intelligemment votre CV, et suivez en détail l'avancement de vos candidatures. Avec ces étapes bien pensées, vous êtes assurément sur la voie du succès !",
        "Grâce à notre plateforme innovante, vous bénéficiez d'un accompagnement personnalisé et adapté tout au long de votre parcours professionnel. Que vous soyez à la recherche active d'un premier emploi ou que vous souhaitiez faire évoluer votre carrière vers de nouvelles opportunités, nous vous offrons tous les outils nécessaires pour réussir pleinement dans vos démarches et atteindre efficacement vos objectifs."
    ];
    
    

    return (
        <section id="processus" className="bg-gray-100 dark:bg-gray-900 border-t border-b border-gray-300 dark:border-none">
            <div className="container flex flex-col lg:flex-row-reverse items-start gap-10 lg:gap-13 py-8 md:py-12 ">
                <div className="w-full text-left">
                    <motion.h2 initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }} className="dark:text-white text-left text-xl md:text-2xl md:text-3xl py-2 leading-[1.25] tracking-[-0.03em]">
                        <motion.span
                            className="px-1 dark:text-black  bg-yellow-500 cursor-pointer rounded-md"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Comment
                        </motion.span>
                        ça marche ?
                    </motion.h2>
                    <small className="w-full dark:text-white  text-xs italic sm:text-xs block pt-2 mb-6 max-w-xs md:max-w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Découvrez comment simplifier et optimiser votre parcours pour trouver votre emploi idéal.
                        </motion.div>
                    </small>
                    <div className="space-y-8 mx-auto">
                        {descriptions.map((description, index) => (
                            <motion.p
                                key={index}
                                className="w-full dark:text-white mr-auto text-xs sm:text-sm lg:text-md text-black "
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
                            className="bg-white border rounded-xl shadow-sm p-7 md:p-9 lg:p-12 xl:p-9 hover:border-[1px] hover:shadow-md hover:scale-[101%] cursor-pointer transition-all duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 * (index + 1), duration: 0.8 }}
                        >
                            <div className="flex flex-row items-center mb-3">
                                <span>{step.icon}</span>
                                <h3 className="w-full text-xs sm:text-sm xs:text-md font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-xxs text-gray-600">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Processus;
