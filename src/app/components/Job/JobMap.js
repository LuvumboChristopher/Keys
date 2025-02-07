import { motion } from "framer-motion";

export default function JobMap({ job }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"            
        >
            {job?.town_name && (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                    <h2 className="dark:text-white  w-full text-md md:text-lg font-semibold mb-6">Localisation</h2>
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(job.town_name)}&output=embed&hl=fr&z=12`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="shadow-md border rounded-xl overflow-hidden h-[180px] md:h-[300px]"
                    ></iframe>
                </motion.div>
            )}
        </motion.div>
    );
}
