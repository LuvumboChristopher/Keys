import { useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { FaBuilding, FaMapMarkerAlt, FaClock, FaKey, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { JobsContext } from "@/app/context/JobContext";
import { calculateDistance, formatSalary } from "@/app/utils/utils";
import { FavoritesContext } from "@/app/context/FavoritesContext";
import { MdOutlineRemoveCircle, MdOutlineSaveAlt } from "react-icons/md";

export default function SimilarJobs({ jobId: currentJobId }) {
    const { filteredJobs, loading } = useContext(JobsContext);
    const {
        favorites,
        savedForLater,
        toggleFavorite,
        toggleSavedForLater,
    } = useContext(FavoritesContext);
    const jobRefs = useRef([]);

    const currentJob = filteredJobs.find(job => job?.offer_id === currentJobId);
    const currentLatitude = currentJob ? parseFloat(currentJob.latitude) : null;
    const currentLongitude = currentJob ? parseFloat(currentJob.longitude) : null;

    const similarJobsToDisplay = filteredJobs.filter(job => {
        if (job?.offer_id !== currentJobId && currentLatitude && currentLongitude) {
            const jobLat = parseFloat(job?.latitude);
            const jobLon = parseFloat(job?.longitude);
            const distance = calculateDistance(currentLatitude, currentLongitude, jobLat, jobLon);
            return distance <= 50;
        }
        return false;
    });

    const fallbackJobs = filteredJobs.filter(job => job?.offer_id !== currentJobId).slice(0, 4);

    useEffect(() => {
        jobRefs.current = jobRefs.current.slice(0, similarJobsToDisplay.length);
    }, [similarJobsToDisplay]);

    if (loading) {
        return <div className='container flex justify-center items-center min-h-[25vh]'>Votre page est en cours de chargement ...</div>;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="dark:text-white text-md md:text-lg font-semibold">Voir plus d'annonces</h2>
                <div className="w-full overflow-x-auto flex flex-nowrap justify-start items-center no-scrollbar pt-6">
                    <ul className="flex items-end  gap-x-6">
                        {(similarJobsToDisplay.length > 0 ? similarJobsToDisplay : fallbackJobs).slice(0, 4).map((job, index) => (
                            <li
                                initial="hidden"
                                viewport={{ once: false, amount: 0.2 }}
                                ref={(el) => (jobRefs.current[index] = el)}
                                className="flex items-end"
                                key={job.offer_id}
                            >
                                <div className="w-[90vw] xs:w-[80vw] sm:w-full sm:min-w-[420px] xl:w-[80px]  p-10 border bg-white group rounded-3xl hover:border hover:border-gray-300">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center gap-6 group">
                                            <motion.h3
                                                className="font-semibold capitalize text-base truncate whitespace-nowrap"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                            >
                                                {job?.job_title}
                                            </motion.h3>
                                            <FaKey className="text-black text-xl group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300 opacity-100 " />
                                        </div>
                                        <div className="flex flex-col xs:flex-row lg:flex-col xl:flex-row rounded-lg overflow-hidden my-7 border">
                                            <div className="w-full xs:w-2/3 lg:w-full xl:w-2/3 space-y-1  text-md bg-gray-50 p-4">
                                                <motion.div
                                                    className="flex items-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.4 }}
                                                >
                                                <FaBuilding className="mr-3 dark:text-blue-500" />
                                                <p className="text-xxs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job?.agency_name}</p>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.6 }}
                                                >
                                                <FaMapMarkerAlt className="mr-3 dark:text-emerald-600" />
                                                <p className="text-xxs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job?.town_name}</p>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: 0.8 }}
                                                >
                                                <FaClock className="mr-3 dark:text-amber-500" />
                                                <p className="text-xxs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job?.contract_type}</p>
                                                </motion.div>
                                            </div>
                                            <div className="w-full xs:w-[40%] lg:w-full xl:w-[40%] xl:flex-row flex items-center justify-center bg-gray-200 ">
                                                <div className="w-full text-xxs md:text-xs text-center p-5">
                                                {job?.hourly_rate > 0
                                                ? <>
                                                    {formatSalary(job.hourly_rate)}
                                                </>
                                                : <span className="text-gray-500">N/R</span>}                                                </div>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="w-full flex flex-col :flex-row lg:flex-col xl:flex-row justify-center sm:justify-between items-center gap-4 text-gray-700 text-xxs md:text-xs md:text-md mt-2 sm:mt-5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 1 }}
                                        >   <div className="w-full xl:w-max flex gap-4">
                                                <button onClick={() => toggleFavorite(job)} className={`w-full sm:w-max lg:w-full xl:w-max h-max p-4 text-xs md:text-xs md:text-xs flex items-center justify-center gap-2 transition hover:bg-red-600 hover:text-white rounded-md ${favorites.some(favJob => favJob.offer_id === job?.offer_id) ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                                                    {favorites.some(favJob => favJob.offer_id === job?.offer_id) ? <FaHeart /> : <FaRegHeart />}
                                                </button>
                                                <button onClick={() => toggleSavedForLater(job)} className={`w-full sm:w-max lg:w-full xl:w-max h-max p-4 text-xs md:text-xs md:text-xs flex items-center justify-center gap-2 transition hover:bg-yellow-500 hover:text-white rounded-md ${savedForLater.some(savedJob => savedJob.offer_id === job?.offer_id) ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                                                    {savedForLater.some(savedJob => savedJob.offer_id === job?.offer_id) ? <MdOutlineRemoveCircle /> : <MdOutlineSaveAlt />}
                                                </button>
                                            </div>
                                            <Link href={`/jobs/${job?.offer_id}`} onClick={() => {
                                                window.scrollTo({
                                                    top: 0, behavior: "smooth",
                                                });
                                            }} passHref className="w-full">
                                                <button className="w-full mr-auto bg-black text-white text-center text-xxs p-4 px-10 hover:bg-yellow-500 hover:text-black hover:shadow-md transition-all duration-300 rounded-xl">
                                                    En savoir plus
                                                </button>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    );
}
