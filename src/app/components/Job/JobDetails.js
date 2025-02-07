import { formatSalary } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { FaBuilding, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function JobDetails({ job }) {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} className={`w-full flex flex-col md:flex-row gap-4 xl:flex-row  items-center justify-center`}>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full md:w-[60%] 2xl:w-full md:min-h-[90px] bg-gray-50 border p-6 flex items-center justify-center flex-row gap-5 overflow-hidden rounded-xl"
            >
                <div className="w-full flex flex-col xs:flex-row gap-6  items-center justify-start">
                    <div className="w-full sm:w-2/3 md:w-max mr-auto space-y-2 text-xs">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            <FaBuilding className="mr-3 dark:text-blue-500" />
                            <p className="capitalize truncate whitespace-nowrap">{job?.agency_name}</p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >
                            <FaMapMarkerAlt className="mr-3 dark:text-emerald-600" />
                            <p className="capitalize truncate whitespace-nowrap">{job?.town_name}</p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        >
                            <FaClock className="mr-3 dark:text-amber-500" />
                            <p className="capitalize truncate whitespace-nowrap">{job?.contract_type}</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="w-full xs:w-max max-auto text-xxs bg-white border text-center p-4 rounded-xl"
                    >
                        {job?.hourly_rate > 0 ? (
                            <>{formatSalary(job.hourly_rate)}</>
                        ) : (
                            <span className="text-gray-500">N/R</span>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={`px-6 w-full md:w-[40%]  flex flex-col justify-items-center justify-center space-y-2 text-xs p-6 border rounded-xl`}
            >
                {job?.experience !== undefined && (
                    <li className="flex justify-between gap-5">
                        <span className="w-max font-medium">Expérience requise:</span>
                        <span className="text-end ">
                            {job.experience === 0
                                ? "Sans expérience"
                                : `${job.experience} ans`}
                        </span>
                    </li>
                )}
                {job?.start_date && (
                    <li className="flex justify-between gap-5">
                        <span className="w-max font-medium">Début du travail:</span>
                        <span className='text-end'>{new Date(job.start_date).toLocaleDateString("fr-FR")}</span>
                    </li>
                )}
                {job?.end_date && (
                    <li className="flex justify-between gap-5">
                        <span className="w-max font-medium">Fin du travail:</span>
                        <span className='text-end'>{new Date(job.end_date).toLocaleDateString("fr-FR")}</span>
                    </li>
                )}
            </motion.ul>

        </motion.div>
    );
}
