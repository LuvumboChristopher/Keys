import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { JobsContext } from '@/app/context/JobContext';
import { FavoritesContext } from "@/app/context/FavoritesContext";
import { useParams, useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsBookmark, BsFillBookmarkFill, BsFillHandThumbsUpFill, BsHandThumbsUp } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { formatSalary } from "@/app/utils/utils";

function SavedJobsMenu({ isSavedJobsMenuOpen, toggleSavedJobsMenu }) {
    const { filteredJobs } = useContext(JobsContext);
    const {
        favorites,
        savedForLater,
        removeFavorite,
        removeSavedForLater,
    } = useContext(FavoritesContext);
    const [jobDetails, setJobDetails] = useState(null);
    const router = useRouter();
    const params = useParams();
    const jobId = params?.jobId;

    useEffect(() => {
        if (jobId && filteredJobs?.length) {
            const job = filteredJobs.find((job) => job.id === jobId);
            setJobDetails(job);
        }
    }, [jobId, filteredJobs]);

    const navigateToJobDetails = (jobId) => {
        router.push(`/jobs/${jobId}`);
        toggleSavedJobsMenu();

    };

    const handleRemoveFromFavorites = (job) => {
        console.log('Removing from favorites:', job);
        removeFavorite(job);
    };

    const handleRemoveFromSavedForLater = (job) => {
        console.log('Removing from saved for later:', job);
        removeSavedForLater(job);
    };

    return (
        <>
            <div
                className={`savedMenu fixed md:left-[2%] h-[96vh] md:top-[3%] md:bottom-[3%] md:h-[94%] p-7 md:p-9 w-full md:w-[600px] h-full bg-white transform z-[9999] md:rounded-3xl ${isSavedJobsMenuOpen ? "open" : "closing"} flex flex-col overflow-hidden`}
            >
                <div className="w-full flex justify-between items-center pb-5">
                    <Image
                        src={"/images/keyslogos/Keys-logo-black-yellow.svg"}
                        alt="Logo de Keys-RH"
                        width={1000}
                        height={1000}
                        className="transition-transform duration-500 ease-in-out w-[85px] sm:w-[95px]"
                    />
                    <button
                        onClick={toggleSavedJobsMenu}
                        className={`hamburger-btn ${isSavedJobsMenuOpen ? "open open-menu" : ""} text-black transition-transform duration-300 ease-in-out`}
                    >
                        <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
                        <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
                        <p className={`line transition-all duration-300 ease-in-out bg-black`}></p>
                    </button>
                </div>
                <div className="h-full overflow-y-scroll no-scrollbar py-3">
                    <div
                        className={`transition-all duration-500 ease-in-out ${isSavedJobsMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
                    >
                        <div>
                            <h2 className="flex items-center gap-4 text-sm md:text-base border-b pb-6"> {favorites.length === 0 ? <BsHandThumbsUp /> : <BsFillHandThumbsUpFill />} Favoris</h2>
                            {favorites.length === 0 ? (
                                <p className="text-xs md:text-sm my-6">Aucun emploi ajouté aux favoris.</p>
                            ) : (
                                <ul className="my-5 space-y-6">
                                    {favorites.map((job, index) => (
                                        <li className="bg-gray-50 hover:bg-gray-100 p-6 md:p-5 rounded-xl border shadow-sm w-full flex flex-wrap sm:flex-nowrap  justify-between items-center" key={`${job?.offer_id}-${index}`} text-md >
                                            <div className="w-full min-w-[100px] mx-auto">
                                                <h4 className="w-full capitalize text-sm truncate">{job?.job_title || "Emploi inconnu"}</h4>
                                                <p className="text-xs text-gray-500 py-1">{job?.contract_type || "Type de contrat inconnu"} - {job?.town_name || "Ville inconnue"}</p>
                                            </div>
                                            <div className="w-full flex items-center justify-start sm:justify-end gap-3 pt-4 sm:pt-0">
                                                <motion.div
                                                    initial={{ scale: 0.8 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.9 }}
                                                    className={`w-full sm:w-max text-xxs bg-gray-100 border text-center p-3 rounded-lg `}
                                                >
                                                    {job.hourly_rate > 0
                                                        ? <>
                                                            {formatSalary(job.hourly_rate)}
                                                        </>
                                                        : <span className="text-gray-500">N/R</span>}
                                                </motion.div>
                                                <button
                                                    onClick={() => navigateToJobDetails(job.offer_id)}
                                                    className={`border p-3 h-full block bg-black text-white text-center text-xs  hover:bg-white hover:text-black hover:shadow-sm transition-all duration-100 rounded-md`}
                                                >
                                                    <FaEye />
                                                </button>
                                                <button
                                                    onClick={() => handleRemoveFromFavorites(job.offer_id)}
                                                    className={`border p-3 h-full block bg-red-700 hover:bg-red-600 text-white text-center text-xs hover:shadow-sm transition-all duration-100 rounded-md`}
                                                >
                                                    <FaX />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="pt-4">
                            <h2 className="flex items-center gap-4 text-sm md:text-base border-b pb-6"> {savedForLater.length === 0 ? <BsBookmark /> : <BsFillBookmarkFill />} Enregistré pour plus tard</h2>
                            {savedForLater.length === 0 ? (
                                <p className="text-xs md:text-sm my-6">Aucun emploi enregistré pour plus tard.</p>
                            ) : (
                                <ul className="my-5 space-y-6">
                                    {savedForLater.map((job, index) => (
                                        <li className="bg-gray-50 hover:bg-gray-100 p-6 md:p-5 rounded-xl border shadow-sm w-full flex flex-wrap sm:flex-nowrap  justify-between items-center " key={`${job?.offer_id}-${index}`} text-md >
                                            <div className="w-full min-w-[100px] mx-auto">
                                                <h4 className="w-full capitalize text-sm truncate">{job?.job_title || "Emploi inconnu"}</h4>
                                                <p className="text-xs text-gray-500 py-1">{job?.contract_type || "Type de contrat inconnu"} - {job?.town_name || "Ville inconnue"}</p>
                                            </div>
                                            <div className="w-full flex items-center justify-start sm:justify-end  gap-3 pt-4 sm:pt-0">
                                                <motion.div
                                                    initial={{ scale: 0.8 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.9 }}
                                                    className={`w-full sm:w-max  text-xxs bg-gray-100 w-full border text-center p-3 rounded-lg `}
                                                >
                                                    {job.hourly_rate > 0
                                                    ? <>
                                                        {formatSalary(job.hourly_rate)}
                                                    </>
                                                    : <span className="text-gray-500">N/R</span>}
                                                </motion.div>
                                                <button
                                                    onClick={() => navigateToJobDetails(job.offer_id)}
                                                    className={`border p-3 h-full block bg-black text-white text-center text-xs  hover:bg-white hover:text-black hover:shadow-sm transition-all duration-100 rounded-md`}
                                                >
                                                    <FaEye />
                                                </button>
                                                <button
                                                    onClick={() => handleRemoveFromSavedForLater(job.offer_id)}
                                                    className={`border p-3 h-full block bg-red-700 hover:bg-red-600 text-white text-center text-xs hover:shadow-sm transition-all duration-100 rounded-md`}
                                                >
                                                    <FaX />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedJobsMenu;
