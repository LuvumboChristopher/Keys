import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import JobFilters from "../../app/components/Job/JobFilters";
import JobList from "../../app/components/Job/JobList";
import JobSearchBar from "../../app/components/Job/JobSearchBar";
import { useSearch } from "@/app/context/SearchContext";
import Head from "next/head";
import { pageTitles } from "@/app/utils/titles";
import { JobsContext } from "@/app/context/JobContext";
import { CallToActionInfo } from "@/app/components/Home/CallToActionInfo";
import AnimatedText from "@/app/components/Home/AnimatedText";

const JobsPage = () => {
    const { jobs, loading, setLoading } = useContext(JobsContext);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const {
        jobTitle,
        location,
        salaryMin,
        salaryMax,
        contractType,
        experience,
        postedDate,
        jobLevel,
        startDate,
        endDate,
        filterJobsByDistance,
        locationCoordinates,
        handleSearch,
        handleRemoveFilter,
        agency,
    } = useSearch();

    useEffect(() => {
        const applyFilters = () => {
            setLoading(true); 
            let filtered = jobs;

            if (jobTitle) {
                filtered = filtered.filter(job =>
                    job.job_title?.toLowerCase().includes(jobTitle.toLowerCase()) || 
                    job.job_description?.toLowerCase().includes(jobTitle.toLowerCase())
                );
            }

            if (location) {
                filtered = filtered.filter(job =>
                    job.town_name?.toLowerCase().includes(location.toLowerCase())
                );
            }

            if (agency) {
                filtered = filtered.filter(job =>
                    job.agency_name?.toLowerCase().includes(agency.toLowerCase())
                );
            }

            if (salaryMin || salaryMax) {
                filtered = filtered.filter(job => {
                    const salary = parseInt(job.salary);
                    const minSalary = salaryMin ? parseInt(salaryMin) : 0;
                    const maxSalary = salaryMax ? parseInt(salaryMax) : Infinity;
                    return salary >= minSalary && salary <= maxSalary;
                });
            }

            if (contractType) {
                filtered = filtered.filter(job =>
                    job.contract_type?.toLowerCase().includes(contractType.toLowerCase())
                );
            }

            if (experience) {
                filtered = filtered.filter(job =>
                    job.experience === parseInt(experience)
                );
            }

            if (postedDate) {
                const dateLimit = new Date();
                if (postedDate === '7days') {
                    dateLimit.setDate(dateLimit.getDate() - 7);
                } else if (postedDate === '30days') {
                    dateLimit.setMonth(dateLimit.getMonth() - 1);
                }
                filtered = filtered.filter(job => new Date(job.posted_date) >= dateLimit);
            }

            if (jobLevel) {
                filtered = filtered.filter(job =>
                    job.job_level?.toLowerCase().includes(jobLevel.toLowerCase())
                );
            }

            if (startDate) {
                const startDateObj = new Date(startDate);
                filtered = filtered.filter(job => new Date(job.start_date) >= startDateObj);
            }
            if (endDate) {
                const endDateObj = new Date(endDate);
                filtered = filtered.filter(job => new Date(job.end_date) <= endDateObj);
            }

            if (locationCoordinates) {
                filtered = filterJobsByDistance(filtered, 50);
            }

            setFilteredJobs(filtered);
            setLoading(false);
        };

        applyFilters();
    }, [
        jobTitle, location, salaryMin, salaryMax, contractType, experience, postedDate, jobLevel, startDate, endDate, jobs,
        locationCoordinates, filterJobsByDistance, agency
    ]);

    return (
        <>
            <Head>
                <title>{pageTitles.jobPage}</title>
            </Head>
            <div className="mx-auto flex gap-8 bg-transparent">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="dark:bg-gray-900 bg-gray-100 "
                    >
                        <AnimatedText/>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <JobSearchBar 
                                location={location} 
                                handleRemoveFilter={handleRemoveFilter}
                                keyword={jobTitle}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="dark:bg-gray-900 py-4 md:py-8"
                        >
                            <div className="container flex flex-col md:flex-row lg:flex-col xl:flex-row w-full gap-10 ">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full md:w-[35%] lg:w-full xl:w-1/6"
                                >
                                    <JobFilters 
                                        filters={{
                                            jobTitle, location, salaryMin, salaryMax, contractType, experience, postedDate, jobLevel, startDate, endDate, filterJobsByDistance, agency
                                        }} 
                                        handleRemoveFilter={handleRemoveFilter}
                                        onFilterChange={handleSearch} 
                                    />
                                </motion.div>
                                <div className="w-full  md:w-2/3 lg:w-full xl:w-5/6">
                                    <JobList jobs={filteredJobs} loading={loading} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default JobsPage;
