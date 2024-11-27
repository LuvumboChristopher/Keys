import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiWand } from "react-icons/tfi";

export const SearchComponentWhite = ({ scrolled, showBar, location, setLocation, colorChanged }) => {
    return (
       <>
        {showBar &&  <motion.div
            className="bg-transparent py-3 mx-auto hidden lg:block h-auto z-20 text-xs  duration-300 "
        >
            <motion.div
                className="container flex justify-center duration-300 rounded-full overflow-hidden pl-10"
                style={{
                    boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.05)" : "none",
                }}
            >
                <div className="w-full flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer ">
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
                        {`w-auto block mx-auto flex items-center justify-center  px-5 py-5 font-semibold bg-black text-white  lg:border-l border-black hover:text-black ${colorChanged ? "bg-yellow-500 text-white" : "bg-black text-white hover:text-yellow-500 "}`}>
                        <TfiWand className="mr-4" />
                        <span className="whitespace-nowrap">Explorer les jobs</span>
                    </button>
                </div>
            </motion.div>
        </motion.div> }
        </>
    );
};
