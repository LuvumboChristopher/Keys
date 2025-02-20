"use client";

import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { FaBuilding, FaMapMarkerAlt, FaClock, FaRegSadCry, FaKey, FaHeart, FaRegHeart, FaPlus } from "react-icons/fa";
import { MdOutlineSaveAlt, MdOutlineRemoveCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { JobsContext } from "@/app/context/JobContext";
import { FavoritesContext } from "@/app/context/FavoritesContext";
import { formatSalary } from "@/app/utils/utils";

export default function JobsPreview() {
    const { filteredJobs, loading } = useContext(JobsContext);
    const { favorites, savedForLater, toggleFavorite, toggleSavedForLater } = useContext(FavoritesContext);

    const jobRefs = useRef([]);

    useEffect(() => {
        jobRefs.current = jobRefs.current.slice(0, filteredJobs.length);
    }, [filteredJobs]);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };


    if (loading) {
        return <div className='container flex justify-center items-center min-h-[25vh]'>Votre page est en cours de chargement ...</div>;
    }

    return (
        <section id="dernieres-offres-emploi" className="bg-gray-100 dark:bg-gray-900 border-t border-b border-gray-300 dark:border-none">
            <div className="container py-8 md:py-12">
                <div className="relative z-10">
                    <h2 className="dark:text-white text-left md:text-center text-xl md:text-2xl md:text-3xl py-2">
                        Dernières
                        <motion.span
                            className="dark:text-black  px-1 bg-yellow-500 cursor-pointer rounded-md"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            offres
                        </motion.span>
                        d&#39;emploi
                    </h2>
                    <p className="dark:text-white w-full mx-auto text-left md:text-center text-xs md:text-xs md:text-xs md:text-md text-black py-3 mb-6 max-w-4xl">
                        Découvrez les dernières opportunités d&#39;emploi dans divers secteurs. Que vous cherchiez à débuter ou à progresser dans votre carrière, explorez les offres récentes qui correspondent à vos compétences et aspirations.</p>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:py-2">
                    {filteredJobs.slice(0, 6).map((job, index) => (
                        <motion.div
                            key={job.id || index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={variants}
                            ref={(el) => (jobRefs.current[index] = el)}
                            className="bg-white p-6 md:p-8 transition-transform transform duration-300 cursor-pointer overflow-hidden rounded-2xl hover:shadow-md  md:hover:outline outline-gray-400 dark:outline-white outline-[1px] duration-300 transition group"
                            style={{
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <div>
                                <div className="absolute top-0 right-0 bottom-0 flex justify-end items-center z-10 pr-4">
                                </div>
                                <div className="job-card-content relative z-10 text-black">
                                    <div className="flex justify-between items-center gap-6 group mb-3">
                                        <motion.h3
                                            className="font-semibold capitalize text-md xs:text-base md:text-base truncate whitespace-nowrap"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                        >
                                            {job.job_title}
                                        </motion.h3>
                                        <FaKey className="text-black text-2xl group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300 opacity-100 " />
                                    </div>
                                    <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row rounded-xl overflow-hidden my-7 border">
                                        <div className="w-full md:w-2/3 space-y-1  text-md bg-gray-50 p-4">
                                            <motion.div
                                                className="flex items-center "
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.4 }}
                                            >
                                                <FaBuilding className="mr-3 text-blue-500" />
                                                <p className="text-xs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job.agency_name}</p>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-center "
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.6 }}
                                            >
                                                <FaMapMarkerAlt className="mr-3 text-emerald-600" />
                                                <p className="text-xs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job.town_name}</p>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-center "
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.8 }}
                                            >
                                                <FaClock className="mr-3 text-amber-500" />
                                                <p className="text-xs md:text-xs text-gray-700 capitalize truncate whitespace-nowrap">{job.contract_type}</p>
                                            </motion.div>
                                        </div>
                                        <div className="w-full md:w-[40%] flex items-center justify-center bg-gray-200">
                                            <div className="w-full text-xs md:text-sm text-center p-5">
                                            {job?.hourly_rate > 0
                                                ? <>
                                                    {formatSalary(job.hourly_rate)}
                                                </>
                                                : <span className="text-gray-500">N/R</span>}                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="w-full flex flex-col xs:flex-row sm:flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-gray-700 text-xs md:text-xs md:text-md mt-2 sm:mt-5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1 }}
                                    >   <div className="w-full sm:w-full md:w-max flex gap-4">
                                            <button onClick={() => toggleFavorite(job)} className={`w-full sm:w-full md:w-max h-max  p-4 text-xs md:text-xs md:text-xs flex items-center justify-center gap-2 transition hover:bg-red-600 hover:text-white rounded-md ${favorites.some(favJob => favJob.offer_id === job.offer_id) ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                                                {favorites.some(favJob => favJob.offer_id === job.offer_id) ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                            <button onClick={() => toggleSavedForLater(job)} className={`w-full  sm:w-full md:w-max h-max  p-4 text-xs md:text-xs md:text-xs flex items-center justify-center gap-2 transition hover:bg-yellow-500 hover:text-white rounded-md ${savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                                                {savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? <MdOutlineRemoveCircle /> : <MdOutlineSaveAlt />}
                                            </button>
                                        </div>
                                        <Link href={`/jobs/${job.offer_id}`} passHref className="w-full md:w-max">
                                            <button className="w-full md:w-max mr-auto bg-black text-white text-center text-xxs px-10 py-4 hover:bg-yellow-500 hover:text-black hover:shadow-md transition-all duration-300 rounded-xl">
                                                Voir l'offre
                                            </button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <Link href="/jobs" className="text-xxs md:text-xs  mt-8 w-max mx-auto bg-white dark:hover:bg-yellow-500 hover:bg-black hover:text-white dark:hover:text-black  flex items-center justify-center bg-transparent px-16 py-4 transition-all duration-300 rounded-xl overflow-hidden"
                    style={{
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
                    }}>
                    Voir plus d&#39;offres
                </Link>
            </div>
        </section>
    );
}
