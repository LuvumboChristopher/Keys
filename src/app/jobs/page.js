"use client";

import React, { useState } from "react";
import { jobs } from "../../utils/jobs";
import { sectors } from "../../utils/sectors";
import { motion } from "framer-motion";

import JobFilters from "./components/JobFilters";
import JobList from "./components/JobList";
import JobSearchBar from "./components/JobSearchBar";

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
        perPage: 4,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [location, setLocation] = useState("");


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
            perPage: 6,
        });
        setCurrentPage(1);
    };

    const filteredJobs = jobs.filter((job) => {
        const locationMatch = filters.location
            ? job.location.toLowerCase().includes(filters.location.toLowerCase())
            : true;
        const typeMatch = filters.type
            ? job.type.toLowerCase().includes(filters.type.toLowerCase())
            : true;
        const companyMatch = filters.company
            ? job.company.toLowerCase().includes(filters.company.toLowerCase())
            : true;
        const contractMatch = filters.contractType
            ? job.contractType.toLowerCase() === filters.contractType.toLowerCase()
            : true;
        const experienceMatch = filters.experience
            ? job.experienceRequired.toLowerCase() === filters.experience.toLowerCase()
            : true;
        const sectorMatch = filters.sector
            ? job.sector.toLowerCase().includes(filters.sector.toLowerCase())
            : true;
        const keywordMatch = filters.keyword
            ? job.description.toLowerCase().includes(filters.keyword.toLowerCase())
            : true;
        return (
            locationMatch &&
            typeMatch &&
            companyMatch &&
            contractMatch &&
            experienceMatch &&
            sectorMatch &&
            keywordMatch
        );
    });

    const totalPages = Math.ceil(filteredJobs.length / filters.perPage);
    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * filters.perPage,
        currentPage * filters.perPage
    );

    return (
        <>
            <div className="mx-auto flex gap-8 bg-transparent">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-100 "
                    >
                    <motion.div
                        className=" w-full max-w-7xl mx-auto "
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <JobSearchBar location={location} setLocation={setLocation} />
                    </motion.div>
                        <div className="container bg-grey-500 flex w-full gap-8 pb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-1/4"
                            >
                                <JobFilters
                                    filters={filters}
                                    handleFilterChange={handleFilterChange}
                                    handleResetFilters={handleResetFilters}
                                    sectors={sectors}
                                />
                            </motion.div>

                            <div className="w-4/5">
                                <JobList 
                                jobs={jobs} currentJobs={currentJobs} totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default JobsPage;
