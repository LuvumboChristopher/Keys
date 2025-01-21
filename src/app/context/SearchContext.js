"use client"
import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

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
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const router = useRouter();
    const pathname = usePathname();

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error obtaining location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        if (pathname !== "/jobs") {
            setJobTitle("");
            setLocation("");
            setSalaryMin("");
            setSalaryMax("");
            setContractType("");
            setExperience("");
            setStartDate("");
            setEndDate("");
        }
    }, [pathname]);

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
        if (latitude && longitude) {
            params.append("latitude", latitude);
            params.append("longitude", longitude);
        }

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
        setStartDate("");
        setEndDate("");
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
            latitude,longitude,
            getUserLocation,
            handleSearch,
            handleRemoveFilter,
        }}>
            {children}
        </SearchContext.Provider>
    );
};
