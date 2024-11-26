import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";


export const SearchComponentBlack = ({ scrolled, showBar, location, setLocation }) => {
    return (
        <motion.div
            className="hidden lg:block fixed left-0 right-0 h-auto z-20 border-b border-black text-xs"
            initial={{ y: -200 }}
            animate={{ y: showBar ? 134 : -500 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 40,
                backgroundColor: scrolled ? "black" : "transparent",
                boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.05)" : "none",
            }}
        >
            <motion.div
                className="flex justify-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    background: "linear-gradient(to right, white 50%, #ebb305 50%)",
                }}
            >
                <div className="container flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer">
                    <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                        <TfiSearch className="text-xl text-black" />
                        <input
                            placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                            className="w-full px-3 py-5 text-black bg-white focus:outline-none"
                        />
                    </div>
                    <div className="bg-black h-8 w-px mx-4"></div>
                    <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                        <TfiLocationArrow className="text-xl text-black" />
                        <input
                            className="w-full px-3 py-5 text-black bg-white focus:outline-none"
                            placeholder="Sélectionner un lieu"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button className="w-auto block mx-auto flex items-center justify-center bg-yellow-500 hover:text-black px-5 py-5 font-semibold text-white lg:border-l border-black transition-all duration-500">
                        <TfiWand className="mr-4" />
                        <span className="whitespace-nowrap">Explorer les jobs</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}