'use client';

import { useSearch } from '@/app/context/SearchContext';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TfiPanel } from 'react-icons/tfi';

const JobFilters = ({ filters, handleRemoveFilter }) => {
    const {
        salaryMin, setSalaryMin,
        salaryMax, setSalaryMax,
        contractType, setContractType,
        experience, setExperience,
        startDate, setStartDate,
        endDate, setEndDate,
        agency, setAgency,
    } = useSearch();

    const handleRemoveAllFilters = () => {
        handleRemoveFilter();
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full min-h-[70px] flex items-center gap-5 py-5 border-b  md:py-0 "
            >
                <TfiPanel className="dark:text-white text-sm md:text-base md:hidden" />
                <h2 className="dark:text-white text-sm md:text-base text-left font-semibold ">Filtres</h2>
            </motion.div>

            <div
                className={`w-full flex flex-row md:flex-col lg:flex-row xl:flex-col justify-start xl:justify-center items-end overflow-x-auto whitespace-nowrap gap-5 pt-5 scrollbar-hide relative transition-all duration-300`}
            >
                <div className='w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full'>
                    <label htmlFor="agency" className="dark:text-white block pb-4 text-xxs">Agence</label>
                    <div className="flex items-center justify-center gap-1 w-full px-3 lg:px-6 bg-white border rounded-lg overflow-hidden shadow-sm">
                    <select
                            id="agency"
                            name="agency"
                            value={filters?.agency || agency}
                            onChange={(e) => setAgency(e.target.value)}
                            className="w-full focus:outline-none py-3 md:py-4 text-xxs bg-white"
                        >
                            <option value="">Toutes les agences</option>

                            <option value="Keys RH - Chambéry">Chambéry</option>
                            <option value="Keys RH - Meyzieu">Meyzieu</option>
                            <option value="Keys RH - Marne La Vallée">Marne La Vallée</option>
                            <option value="Keys RH - Lyon">Lyon</option>
                            <option value="Keys RH - Toulouse">Toulouse</option>
                        </select>
                        <FaChevronDown className="text-gray-600 text-xxs" />
                    </div>
                </div>

                <div className='w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full'>
                    <label htmlFor="contractType" className="dark:text-white block py-4 text-xxs">Type de contrat</label>
                    <div className="flex items-center justify-center gap-1 w-full px-6 bg-white border rounded-lg overflow-hidden shadow-sm">
                    <select
                            id="contractType"
                            name="contractType"
                            value={filters?.contractType || contractType}
                            onChange={(e) => setContractType(e.target.value)}
                            className="w-full focus:outline-none py-3 md:py-4 text-xxs bg-white"
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

                <div className='w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full'>
                    <label htmlFor="experienceRequired" className="dark:text-white block py-4 text-xxs">Expérience requise</label>
                    <div className="flex items-center justify-center gap-1 w-full px-6 bg-white border rounded-lg overflow-hidden shadow-sm">
                        <select
                            id="experienceRequired"
                            name="experienceRequired"
                            value={filters?.experience || experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full focus:outline-none py-3 md:py-4 text-xxs bg-white"
                        >
                            <option value="">Tous les niveaux</option>
                            <option value="0">Sans expérience</option>
                            <option value="1-2">1-2 ans</option>
                            <option value="2-3">2-3 ans</option>
                            <option value="4+">4+ ans</option>
                        </select>
                        <FaChevronDown className="text-gray-600 text-xxs" />
                    </div>
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="salaryMin" className="dark:text-white block py-3 md:py-4 text-xxs">Salaire (minimum)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="salaryMin"
                        value={filters?.salaryMin || salaryMin}
                        onChange={(e) => setSalaryMin(e.target.value)}
                        className="w-full px-6 py-3 md:py-4 text-xxs bg-white border w-full focus:outline-none rounded-lg overflow-hidden shadow-sm"
                        placeholder="12,00 €/ heure"
                    />
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="salaryMax" className="dark:text-white block py-3 md:py-4 text-xxs">Salaire (maximum)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="salaryMax"
                        value={filters?.salaryMax || salaryMax}
                        onChange={(e) => setSalaryMax(e.target.value)}
                        className="w-full px-6 py-3 md:py-4 text-xxs bg-white border w-full focus:outline-none rounded-lg overflow-hidden shadow-sm"
                        placeholder="19,00 €/ heure"
                    />
                </div>

                <div className="hidden sm:block w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="startDate" className="dark:text-white block py-3 md:py-4 text-xxs">Date de début</label>
                    <input
                        type="date"
                        name="startDate"
                        value={filters?.startDate || startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="dd/mm/aaaa" 
                        inputMode="numeric" pattern="\d{4}-\d{2}-\d{2}"
                        className="w-full px-6 py-3 md:py-4 text-xxs bg-white border w-full focus:outline-none rounded-lg overflow-hidden shadow-sm"
                    />
                </div>

                <div className="hidden sm:block w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="endDate" className="dark:text-white block py-3 md:py-4 text-xxs">Date de fin</label>
                    <input
                        type="date"
                        name="endDate"
                        value={filters?.endDate || endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="dd/mm/aaaa" 
                        inputMode="numeric" pattern="\d{4}-\d{2}-\d{2}"
                        className="w-full px-6 py-3 md:py-4 text-xxs bg-white border w-full focus:outline-none rounded-lg overflow-hidden shadow-sm"
                    />
                </div>
                
                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <button
                        onClick={() => {
                            handleRemoveAllFilters();
                            window.scrollTo({
                                top: 0,
                            });
                        }}
                        className="w-full bg-gray-200 border text-black text-xs md:mt-6 py-3 md:py-4 md:px-16 hover:bg-black hover:text-white transition duration-400 rounded-lg overflow-hidden shadow-sm"
                    >
                        Réinitialiser
                    </button>
                </div>
            </div>
        </>
    );
};

export default JobFilters;
