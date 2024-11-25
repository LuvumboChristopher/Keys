import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";

export const SearchComponentWhite = ({ scrolled, showBar, location, setLocation, colorChanged }) => {
    return (
        <motion.div
            className="hidden lg:block fixed left-0 right-0 h-auto z-40 border-b border-black text-sm duration-300"
            initial={{ y: -200, opacity: 0 }}
            animate={{
                y: showBar ? 150 : -200,
                opacity: showBar ? 1 : 0
            }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                opacity: { duration: 0.5 },
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 40,
                backgroundColor: scrolled ? "white" : "transparent",
                boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.05)" : "none",
            }}
        >
            <motion.div
                className="flex justify-center duration-300"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
                style={{
                    background: scrolled
                        ? colorChanged
                            ? "linear-gradient(to right, white 50%, #ebb305 50%)"
                            : "linear-gradient(to right, white 50%, black 50%)" 
                        : "transparent",
                }}
            >
                <div className="container flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer">
                    <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                        <TfiSearch className="text-xl text-gray-700" />
                        <input
                            placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                            className="w-full px-3 py-5 text-gray-800 focus:outline-none"
                        />
                    </div>
                    <div className="bg-black h-8 w-px mx-4"></div>
                    <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                        <TfiLocationArrow className="text-xl text-gray-700" />
                        <input
                            className="w-full px-3 py-5 text-gray-800 focus:outline-none"
                            placeholder="Sélectionner un lieu"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button className=
                        {`w-auto block mx-auto flex items-center justify-center  px-5 py-5 font-semibold bg-black text-white  lg:border-l border-black ${colorChanged ? "bg-yellow-500 text-white" : "bg-black text-white"}`}>
                        <TfiWand className="mr-4" />
                        <span className="whitespace-nowrap">Explorer les jobs</span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};
