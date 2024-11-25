"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jobs } from "../../utils/jobs";
import { sectors } from "../../utils/sectors";
import { FaBuilding, FaClock, FaKey, FaMapMarkerAlt, FaRegSadCry } from "react-icons/fa";
import Image from "next/image";
import { TfiLocationArrow, TfiSearch, TfiWand } from "react-icons/tfi";

const jobImages = [
    "/images/jobpreviewpics/Business deal-cuate.svg",
    "/images/jobpreviewpics/Job hunt-cuate.svg",
    "/images/jobpreviewpics/Search-cuate.svg",
    "/images/jobpreviewpics/Interview-cuate.svg",
    "/images/jobpreviewpics/Onboarding-cuate.svg",
    "/images/jobpreviewpics/Resume-cuate.svg"
];


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
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % jobImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
                <div className="container">
                    <div className="my-4">
                        <div>
                            <div className="flex flex-col lg:flex-row items-center bg-white duration-300 cursor-pointer">
                                <div className="w-full lg:w-4/5 border-b lg:border-none mb-8 lg:mb-0 flex items-center">
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
                                    "w-auto block mx-auto flex items-center justify-center  px-5 py-4 font-semibold bg-black hover:bg-yellow-500 text-white">
                                    <TfiWand className="mr-4" />
                                    <span className="whitespace-nowrap">Explorer les jobs</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 border-t border-black">
                    <div className="container bg-grey-500 flex w-full gap-8 py-4">
                        <div className="w-1/5">
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
                                        className="p-4 border   w-full"
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
                                    className="w-full bg-yellow-500 text-white py-4 px-4 hover:bg-black transition duration-400"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </div>
                        <div className="w-4/5">
                            <h2 className="text-xl font-bold my-6 border-b pb-6">Offres d&#39;emploi</h2>
                            <div className="min-h-[410px]">
                                {currentJobs.length > 0 ? (
                                    <div className="grid gap-7 md:grid-cols-2">
                                        {currentJobs.map((job, index) => (
                                            <div
                                                key={job.id}
                                                className="relative job-card bg-white p-6 transition-transform transform duration-300 cursor-pointer"
                                            >
                                                <div className="absolute inset-0 bg-white clip-path-triangle"></div>
                                                <div className="absolute top-0 right-0 bottom-0 flex justify-end items-center z-10 pr-4">
                                                </div>
                                                <Link href={`/jobs/${job.id}`} passHref>
                                                    <div className="absolute top-6 right-6 z-10 group">
                                                        <FaKey
                                                            className="text-black text-3xl group-hover:scale-110 transition-all duration-300 opacity-100 hover:scale-105"
                                                        />
                                                        <div className="w-32 absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pl-2 text-sm">
                                                            Voir l&#39;offre
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className="job-card-content relative z-10 text-black">
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
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="w-full h-[435px] flex items-center justify-center text-center py-24">
                                        <div className="text-center py-24">
                                            <FaRegSadCry className="w-full text-7xl text-black mb-4 text-center" />
                                            <h3 className="text-xl font-semibold text-black">Désolé, il n&#39;y a pas d&#39;offres disponibles pour ce secteur.</h3>
                                            <p className="text-black">Nous vous invitons à consulter d&#39;autres secteurs ou revenir plus tard pour de nouvelles offres.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <div className="flex items-center gap-4">
                                    <label htmlFor="perPage" className="text-sm text-gray-700">Offres par page :</label>
                                    <select
                                        id="perPage"
                                        name="perPage"
                                        value={filters.perPage}
                                        onChange={handlePerPageChange}
                                        className="p-4 pr-8 border   shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    >
                                        <option value={6}>6</option>
                                        <option value={8}>8</option>
                                        <option value={10}>10</option>
                                        <option value={12}>12</option>
                                    </select>
                                </div>
                                <div className="pagination flex items-center gap-4 py-8">
                                    {currentPage > 3 && (
                                        <>
                                            <button
                                                onClick={() => handlePageChange(1)}
                                                className="px-4 py-2 border   text-yellow-600 bg-white hover:bg-yellow-500 hover:text-white"
                                            >
                                                1
                                            </button>
                                            <span className="px-2 text-yellow-600">...</span>
                                        </>
                                    )}
                                    {[...Array(5)].map((_, index) => {
                                        const page = currentPage + index - 2;
                                        if (page >= 1 && page <= totalPages) {
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => handlePageChange(page)}
                                                    className={`px-5 py-3 border   ${currentPage === page ? "bg-yellow-500 text-white" : "bg-white text-yellow-600"} hover:bg-yellow-500 hover:text-white transition duration-200`}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        }
                                        return null;
                                    })}
                                    {currentPage < totalPages - 2 && (
                                        <>
                                            <span className="px-2 text-yellow-600">...</span>
                                            <button
                                                onClick={() => handlePageChange(totalPages)}
                                                className="px-4 py-2 border text-yellow-600 bg-white hover:bg-yellow-500 hover:text-white"
                                            >
                                                {totalPages}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsPage;
