import React from "react";
import { motion } from 'framer-motion';

const JobPagination = ({ }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full  mx-auto  flex justify-between items-center  mt-8 rounded-lg overflow-hidden"
            >
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`page-btn ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded-lg overflow-hidden`}
                    >
                        {index + 1}
                    </button>
                ))}
            </motion.div>
        </>
    );
};

export default JobPagination;
