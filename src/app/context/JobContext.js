"use client";

import React, { createContext, useState, useEffect } from 'react';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let allJobs = new Map();
                const jobsPerPage = 50;
                let totalJobs = 0;
                let offset = 0;

                while (true) {
                    const response = await fetch(`${apiUrl}/public.php/open/jobs/jobs/${offset}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();
                    totalJobs = data.total;
                    data.annonces.forEach((job) => {
                        allJobs.set(job.offer_id, job);
                    });

                    if (allJobs.size >= totalJobs) {
                        break;
                    }

                    offset += jobsPerPage;
                }

                const uniqueJobs = Array.from(allJobs.values());
                setJobs(uniqueJobs);
                setFilteredJobs(uniqueJobs);

            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <JobsContext.Provider value={{ jobs, filteredJobs, search, location, loading, setFilteredJobs, setSearch, setLocation, setLoading }}>
            {children}
        </JobsContext.Provider>
    );
};
