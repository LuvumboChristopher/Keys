'use client';

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [salaryMin, setSalaryMin] = useState("");
    const [salaryMax, setSalaryMax] = useState("");
    const [contractType, setContractType] = useState("");
    const [experience, setExperience] = useState("");
    const [postedDate, setPostedDate] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [locationCoordinates, setLocationCoordinates] = useState(null);

    const router = useRouter();

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRadians = (degree) => (degree * Math.PI) / 180;

        const R = 6371; 
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) *
                Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; 
    };

    const setCoordinatesFromLocation = async () => {
        if (location) {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
                );
                const data = await response.json();
                if (data.length > 0) {
                    setLocationCoordinates({
                        latitude: parseFloat(data[0].lat),
                        longitude: parseFloat(data[0].lon),
                    });
                } else {
                    console.warn("No coordinates found for the location:", location);
                    setLocationCoordinates(null);
                }
            } catch (error) {
                console.error("Error fetching location coordinates:", error);
            }
        } else {
            setLocationCoordinates(null);
        }
    };

    useEffect(() => {
        setCoordinatesFromLocation();
    }, [location]);

    const getBaseLocation = () => {
        return locationCoordinates;
    };

    const filterJobsByDistance = (jobs, maxDistance) => {
        const baseLocation = getBaseLocation();
        if (baseLocation?.latitude && baseLocation?.longitude) {
            return jobs.filter(job => {
                const distance = calculateDistance(
                    baseLocation.latitude,
                    baseLocation.longitude,
                    job.latitude,
                    job.longitude
                );
                return distance <= maxDistance; 
            });
        }
        return jobs; 
    };

    const handleSearch = async () => {
        let searchUrl = "/jobs";
        const params = new URLSearchParams();

        if (jobTitle) params.append('keyword', jobTitle);
        if (location) params.append('location', location);
        if (salaryMin) params.append('salaryMin', salaryMin);
        if (salaryMax) params.append('salaryMax', salaryMax);
        if (contractType) params.append('contractType', contractType);
        if (experience) params.append('experience', experience);
        if (startDate) params.append('startDate', startDate);
        if (endDate) params.append('endDate', endDate);

        if (params.toString()) {
            searchUrl += `?${params.toString()}`;
        }

        router.push(searchUrl);
    };

    const handleRemoveFilter = () => {
        setJobTitle("");
        setLocation("");
        setSalaryMin("");
        setSalaryMax("");
        setContractType("");
        setExperience("");
        setPostedDate("");
        setJobLevel("");
        setStartDate("");
        setEndDate("");
        setLocationCoordinates(null);
    };

    const handleResetDistance = () => {
        setLocation(""); 
        setLocationCoordinates(null);
    };

    return (
        <SearchContext.Provider value={{
            jobTitle, setJobTitle,
            location, setLocation,
            salaryMin, setSalaryMin,
            salaryMax, setSalaryMax,
            contractType, setContractType,
            experience, setExperience,
            postedDate, setPostedDate,
            jobLevel, setJobLevel,
            startDate, setStartDate,
            endDate, setEndDate,
            locationCoordinates,
            filterJobsByDistance, 
            handleSearch,
            handleRemoveFilter,
            handleResetDistance, 
        }}>
            {children}
        </SearchContext.Provider>
    );
};
