import React from "react";
import { motion } from "framer-motion";

const JobPagination = ({ visiblePages, currentPage, handlePageChange, totalPages }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto flex justify-center items-center gap-4 py-4"
        >
            {/* Botón 'Previous' */}
            <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                    currentPage === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-200 text-black"
                }`}
            >
                Précédent
            </button>

            {/* Botones de páginas visibles */}
            {visiblePages.map((page, index) =>
                page === "..." ? (
                    <span key={index} className="px-3 py-2 text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded ${
                            page === currentPage
                                ? "bg-black text-white"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Botón 'Next' */}
            <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                    currentPage === totalPages ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-200 text-black"
                }`}
            >
                Suivant
            </button>
        </motion.div>
    );
};

export default JobPagination;
