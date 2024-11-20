"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Simulación de una función para obtener datos de la API de ofertas
const fetchJobs = async () => {
  // Aquí iría la llamada a la API real; usa una URL como `https://tu-api.com/jobs`
  return [
    { id: 1, title: "Développeur Frontend", company: "TechCorp", location: "Lyon", type: "CDI" },
    { id: 2, title: "Responsable Commercial", company: "Business Solutions", location: "Paris", type: "CDD" },
    // Más datos de trabajos...
  ];
};

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    perPage: 10,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (e) => {
    setFilters({ ...filters, perPage: parseInt(e.target.value) });
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({ jobType: "", location: "", perPage: 10 });
  };

  const filteredJobs = jobs.length
    ? jobs
        .filter((job) =>
          filters.jobType ? job.type.toLowerCase().includes(filters.jobType.toLowerCase()) : true
        )
        .filter((job) =>
          filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true
        )
    : [];

  const totalPages = Math.ceil(filteredJobs.length / filters.perPage);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * filters.perPage,
    currentPage * filters.perPage
  );

  return (
    <div className="container mx-auto p-6 flex gap-8">
      <div className="w-full">
        {/* Ruta de navegación */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/">Accueil</Link> / <span className="text-gray-700 font-semibold">Offres d"emploi</span>
        </nav>

        {/* Buscador principal */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Rechercher des offres d"emploi</h1>
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              name="jobType"
              value={filters.jobType}
              onChange={handleFilterChange}
              className="p-2 border rounded-lg w-1/4 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Type de travail (ex: Commercial)"
            />
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="p-2 border rounded-lg w-1/4 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Lieu (ex: Lyon)"
            />
          </div>
        </div>

        {/* Selección del número de ofertas y paginación */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium text-gray-700">Offres par page :</label>
            <select
              id="perPage"
              name="perPage"
              value={filters.perPage}
              onChange={handlePerPageChange}
              className="p-2 border rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div className="pagination flex gap-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page + 1 ? "bg-yellow-500 text-white" : "bg-white text-yellow-600"
                } hover:bg-yellow-500 hover:text-white transition duration-200`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="flex">
          {/* Filtros en el lateral izquierdo */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Filtres de recherche</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleResetFilters}
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg text-center hover:bg-yellow-600 transition duration-200 mb-4"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>

          {/* Resultados de trabajos */}
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg mx-6">
            <h2 className="text-xl font-semibold mb-4">Offres d"emploi</h2>
            {filteredJobs.length === 0 ? (
              <p className="text-red-500">Aucune offre ne correspond à vos critères.</p>
            ) : (
              <div className="jobs">
                {currentJobs.map((job, index) => (
                  <div key={index} className="job mb-6 p-4 border rounded-lg shadow-sm hover:bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-600">
                      {job.company} - {job.location}
                    </p>
                    <p className="text-sm text-gray-600">{job.type}</p>
                    <Link href={`/jobs/${job.id}`} className="text-blue-500 hover:underline mt-2 block">
                      Voir les détails
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Paginación en la parte inferior */}
            <div className="pagination mt-8 flex justify-center gap-2">
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page + 1)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === page + 1 ? "bg-yellow-500 text-white" : "bg-white text-yellow-600"
                  } hover:bg-yellow-500 hover:text-white transition duration-200`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default JobsPage;
