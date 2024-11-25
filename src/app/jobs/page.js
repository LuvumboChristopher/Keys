"use client";

import React, { useState } from "react";
import Link from "next/link";
import { jobs } from "../../utils/jobs";
import { sectors } from "../../utils/sectors";
import { FaBuilding, FaClock, FaKey, FaMapMarkerAlt, FaRegSadCry } from "react-icons/fa";
import { TfiLocationArrow, TfiSearch, TfiWand } from "react-icons/tfi";
import { CallToActionInfo } from "@/components/Home/CallToActionInfo";
import { motion } from "framer-motion";

const JobsPage = () => {
    const [filters, setFilters] = useState({
        location: "",
        type: "",
        company: "",
        proximity: 20,
        contractType: "",
        experience: "",
        sector: "",
        keyword: "",
        perPage: 6
    });

    const [location, setLocation] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePerPageChange = (e) => {
        setFilters(prev => ({ ...prev, perPage: parseInt(e.target.value) }));
        setCurrentPage(1);
    };

    const handleResetFilters = () => {
        setFilters({
            location: "",
            type: "",
            company: "",
            proximity: 20,
            contractType: "",
            experience: "",
            sector: "",
            keyword: "",
            perPage: 6
        });
        setCurrentPage(1);
    };

    const filteredJobs = jobs.filter(job => {
        const locationMatch = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
        const typeMatch = filters.type ? job.type.toLowerCase().includes(filters.type.toLowerCase()) : true;
        const companyMatch = filters.company ? job.company.toLowerCase().includes(filters.company.toLowerCase()) : true;
        const contractMatch = filters.contractType ? job.contractType.toLowerCase() === filters.contractType.toLowerCase() : true;
        const experienceMatch = filters.experience ? job.experienceRequired.toLowerCase() === filters.experience.toLowerCase() : true;
        const sectorMatch = filters.sector ? job.sector.toLowerCase().includes(filters.sector.toLowerCase()) : true;
        const keywordMatch = filters.keyword ? job.description.toLowerCase().includes(filters.keyword.toLowerCase()) : true;
        let proximityMatch = true;
        return locationMatch && typeMatch && companyMatch && contractMatch && experienceMatch && sectorMatch && keywordMatch && proximityMatch;
    });

    const totalPages = Math.ceil(filteredJobs.length / filters.perPage);
    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * filters.perPage,
        currentPage * filters.perPage
    );

    return (
        <div className="mx-auto flex gap-8">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container"
                >
                    <div className="flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer">
                        <div className="w-full lg:w-4/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                            <TfiSearch className="text-xl text-gray-700" />
                            <input
                                placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                className="w-full px-3 py-6 text-gray-800 focus:outline-none"
                            />
                        </div>
                        <div className="bg-black h-8 w-px mx-4"></div>
                        <div className="w-full lg:w-3/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
                            <TfiLocationArrow className="text-xl text-gray-700" />
                            <input
                                className="w-full px-3 py-6 text-gray-800 focus:outline-none"
                                placeholder="Sélectionner un lieu"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <button className="w-auto block mx-auto flex items-center justify-center  px-5 py-6 font-semibold bg-black hover:bg-yellow-500 text-white">
                            <TfiWand className="mr-4" />
                            <span className="whitespace-nowrap">Explorer les jobs</span>
                        </button>
                    </div>
                </motion.div>

                <CallToActionInfo />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-100 border-t border-black"
                >
                    <div className="container bg-grey-500 flex w-full gap-8 py-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-1/5"
                        >
                            <h2 className="text-xl font-bold my-6 border-b pb-6">Filtres</h2>
                            <div className="filters">
                                <div className="filter my-6 border-b pb-6">
                                    <label htmlFor="keyword" className="block text-sm pb-4 mb-2">Mot-clé</label>
                                    <input
                                        type="text"
                                        id="keyword"
                                        name="keyword"
                                        value={filters.keyword}
                                        onChange={handleFilterChange}
                                        className="p-4 border w-full"
                                        placeholder="Rechercher par mot-clé"
                                    />
                                </div>
                                <div className="filter my-6 border-b pb-6">
                                    <label htmlFor="contractType" className="block text-sm pb-4 mb-2">Type de contrat</label>
                                    <select
                                        id="contractType"
                                        name="contractType"
                                        value={filters.contractType}
                                        onChange={handleFilterChange}
                                        className="p-4 border w-full"
                                    >
                                        <option value="">Tous</option>
                                        <option value="CDI">CDI</option>
                                        <option value="CDD">CDD</option>
                                        <option value="Freelance">Freelance</option>
                                        <option value="Stage">Stage</option>
                                    </select>
                                </div>
                                <div className="filter my-6 border-b pb-6">
                                    <label htmlFor="sector" className="block text-sm pb-4 mb-2">Secteur</label>
                                    <select
                                        id="sector"
                                        name="sector"
                                        value={filters.sector}
                                        onChange={handleFilterChange}
                                        className="p-4 border   w-full"
                                    >
                                        <option value="">Tous les secteurs</option>
                                        {sectors.map((sector, index) => (
                                            <option key={index} value={sector.name}>{sector.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={handleResetFilters}
                                    className="w-full bg-yellow-500 text-white py-4 px-4 hover:bg-black transition duration-400 rounded-lg overflow-hidden"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </motion.div>

                        <div className="w-4/5">
                            <h2 className="text-xl font-bold my-6 border-b pb-6">Offres d&#39;emploi</h2>
                            <div className="min-h-[410px]">
                                {currentJobs.length > 0 ? (
                                    <div className="grid gap-7 md:grid-cols-2">
                                        {currentJobs.map((job, index) => (
                                            <motion.div
                                                key={job.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1 }}
                                                className="relative job-card bg-white p-8 transition-transform transform duration-300 cursor-pointer rounded-lg overflow-hidden"
                                            >
                                                <Link href={`/jobs/${job.id}`} passHref>
                                                    <div className="absolute top-6 right-6 z-10 group">
                                                        <FaKey className="text-black text-3xl group-hover:scale-110 transition-all duration-300 opacity-100 hover:scale-105" />
                                                    </div>
                                                <div className="job-card-content flex flex-col justify-between h-full relative z-10 text-black">
                                                    <div>
                                                        <h3 className="text-xl font-semibold pb-4">{job.title}</h3>
                                                        <div className="space-y-1">
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
                                                        <div className="py-4">
                                                            <p className="text-gray-700">Expérience requise: {job.experienceRequired}</p>
                                                        </div>
                                                        <p className="text-gray-700 mb-4">{job.description}</p>
                                                    </div>
                                                    <button className="w-full bg-black text-white text-left px-8 p-4 py-4 hover:bg-yellow-500 transition-all duration-300">Voir l&#39;offre</button>
                                                </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="min-h-[410px] text-center text-gray-700">
                                        <FaRegSadCry className="text-6xl mb-4" />
                                        <h3 className="text-2xl font-semibold">Aucune offre trouvée.</h3>
                                    </div>
                                )}
                            </div>

                            {/* Pagination */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center mt-8 rounded-lg overflow-hidden"
                            >
                                <div className="pagination">
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`page-btn ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded-lg overflow-hidden`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JobsPage;
