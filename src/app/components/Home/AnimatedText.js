import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { metiers } from "@/app/utils/metiers";
import { IoClose } from "react-icons/io5";

const colors = ["text-blue-500","text-yellow-500", "text-emerald-600", "text-amber-500"];

const AnimatedText = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorBlink, setCursorBlink] = useState(true);
    const [currentJob, setCurrentJob] = useState("");
    const [jobIndex, setJobIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const jobs = useMemo(() => metiers, []);

    useEffect(() => {
        const typingSpeed = isDeleting ? 120 : 150;
        const delay = isDeleting && charIndex === 0 ? 1000 : typingSpeed;

        const typeTimeout = setTimeout(() => {
            const job = jobs[jobIndex];
            if (!isDeleting && charIndex < job.length) {
                setCurrentJob(job.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentJob(job.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === job.length) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setJobIndex((jobIndex + 1) % jobs.length);
            }
        }, delay);

        return () => clearTimeout(typeTimeout);
    }, [charIndex, isDeleting, jobIndex, jobs]);

    useEffect(() => {
        const cursorTimeout = setInterval(() => {
            setCursorBlink((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorTimeout);
    }, []);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);


    if (!isVisible) return null;


    return (
        <motion.div
            id="keys-recrute"
            className="relative bg-gray-900 dark:bg-gray-100 bg-gray-900 text-white dark:text-black p-10 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <button
                className="absolute top-6 right-6 text-white dark:text-black text-2xl"
                onClick={() => setIsVisible(false)}
            >
                <IoClose />
            </button>

            <div className="">
                <div className="w-max mx-auto gap-4 flex flex-row justify-center text-left items-center">
                    <motion.h1
                        className="w-max mx-auto text-xl md:text-sm font-extrabold text-center leading-10"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        Keys recherche
                    </motion.h1>
                    <motion.h1
                        className="w-max mx-auto text-xl md:text-3xl min-h-[60px] font-extrabold text-center leading-10 py-2"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <span className={isDarkMode ? colors[jobIndex % colors.length] : "text-white"}>
                            {currentJob}
                        </span>
                        <span className="text-yellow-500 ">{cursorBlink ? "|" : " "}</span>
                    </motion.h1>
                    <motion.h1
                        className="w-max mx-auto text-xl md:text-sm font-extrabold text-center leading-10"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        pour relation longue durée.
                    </motion.h1>
                </div>
                <motion.p
                    className="text-xxs max-w-lg text-center pt-3 max-w-7xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                    Déposez votre candidature sans attendre et saisissez des opportunités exceptionnelles. Construisons ensemble un avenir à votre image.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default AnimatedText;
