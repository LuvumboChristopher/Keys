import { motion } from "framer-motion";
import { TfiSearch, TfiLocationArrow, TfiPanel } from "react-icons/tfi";
import { useRef, useState, useEffect } from "react";
import { useSearch } from "@/app/context/SearchContext";
import { FaChevronDown, FaTrash } from "react-icons/fa";
import { useUIContext } from "@/app/context/UIContext";

export const SearchComponent = ({ scrolled, showBar }) => {
    const {
        jobTitle,
        setJobTitle,
        location,
        setLocation,
        contractType,
        setContractType,
        experience,
        setExperience,
        salaryMin,
        setSalaryMin,
        salaryMax,
        setSalaryMax,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        handleSearch,
    } = useSearch();

    const inputRef = useRef(null);
    const [showFilters, setShowFilters] = useState(false);
    const [localJobTitle, setLocalJobTitle] = useState(jobTitle);
    const [localLocation, setLocalLocation] = useState(location);
    const [localContractType, setLocalContractType] = useState(contractType);
    const [localExperience, setLocalExperience] = useState(experience);
    const [localStartDate, setLocalStartDate] = useState(startDate);
    const [localEndDate, setLocalEndDate] = useState(endDate);
    const [localSalaryMin, setLocalSalaryMin] = useState(salaryMin);
    const [localSalaryMax, setLocalSalaryMax] = useState(salaryMax);
    const { toggleFilters, isFiltersVisible } = useUIContext();

    useEffect(() => {
        if (showBar && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showBar]);

    const handleSubmit = () => {
        setJobTitle(localJobTitle);
        setLocation(localLocation);
        setContractType(localContractType);
        setExperience(localExperience);
        setStartDate(localStartDate);
        setEndDate(localEndDate);
        setSalaryMin(localSalaryMin);
        setSalaryMax(localSalaryMax);
        handleSearch();
    };

    const handleRemoveFilter = () => {
        setLocalJobTitle("");
        setLocalLocation("");
        setLocalContractType("");
        setLocalExperience("");
        setLocalStartDate("");
        setLocalEndDate("");
        setLocalSalaryMin("");
        setLocalSalaryMax("");
    };

    return (
        <>
            {showBar && (
                <>
                    <motion.div
                        className={`bg-white dark:bg-gray-900 flex justify-center items-center mx-auto relative ease z-[9996] text-xs duration-300 shadow-lg  ${showBar ? "lg:block hidden" : "hidden"}`}
                        style={{
                            position: "fixed",
                            top: "130px",
                            left: 0,
                            right: 0,
                            zIndex: 50,
                            transition: "all 0.3s ease-in-out",
                            color: "black",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="w-full container mx-auto md:flex gap-4 pb-6 duration-300 cursor-pointer">
                            <div className="w-full relative bg-gray-50 border-b lg:border-[1px] rounded-xl px-6 flex items-center group focus-within:border-gray-300">
                                <TfiSearch className="text-lg text-gray-800" />
                                <input
                                    ref={inputRef}
                                    placeholder="Indiquez un métier"
                                    className="w-full bg-gray-50  px-6 py-5 text-xxs  text-gray-800 focus:outline-none"
                                    value={localJobTitle}
                                    onChange={(e) =>
                                        setLocalJobTitle(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                                    }
                                />
                                {localJobTitle && (
                                    <button
                                        onClick={() => setLocalJobTitle("")}
                                        className="absolute right-5 text-white0 hover:text-gray-800"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div className="w-full relative bg-gray-50 border-b lg:border-[1px] rounded-xl px-6 flex items-center focus-within:border-gray-300 ">
                                <TfiLocationArrow className="text-lg text-gray-800" />
                                <input
                                    className="w-full bg-gray-50  px-6 py-5 text-xxs  text-gray-800 focus:outline-none"
                                    placeholder="Sélectionnez un lieu"
                                    name="location"
                                    value={localLocation}
                                    onChange={(e) =>
                                        setLocalLocation(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                                    }
                                />
                                {localLocation && (
                                    <button
                                        onClick={() => setLocalLocation("")}
                                        className="absolute right-5 text-white0 hover:text-gray-800"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={toggleFilters}
                                className={`flex items-center px-6 py-5 text-xxs text-gray-500 rounded-xl focus:outline-none border ${isFiltersVisible ? 'bg-yellow-500 dark:bg-emerald-600 dark:border-emerald-600' : 'border border-gray-200 bg-gray-50'}`}
                            >
                                <TfiPanel className={`text-md text-gray-800 ${isFiltersVisible ? 'text-gray-800 dark:text-white' : 'text-gray-800'}`} />
                            </button>
                                <div
                                    className={`w-full absolute top-full left-0 bg-gray-50 border-t border-b shadow-sm transition-all duration-300 ${isFiltersVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <div className="container flex items-end gap-4 py-7">
                                        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-6 items-end">
                                            <div >
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Type de contrat
                                                </label>
                                                <div className="flex items-center justify-center gap-1 w-full px-3 bg-white border rounded-xl overflow-hidden focus:outline-none focus-within:border-gray-300">
                                                    <select
                                                        id="contractType"
                                                        name="contractType"
                                                        value={localContractType}
                                                        onChange={(e) => setLocalContractType(e.target.value)}
                                                        className="w-full text-gray-800 py-3 text-xxs focus:outline-none bg-white"
                                                    >
                                                        <option value="">Type de contrat</option>
                                                        <option value="Interim">Interim</option>
                                                        <option value="CDI">CDI</option>
                                                        <option value="CDD">CDD</option>
                                                        <option value="Freelance">Freelance</option>
                                                        <option value="Stage">Stage</option>
                                                    </select>
                                                    <FaChevronDown className="text-gray-600 text-xxs" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Expérience requise
                                                </label>
                                                <div className="flex items-center justify-center gap-1 w-full py-0 px-3 bg-white border rounded-xl overflow-hidden focus:outline-none focus-within:border-gray-300">
                                                    <select
                                                        id="experienceRequired"
                                                        name="experienceRequired"
                                                        value={localExperience}
                                                        onChange={(e) => setLocalExperience(e.target.value)}
                                                        className="w-full text-gray-800 py-3 text-xxs focus:outline-none bg-white"
                                                    >
                                                        <option className="text-xxs" value="">Tous les niveaux</option>
                                                        <option className="text-xxs" value="0">Sans expérience</option>
                                                        <option className="text-xxs" value="1-2">1-2 ans</option>
                                                        <option className="text-xxs" value="2-3">2-3 ans</option>
                                                        <option className="text-xxs" value="4+">4+ ans</option>
                                                    </select>
                                                    <FaChevronDown className="text-gray-600 text-xxs" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Salaire minimum
                                                </label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    className="text-gray-800 block w-full px-4 py-3 text-xxs bg-white border border-gray-300 rounded-xl focus:outline-none focus-within:border-gray-300"
                                                    placeholder="12,00 €/ heure"
                                                    value={localSalaryMin}
                                                    onChange={(e) => setLocalSalaryMin(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Salaire maximum
                                                </label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    className="text-gray-800 block w-full px-4 py-3 text-xxs  bg-white border border-gray-300 rounded-xl focus:outline-none focus-within:border-gray-300"
                                                    placeholder="23,00 €/ heure"
                                                    value={localSalaryMax}
                                                    onChange={(e) => setLocalSalaryMax(e.target.value)}
                                                />
                                            </div>

                                            <div className="hidden sm:block">
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Date de début
                                                </label>
                                                <input
                                                    type="date"
                                                    className="text-gray-800 block w-full px-4 pt-[11px] pb-[11px] text-xxs bg-white border border-gray-300 rounded-xl focus:outline-none focus-within:border-gray-300"
                                                    value={localStartDate}
                                                    placeholder="dd/mm/aaaa" 
                                                    inputMode="numeric" pattern="\d{4}-\d{2}-\d{2}"
                                                    onChange={(e) => setLocalStartDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="hidden sm:block">
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    Date de fin
                                                </label>
                                                <input
                                                    type="date"
                                                    className="text-gray-800 block w-full px-4 pt-[11px] pb-[11px] text-xxs bg-white border border-gray-300 rounded-xl focus:outline-none focus-within:border-gray-300"
                                                    value={localEndDate}
                                                    placeholder="dd/mm/aaaa" 
                                                    inputMode="numeric" pattern="\d{4}-\d{2}-\d{2}"
                                                    onChange={(e) => setLocalEndDate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                            <div>
                                                <label className="block text-xxs font-medium text-gray-800 pb-3">
                                                    {""}
                                                </label>
                                                <div onClick={handleRemoveFilter}
                                                    className="w-max p-[15px] bg-red-700 hover:bg-red-600 flex items-center rounded-xl border-[1px] focus-within:border-gray-300">
                                                    <FaTrash className="text-white text-xxs" />
                                                </div>
                                            </div>
                                     
                                    </div>
                                </div>
                       
                            <button onClick={handleSubmit} className="block w-max">
                                <div
                                    className="w-max block mx-auto flex items-center justify-center dark:bg-yellow-500 dark:text-black bg-black text-white text-xxs py-5 px-16 font-semibold hover:bg-yellow-500 dark:hover:bg-white dark:hover:text-black hover:text-black border-black rounded-xl transition-all duration-500"
                                >
                                    Consultez nos offres
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
};
