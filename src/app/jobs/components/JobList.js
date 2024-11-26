import React from "react";
import Link from "next/link";
import { FaBuilding, FaClock, FaKey, FaMapMarkerAlt, FaRegSadCry } from "react-icons/fa";
import { motion } from "framer-motion";

const JobList = ({ jobs, currentJobs, totalPages, currentPage, handlePageChange }) => {
    return (
        <>
            <h2 className="text-xl font-bold my-6 border-b pb-6">Offres d&#39;emploi</h2>
            <div className="min-h-[410px]">
                {currentJobs.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2">
                        {currentJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="relative job-card bg-white p-6 transition-transform transform duration-300 cursor-pointer rounded-lg overflow-hidden"
                            >
                                <Link href={`/jobs/${job.id}`} passHref>
                                    <div className="absolute top-6 right-6 z-10 group">
                                        <FaKey className="text-black text-3xl group-hover:scale-110 transition-all duration-300 opacity-100 hover:scale-105" />
                                    </div>
                                    <div className="job-card-content flex flex-col justify-between h-full relative z-10 text-black">
                                        <div>
                                            <h3 className="text-xl font-semibold pb-4">{job.title}</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <FaBuilding className="mr-3 text-gray-600" />
                                                    <p className="text-gray-700">{job.company}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <FaMapMarkerAlt className="mr-3 text-gray-600" />
                                                    <p className="text-gray-700">{job.location}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <FaClock className="mr-3 text-gray-600" />
                                                    <p className="text-gray-700">{job.contractType} - {job.type}</p>
                                                </div>
                                            </div>
                                            <div className="py-4 text-sm">
                                                <p className="text-gray-700">Expérience requise: {job.experienceRequired}</p>
                                            </div>
                                            <p className="text-gray-700 mb-4 text-sm">{job.description}</p>
                                        </div>
                                        <button className="w-full bg-black text-white text-left px-6 p-4 py-4 hover:bg-yellow-500 transition-all duration-300 rounded-md">Voir l&#39;offre</button>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <FaRegSadCry className="w-full text-7xl text-black mb-4 text-center" />
                        <h3 className="text-xl font-semibold text-black">Désolé, il n&#39;y a pas d&#39;offres disponibles pour ce secteur.</h3>
                        <p className="text-black">Nous vous invitons à consulter d&#39;autres secteurs ou revenir plus tard pour de nouvelles offres.</p>
                    </div>
                )}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full  mx-auto  flex justify-between items-center  mt-8 rounded-lg overflow-hidden"
            >
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`page-btn ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded-lg overflow-hidden`}
                    >
                        {index + 1}
                    </button>
                ))}
            </motion.div>
        </>
    );
};

export default JobList;
