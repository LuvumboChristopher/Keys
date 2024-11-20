"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { jobs } from "../../utils/jobs";
import { sectors } from "../../utils/sectors";
import { FaRegSadCry } from "react-icons/fa";
import JobsPreview from "@/components/Home/JobsPreview";
import StatsSection from "@/components/Home/StatsSection";
import EconomicSector from "@/components/Home/EconomicSector";
import { TfiSearch, TfiLightBulb, TfiIdBadge, TfiBolt } from "react-icons/tfi";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

import JobsByLocation from "@/components/Home/JobsByLocation";
import Image from "next/image";

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

    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const images = [
        { src: "/images/digger-machine-machinery-construction-162639.jpeg" },
        { src: "/images/ouvrier-industriel-utilisant-une-meuleuse.jpeg" },
        { src: "/images/pexels-photo-185039.webp" }
    ];

    const totalImages = images.length;

    const nextImage = () => {
        setIsTransitioning(true);
        setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    };

    const prevImage = () => {
        setIsTransitioning(true);
        setCurrentImage(
            (prevImage) => (prevImage - 1 + totalImages) % totalImages
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isTransitioning) {
                setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
            }
        }, 3500);

        return () => clearInterval(intervalId);
    }, [totalImages, isTransitioning]);

    useEffect(() => {
        if (isTransitioning) {
            setTimeout(() => setIsTransitioning(false), 1000);
        }
    }, [currentImage, isTransitioning]);

    return (
        <>
            <section className="relative py-16 transition-transform transform duration-300">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                    style={{
                        backgroundImage: `url(${images[currentImage].src})`,
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-65"></div>
                <div className="absolute inset-0 bg-yellow-400 heropath"></div>
                <div className="container flex items-center gap-8 relative z-10"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex  flex-col justify-between mb-8">
                        <div>
                            <h1 className="text-6xl font-bold text-white shadow-text">Keys</h1>
                            <h1 className="text-6xl font-bold text-white shadow-text">Interim <span className="text-yellow-500">&</span></h1>
                            <h1 className="text-6xl font-bold text-white shadow-text">Recrutement</h1>
                            <h2 className="text-sm pt-6 text-white text-left">Découvrez votre prochain <span className="text-yellow-500">emploi</span> en toute <span className="text-yellow-500">simplicité</span> !</h2>
                        </div>
                        <div className="flex gap-2 pt-6">

                            <CiCircleChevLeft
                                className="text-white text-4xl font-extrabold cursor-pointer hover:text-yellow-500"
                                style={{
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                                }}
                                aria-label="Previous slide"
                                onClick={prevImage}
                            />
                            <CiCircleChevRight
                                className="text-white text-4xl font-extrabold cursor-pointer hover:text-yellow-500"
                                style={{
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                                }}
                                aria-label="Next slide"
                                onClick={nextImage}
                            />
                        </div>
                    </div>
                    <div className="pl-10  border-l-4 border-white">
                        <div className="flex justify-start space-x-12 mb-12">
                            <div className="flex flex-col items-start space-y-5">
                                <TfiBolt className="text-4xl cursor-pointer text-white pb-2" />
                                <h3 className="font-semibold text-white">RECHERCHE SIMPLIFIÉE</h3>
                                <p className="text-gray-100 max-w-xs text-sm">
                                    Obtenez en un instant toutes les informations essentielles concernant le poste ainsi que le processus de recrutement.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-5">
                                <TfiLightBulb className="text-4xl cursor-pointer text-white pb-2" />
                                <h3 className="font-semibold text-white">SÉLECTION SUR CRITÈRES</h3>
                                <p className="text-gray-100 max-w-xs text-sm">
                                    Explorez les environnements de travail, renseignez-vous sur les projets et choisissez selon vos critères.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-5">
                                <TfiIdBadge className="text-4xl cursor-pointer text-white pb-2" />
                                <h3 className="font-semibold text-white">KEYS ESPACE</h3>
                                <p className="text-gray-100 max-w-xs text-sm">
                                    Enregistrez-vous sans frais et suivez l"avancement de vos candidatures en toute simplicité.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center shadow-lg rounded-xl">
                            <div className="flex items-center bg-white rounded-xl shadow-lg w-full">
                                <p className="text-xl px-8 text-gray-600">
                                    <TfiSearch />
                                </p>
                                <input
                                    type="search"
                                    placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
                                    className="w-full pr-6 py-6 text-gray-800 focus:outline-none rounded-l-full"
                                />
                                <button className="w-1/2 bg-yellow-400 text-black py-6 rounded-r-xl font-semibold hover:bg-yellow-500 hover:text-black border-l-2 border-black">
                                    Explorer les jobs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EconomicSector />
            <StatsSection />
            <JobsByLocation />
            <JobsPreview />
            <div className="mx-auto flex gap-8">
                <div className="w-full">
                    <div className="container flex w-full gap-8 py-8">
                        <div className="w-1/4">
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
                                        className="p-4 border rounded-lg w-full"
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
                                        className="p-4 border rounded-lg w-full"
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
                                        className="p-4 border rounded-lg w-full"
                                    >
                                        <option value="">Tous les secteurs</option>
                                        {sectors.map((sector, index) => (
                                            <option key={index} value={sector.name}>{sector.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={handleResetFilters}
                                    className="w-full bg-yellow-500 text-white py-4 px-4 rounded-lg hover:bg-yellow-600 transition duration-400"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </div>
                        <div className="w-3/4">
                            <h2 className="text-xl font-bold my-6 border-b pb-6">Offres d"emploi</h2>
                            <div className="min-h-[410px]">
                                {currentJobs.length > 0 ? (
                                    <div className="grid gap-7 md:grid-cols-2">
                                        {currentJobs.map((job, index) => (
                                            <div key={job.id} className="relative job-card bg-white p-12 transition-transform transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
                                                <div className="absolute inset-0 bg-white clip-path-triangle"></div>
                                                <div className="absolute top-0 left-60 bottom-0 flex justify-end items-center z-10 pr-4">
                                                    <Image
                                                        width={auto}
                                                        height={auto}
                                                        src={jobImages[index % jobImages.length]}
                                                        alt={`Imagen para ${job.title}`}
                                                        className={`
                                                        opacity-100 transition-opacity duration-300
                                                        ${index === 0 ? "w-[240px] h-[130px]" : ""}
                                                        ${index === 1 ? "w-[270px] h-[160px]" : ""}
                                                        ${index === 2 ? "w-[300px] h-[160px]" : ""}
                                                        ${index === 3 ? "w-[300px] h-[170px]" : ""}
                                                        ${index === 4 ? "w-[240px] h-[130px]" : ""}
                                                        ${index === 5 ? "w-[270px] h-[160px]" : ""}
                                                        ${index === 6 ? "w-[300px] h-[160px]" : ""}
                                                        ${index === 7 ? "w-[300px] h-[170px]" : ""}
                                                        ${index === 8 ? "w-[240px] h-[130px]" : ""}
                                                        ${index === 9 ? "w-[270px] h-[160px]" : ""}
                                                        ${index === 10 ? "w-[300px] h-[160px]" : ""}
                                                        ${index === 11 ? "w-[300px] h-[170px]" : ""}
                                                    `}
                                                    />
                                                </div>
                                                <Link href={`/jobs/${job.id}`} passHref>
                                                    <div className="absolute top-4 right-4 z-10 group">
                                                        <Image
                                                            layout="responsive"
                                                            width={16}
                                                            height={9} 
                                                            src="/images/arrow.png"
                                                            alt="Voir plus"
                                                            className="group-hover:scale-110 transition-all duration-300 opacity-100 hover:opacity-95"
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="job-card-content relative z-10 text-white">
                                                    <h3 className="text-xl font-semibold pb-4">{job.title}</h3>
                                                    <p className="text-gray-600 pb-1">{job.company}</p>
                                                    <p className="text-gray-600 pb-1">{job.location}</p>
                                                    <p className="text-gray-600 pb-1">Type: {job.type}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="w-full h-[410px] flex items-center justify-center text-center py-24">
                                        <div className="w-full max-w-4xl mx-auto">
                                            <FaRegSadCry className="text-7xl text-gray-500 mb-4 mx-auto" />
                                            <h3 className="text-xl font-semibold text-gray-700">
                                                Désolé, il n"y a pas d"offres disponibles pour ce secteur.
                                            </h3>
                                            <p className="text-gray-600">
                                                Aucun emploi trouvé pour les filtres appliqués.
                                            </p>
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
                                        className="p-4 pr-8 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
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
                                                className="px-4 py-2 border rounded-lg text-yellow-600 bg-white hover:bg-yellow-500 hover:text-white"
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
                                                    className={`px-5 py-3 border rounded-lg ${currentPage === page ? "bg-yellow-500 text-white" : "bg-white text-yellow-600"} hover:bg-yellow-500 hover:text-white transition duration-200`}
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
                                                className="px-4 py-2 border rounded-lg text-yellow-600 bg-white hover:bg-yellow-500 hover:text-white"
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
        </>
    );
};

export default JobsPage;
