
import { motion } from "framer-motion";

export default function JobTitle({ job }) {
    return (
        <div className="w-full pb-6">
            <div className='w-full flex flex-col md:flex-row items-center justify-end gap-6'>
                <div className="w-full flex flex-col gap-3">
                    <motion.h3
                        className="w-full mx-auto text-center md:text-left text-lg md:text-xl font-bold capitalize "
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {job?.job_title}
                    </motion.h3>
                </div>
                <button
                    className="block w-max h-max block bg-black hover:bg-yellow-500 text-white text-xs p-3 px-12 flex items-center justify-center gap-2 transition group rounded-xl"
                    onClick={() => router.push('https://www.keys-rh.fr/worker/security/login')}>
                    Candidater
                </button>
            </div>
        </div>
    );
}
