'use client';

import { useSearch } from '@/app/context/SearchContext';
import React from 'react';

const JobFilters = ({ filters, handleRemoveFilter }) => {
    const {
        salaryMin, setSalaryMin,
        salaryMax, setSalaryMax,
        contractType, setContractType,
        experience, setExperience,
        startDate, setStartDate,
        endDate, setEndDate,
    } = useSearch();

    const handleRemoveAllFilters = () => {
        handleRemoveFilter();
    };

    return (
        <>
            <div className="min-h-[70px] flex justify-between items-center gap-6 border-b lg:pb-6">
                <h2 className="text-base font-semibold">Filtres</h2>
            </div>
            <div
                className={`w-full flex flex-row md:flex-col lg:flex-row xl:flex-col justify-start xl:justify-center items-end overflow-x-auto whitespace-nowrap gap-3 pt-5 scrollbar-hide relative transition-all duration-300`}
            >
                <div className='w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full'>
                    <label htmlFor="contractType" className="block pb-4 text-xxs">Type de contrat</label>
                    <div className="w-full px-3 bg-white border rounded-xl overflow-hidden shadow-sm">
                        <select
                            id="contractType"
                            name="contractType"
                            value={filters?.contractType || contractType}
                            onChange={(e) => setContractType(e.target.value)}
                            className="w-full focus:outline-none py-4 text-xxs"
                        >
                            <option value="">Type de contrat</option>
                            <option value="Interim">Interim</option>
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Stage">Stage</option>
                        </select>
                    </div>
                </div>
                <div className='w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full'>
                    <label htmlFor="experienceRequired" className="block py-4 text-xxs">Expérience requise</label>
                    <div className="w-full px-3 bg-white border rounded-xl overflow-hidden shadow-sm">
                        <select
                            id="experienceRequired"
                            name="experienceRequired"
                            value={filters?.experience || experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full focus:outline-none py-4 text-xxs"
                        >
                            <option value="">Tous les niveaux</option>
                            <option value="0">Sans expérience</option>
                            <option value="1-2">1-2 ans</option>
                            <option value="2-3">2-3 ans</option>
                            <option value="4+">4+ ans</option>
                        </select>
                    </div>
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="salaryMin" className="block py-4 text-xxs">Salaire (minimum)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="salaryMin"
                        value={filters?.salaryMin || salaryMin}
                        onChange={(e) => setSalaryMin(e.target.value)}
                        className="w-full px-6 py-4 text-xxs border w-full focus:outline-none rounded-xl overflow-hidden shadow-sm"
                        placeholder="12,00 €/ heure"
                    />
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="salaryMax" className="block py-4 text-xxs">Salaire (maximum)</label>
                    <input
                        type="number"
                        step="0.01"
                        name="salaryMax"
                        value={filters?.salaryMax || salaryMax}
                        onChange={(e) => setSalaryMax(e.target.value)}
                        className="w-full px-6 py-4 text-xxs border w-full focus:outline-none rounded-xl overflow-hidden shadow-sm"
                        placeholder="19,00 €/ heure"
                    />
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="startDate" className="block py-4 text-xxs">Date de début</label>
                    <input
                        type="date"
                        name="startDate"
                        value={filters?.startDate || startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-6 py-4 text-xxs border w-full focus:outline-none rounded-xl overflow-hidden shadow-sm"
                    />
                </div>

                <div className="w-full min-w-[150px] md:min-w-full lg:min-w-[185px] xl:min-w-full">
                    <label htmlFor="endDate" className="block py-4 text-xxs">Date de fin</label>
                    <input
                        type="date"
                        name="endDate"
                        value={filters?.endDate || endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-6 py-4 text-xxs border w-full focus:outline-none rounded-xl overflow-hidden shadow-sm"
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
                        className="w-max xl:w-full bg-gray-200 border text-black text-xs lg:mt-6 py-4 px-16 hover:bg-black hover:text-white transition duration-400 rounded-xl overflow-hidden shadow-sm"
                    >
                        Réinitialiser
                    </button>
                </div>
            </div>
        </>
    );
};

export default JobFilters;
