import React from "react";

const JobFilters = ({ filters, handleFilterChange, handleResetFilters, sectors }) => {
    return (
        <>
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
                        className="p-4 border w-full rounded-md focus:outline-none"
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
                        className="p-4 border w-full rounded-md focus:outline-none"
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
                        className="p-4 border w-full rounded-md focus:outline-none"
                    >
                        <option value="">Tous les secteurs</option>
                        {sectors.map((sector, index) => (
                            <option key={index} value={sector.name}>{sector.name}</option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleResetFilters}
                    className="w-full bg-yellow-500 text-white py-4 px-4 hover:bg-black transition duration-400 rounded-lg overflow-hidden"
                >
                    Réinitialiser
                </button>
            </div>
        </>
    );
};

export default JobFilters;
