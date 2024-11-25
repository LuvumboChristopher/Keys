"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBuilding, FaMapMarkerAlt, FaClock, FaRegSadCry, FaKey } from "react-icons/fa";
import { jobs } from "@/utils/jobs";
import { sectors } from "../../utils/sectors.js";
import { motion } from "framer-motion";


export default function JobsPreview() {
    const [selectedSector, setSelectedSector] = useState("All");

    const filteredJobs = selectedSector === "All"
        ? jobs.slice(0, 4)
        : jobs.filter(job => job.sector === selectedSector).slice(0, 4);

    return (
        <section id="dernières-offres-d'emploi" className="bg-gray-100 py-12 border-t border-b">
            <div className="container">
                <div className="relative z-10">
                    <h2 className="text-center text-3xl lg:text-4xl py-2">
                        Dernières<motion.span
                            className="px-3 bg-yellow-500 cursor-pointer"
                            style={{ display: "inline-block" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                        offres
                        </motion.span>
                        d&#39;emploi
                    </h2>
                    <p className="text-black py-3 mb-6 max-w-2xl mx-auto text-center">
                        Découvrez les dernières opportunités d&#39;emploi dans divers secteurs. Sélectionnez un secteur pour voir les offres les plus pertinentes.
                    </p>
                </div>

                <div className="flex justify-center items-center mb-4 space-x-4 overflow-scroll">
                    <button
                        className={`  font-semibold ${selectedSector === "All" ? "bg-yellow-500 hover:bg-yellow-400 text-black" : "bg-white text-black border"}`}
                        onClick={() => setSelectedSector("All")}
                    >
                        <p className="text-sm p-3">Tous</p>
                    </button>

                    {sectors && sectors.length > 0 ? (
                        sectors.map((sector) => (
                            <button
                                key={sector.name}
                                className={`  font-semibold ${selectedSector === sector.name ? "bg-yellow-500 hover:bg-yellow-400 text-black" : "bg-white text-black border"}`}
                                onClick={() => setSelectedSector(sector.name)}
                            >
                                <p className="text-sm p-3">{sector.name}</p>
                            </button>
                        ))
                    ) : (
                        <p className="text-black">Aucun secteur disponible.</p>
                    )}
                </div>

                {filteredJobs.length === 0 ? (
                    <div className="text-center py-24">
                        <FaRegSadCry className="w-full text-7xl text-black mb-4 text-center" />
                        <h3 className="text-xl font-semibold text-black">Désolé, il n&#39;y a pas d&#39;offres disponibles pour ce secteur.</h3>
                        <p className="text-black">Nous vous invitons à consulter d&#39;autres secteurs ou revenir plus tard pour de nouvelles offres.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 py-4">
                        {filteredJobs.map((job, index) => (
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
                                            className="text-3xl group-hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100"
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
                )}

                <Link href="/jobs" className="mt-4 w-96 mx-auto bg-white hover:bg-black hover:text-white border flex items-center justify-center bg-transparent font-semibold px-12 py-3 transition-all duration-400">
                        Voir toutes les offres
                </Link>
            </div>
        </section>
    );
}
