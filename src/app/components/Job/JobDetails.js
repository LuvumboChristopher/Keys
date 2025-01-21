import { motion } from "framer-motion";
import { FaBuilding, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function JobDetails({ job }) {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} className={`w-full flex-col md:flex-row xl:flex-row  items-center justify-center border rounded-xl overflow-hidden flex`}>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={` w-full md:w-[111vw] lg:w-full xl:w-[69vw] 2xl:w-full  bg-gray-50 border-b md:border-b-0  md:border-r  p-6 w-full flex items-center justify-center flex-row gap-5 overflow-hidden py-5 sm:py-4 `}
            >  <div
                className={`w-full flex flex-col xs:flex-row  gap-6 py-2 items-center justify-start`}
            >
                    <div
                        className={`w-full sm:w-2/3 md:w-max  mr-auto space-y-2 text-xs`}
                    >
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            <FaBuilding className="mr-3" />
                            <p className="capitalize truncate whitespace-nowrap">
                                {job?.agency_name}
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >
                            <FaMapMarkerAlt className="mr-3" />
                            <p className="capitalize truncate whitespace-nowrap">
                                {job?.town_name}
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                        >
                            <FaClock className="mr-3" />
                            <p className="capitalize truncate whitespace-nowrap">
                                {job?.contract_type}
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className={`w-full sm:w-1/3 md:w-max max-auto text-xxs bg-white  border text-center p-4 rounded-xl`}
                    >
                        {job?.hourly_rate > 0
                            ? <>
                                {job?.hourly_rate} €<small className="text-xxs">/ heure</small>
                            </>
                            : <span className="text-gray-500">N/R</span>}                    </motion.div>
                </div>
            </motion.div>
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={`p-6 w-full flex flex-col justify-items-center justify-center space-y-2 text-xs `}
            >
                {job?.experience !== undefined && (
                    <li className="flex justify-between">
                        <span className="w-max font-medium">Expérience requise:</span>
                        <span className="text-end">
                            {job.experience === 0
                                ? "Aucune expérience requise"
                                : `${job.experience} ans`}
                        </span>
                    </li>
                )}
                {job?.start_date && (
                    <li className="flex justify-between">
                        <span className="w-max font-medium">Début du travail:</span>
                        <span className='text-end'>{new Date(job.start_date).toLocaleDateString("fr-FR")}</span>
                    </li>
                )}
                {job?.end_date && (
                    <li className="flex justify-between">
                        <span className="w-max font-medium">Fin du travail:</span>
                        <span className='text-end'>{new Date(job.end_date).toLocaleDateString("fr-FR")}</span>
                    </li>
                )}
            </motion.ul>
        </motion.div>
    );
}
