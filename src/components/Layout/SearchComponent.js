import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export const SearchComponent = ({ scrolled, showBar, location, setLocation }) => {
    const inputRef = useRef(null); 

    useEffect(() => {
        if (showBar && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showBar]); 

    return (
        <>
            {showBar && (
                <motion.div
                    className={`bg-white mx-auto h-[85px] z-20 text-xs duration-500 ${showBar ? "lg:block" : "hidden"}`}
                    style={{
                        position: "fixed",
                        top: "150px",
                        left: 0,
                        right: 0,
                        zIndex: 50,
                        transition: "all 0.3s ease-in-out",
                        color: "black",
                        boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.08)" : "none",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    <div className="w-full max-w-7xl mx-auto md:grid gap-6  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  duration-300 cursor-pointer ">
                        <div className="w-full bg-gray-50  border-b lg:border rounded-3xl px-6 flex items-center group focus-within:border-gray-400"
                            style={{
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.005)",
                            }}>
                            <TfiSearch className="text-lg text-gray-700" />
                            <input
                                ref={inputRef} // Asignar la referencia al primer input
                                placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                className="w-full bg-gray-50 px-3 py-[20px] text-gray-800 focus:outline-none "
                            />
                        </div>
                        <div className="w-full bg-gray-50 border-b lg:border rounded-3xl px-6 flex items-center focus-within:border-gray-400"
                            style={{
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.005)",
                            }}>
                            <TfiLocationArrow className="text-lg text-gray-700" />
                            <input
                                className="w-full bg-gray-50 px-3 py-[20px] text-gray-800 focus:outline-none "
                                placeholder="Sélectionner un lieu"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <Link className="block w-full" href="/jobs"
                        >
                            <div className="w-full block mx-auto flex items-center justify-center bg-black text-white py-[20px]  px-6 font-semibold hover:bg-yellow-500 hover:text-black border-black transition-all duration-500 rounded-3xl cursor-pointer"
                                style={{
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.005)",
                                }}>
                                <TfiWand className="text-lg mr-4" />
                                Explorer les jobs
                            </div>
                        </Link>
                    </div>
                </motion.div>
            )}
        </>
    );
};
