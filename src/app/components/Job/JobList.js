"use client"
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FaBell, FaBuilding, FaChevronDown, FaClock, FaEye, FaHeart, FaKey, FaMapMarkerAlt, FaRegHeart, FaThLarge, FaThList } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FavoritesContext } from "@/app/context/FavoritesContext";
import { MdOutlineRemoveCircle, MdOutlineSaveAlt } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { formatSalary } from "@/app/utils/utils";

const JobList = ({ jobs, loading }) => {
    const [isListView, setIsListView] = useState(false);
    const [filter, setFilter] = useState("pertinence");
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const { favorites, savedForLater, toggleFavorite, toggleSavedForLater } = useContext(FavoritesContext);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const getjobs = () => {
        if (!jobs) return [];

        if (filter === "pertinence") {
            return [...jobs].sort((a, b) => new Date(b.date_posted) - new Date(a.date_posted));
        }

        if (filter === "alphabetical") {
            return [...jobs].sort((a, b) => a.job_title.localeCompare(b.job_title));
        }

        if (filter === "salary-asc") {
            return [...jobs].sort((a, b) => parseFloat(a.hourly_rate) - parseFloat(b.hourly_rate));
        }

        if (filter === "salary-desc") {
            return [...jobs].sort((a, b) => parseFloat(b.hourly_rate) - parseFloat(a.hourly_rate));
        }

        return jobs;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsListView(false);
        }
    }, [isMobile]);

    const renderJobs = () => {
        if (loading) {
            return <p className="text-left text-gray-500 dark:text-white">Chargement des offres...</p>;
        }

        const jobs = getjobs();

        if (jobs.length === 0) {
            return (
                <div className="w-full h-[50vh] flex flex-col justify-center items-center mx-auto p-10 text-center">
                    <p className="text-xxs lg:text-xs leading-7 dark:text-white">
                        Aucune offre ne correspond à vos critères.
                    </p>
                    <p className="text-xxs lg:text-xs leading-7 dark:text-white">
                        Veuillez ajuster vos filtres et réessayer.
                    </p>
                </div>
            );
        }


        return jobs.map((job, index) => (
            <motion.div
                key={`${job.offer_id}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 transition-transform transform cursor-pointer overflow-hidden rounded-2xl hover:shadow-md hover:outline outline-gray-400 outline-[1px] group shadow-sm"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col justify-between h-full relative z-10 text-black"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className={`${isListView ? "sm:pb-6 justify-start" : "sm:mb-1 justify-between"} w-full flex items-center gap-5`}

                    >
                        <h3 className="w-full capitalize text-base sm:text-lg font-semibold truncate whitespace-nowrap">
                            {job.job_title}
                        </h3>
                        <FaKey
                            className={`${isListView ? "text-lg" : "text-2xl "} w-max ml-auto text-black group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-100 opacity-100`}
                        />
                    </motion.div>
                    <div className={`${isListView ? "w-full flex-row items-center justify-center border rounded-lg overflow-hidden " : "flex-col"} flex`}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className={`${isListView ? "px-6 border-r min-h-[169px] xl:min-h-[105px] bg-gray-50 " : "flex-col"} w-full flex items-center justify-center sm:flex-row lg:flex-col xl:flex-row gap-5 overflow-hidden py-5 sm:py-4 `}

                        >
                            <div
                                className={`${isListView ? "w-full" : "w-full mr-auto xl:w-2/3"} space-y-2 text-xs`}
                            >
                                <motion.div
                                    className="flex items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                >
                                    <FaBuilding className="mr-3 text-blue-500" />
                                    <p className="capitalize truncate whitespace-nowrap">
                                        {job.agency_name}
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="flex items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.7 }}
                                >
                                    <FaMapMarkerAlt className="mr-3 text-emerald-600" />
                                    <p className="capitalize truncate whitespace-nowrap">
                                        {job.town_name}
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="flex items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                >
                                    <FaClock className="mr-3 text-amber-500" />
                                    <p className="capitalize truncate whitespace-nowrap">
                                        {job.contract_type}
                                    </p>
                                </motion.div>
                            </div>
                            <div
                                className={`${isListView ? "w-full " : "w-full ml-auto xl:w-1/3"} flex items-center justify-center`}
                            >
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    className={`${isListView ? "text-xxs bg-white" : "p-4 text-xxs bg-gray-100 "}  w-full border-[1px] text-center p-3 rounded-lg `}
                                >
                                    {job.hourly_rate > 0
                                        ? <>
                                            {formatSalary(job.hourly_rate)}
                                        </>
                                        : <span className="text-gray-500">N/R</span>}
                                </motion.div>
                            </div>

                        </motion.div>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className={`${!isListView ? " border-t border-b py-4" : "px-6 min-h-[169px] xl:min-h-[105px]  border-r "} w-full flex flex-col justify-items-center justify-center space-y-2 text-xs`}
                        >
                            {job?.experience !== undefined && (
                                <li className="flex justify-between">
                                    <span className="w-max font-medium">Expérience requise:</span>
                                    <span className="text-end">
                                        {job.experience === 0
                                            ? "Aucune expérience requise"
                                            : `${job.experience} ans`}
                                    </span>
                                </li>
                            )}
                            {job?.start_date && (
                                <li className="flex justify-between">
                                    <span className="w-max font-medium">Début du travail:</span>
                                    <span className='text-end'>{new Date(job.start_date).toLocaleDateString("fr-FR")}</span>
                                </li>
                            )}
                            {job?.end_date && (
                                <li className="flex justify-between">
                                    <span className="w-max font-medium">Fin du travail:</span>
                                    <span className='text-end'>{new Date(job.end_date).toLocaleDateString("fr-FR")}</span>
                                </li>
                            )}
                        </motion.ul>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className={`${isListView ? "w-max flex-col xs:flex-row items-center justify-center px-8  min-h-[169px] xl:min-h-[105px] bg-gray-50" : "w-full flex-row items-center mt-5"} flex items-center justify-center gap-4 text-sm md:text-xs `}
                        >
                            <div className={`${!isListView ? "w-full xs:w-max l h-full" : "w-max"} flex flex-row items-center gap-4`}>
                                <button
                                    onClick={() => toggleFavorite(job)}
                                    className={`w-full xs:w-max p-4 h-full text-xs flex items-center justify-center gap-2 transition hover:bg-red-600 hover:text-white rounded-xl border ${favorites.some((favJob) => favJob.offer_id === job.offer_id)
                                        ? "bg-red-600 text-white"
                                        : isListView
                                            ? "bg-white text-black"
                                            : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {favorites.some((favJob) => favJob.offer_id === job.offer_id) ? (
                                        <FaHeart className="text-md" />
                                    ) : (
                                        <FaRegHeart className="text-md" />
                                    )}
                                </button>
                                <button
                                    onClick={() => toggleSavedForLater(job)}
                                    className={`w-full xs:w-max p-4 h-full text-xs flex items-center justify-center gap-2 transition hover:bg-yellow-500 hover:text-white rounded-xl border ${savedForLater.some((savedForLater) => savedForLater.offer_id === job.offer_id)
                                        ? "bg-yellow-500 text-white"
                                        : isListView
                                            ? "bg-white text-black"
                                            : "bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {savedForLater.some((savedJob) => savedJob.offer_id === job.offer_id) ? (
                                        <MdOutlineRemoveCircle className="text-md" />
                                    ) : (
                                        <MdOutlineSaveAlt className="text-md" />
                                    )}
                                </button>
                            </div>
                            <Link
                                href={`/jobs/${job.offer_id}`}
                                className={`${isListView ? "w-full ml-auto " : "w-full xs:w-max ml-auto xs:px-10"} p-4 h-full block bg-black text-white text-center text-xxs xl:text-xs  hover:bg-yellow-500 hover:text-black hover:shadow-sm transition-all duration-100 rounded-xl border cursor-pointer`}
                            >
                                {isListView ? (
                                    <FaEye />
                                ) : (
                                    <span>Voir l'offre</span>
                                )}
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        ));
    };

    return (
        <section id="offresdemploi">
            <div  className="min-h-[70px] flex flex-col justify-start sm:flex-row  gap-6 xs:justify-between items-center border-t md:border-t-0 lg:border-t xl:border-t-0 border-b py-10 md:py-0 lg:py-10 xl:py-0 xl:pb-6">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-max dark:text-white w-full mr-auto text-left font-semibold flex items-center gap-5"
                >
                    <TfiBag className="dark:text-white text-sm md:text-base md:hidden" />
                    <h2 className="w-max dark:text-white text-sm md:text-base text-left font-semibold ">Offres d&#39;emploi</h2>
                </motion.div>

                <div className="w-full sm:w-max flex items-center justify-start lg:justify-end xl:flex-wrap gap-4 text-xs">
                    <button
                        className="w-full sm:w-max flex items-center justify-center gap-2 border bg-gray-200 p-3 md:p-4 lg:p-3 lg:px-6 group hover:bg-black transition duration-100 rounded-lg text-xxs shadow-sm"
                        onClick={() => router.push('https://www.keys-rh.fr/worker/security/login')}>
                        <FaBell className="w-max text-xxs group-hover:text-white" />
                        <p className="w-max block md:hidden lg:block group-hover:text-white">Créer une alerte</p>
                    </button>

                    <div className="w-full sm:w-max flex items-center justify-center gap-2 px-3 bg-white border rounded-lg overflow-hidden shadow-sm">
                        <select
                            id="filter"
                            name="filter"
                            value={filter}
                            onChange={handleFilterChange}
                            className="w-full sm:w-max focus:outline-none py-3 text-xxs bg-white text-center"
                        >
                            <option value="pertinence">Trier par pertinence</option>
                            <option value="alphabetical">Trier par ordre alphabétique</option>
                            <option value="salary-asc">Trier par salaire croissant</option>
                            <option value="salary-desc">Trier par salaire décroissant</option>
                        </select>
                        <FaChevronDown className="text-gray-600 text-xxs" />
                    </div>

                    <div className="w-max hidden lg:inline flex flex-row rounded-l-lg  overflow-hidden shadow-sm">
                        <button
                            className={`inline rounded-l-lg p-4 px-5 text-xxs ${!isListView ? "bg-black dark:bg-emerald-600" : "bg-white"}`}
                            onClick={() => setIsListView(false)}
                        >
                            <FaThLarge className={!isListView ? "dark:text-black text-white" : "text-black"} />
                        </button>
                        <button
                            className={`inline rounded-r-lg  p-4 px-5 text-xxs ${isListView ? "bg-black dark:bg-emerald-600" : "bg-white"}`}
                            onClick={() => setIsListView(true)}
                        >
                            <FaThList className={isListView ? "dark:text-black text-white" : "text-black"} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-1 pt-5 text-xxs text-left md:text-right text-gray-500">
                <p>
                    Nombre total de résultats:
                </p>
                <p className="text-gray-500">
                    <strong className="pr-1 dark:text-white text-gray-800">{jobs?.length}</strong> 0ffres d&#39;emploi
                </p>
            </div>
            <div className={`min-h-[105px] ${jobs?.length > 0 ? (isListView ? "flex flex-col gap-8 py-5" : "grid grid-cols-1 lg:grid-cols-2 gap-8 py-5") : "w-full flex justify-center items-center"}`}>
                {renderJobs()}
            </div>
        </section>
    );
};

export default JobList;
