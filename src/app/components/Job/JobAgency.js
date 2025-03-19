import { agencies } from "@/app/utils/agencies";
import { motion } from "framer-motion";

export default function JobAgency({ job }) {
    console.log(job)
    const agency = agencies.find(agency => job?.agency_name.includes(agency.name));

    if (!agency) {
        return <p className="dar:text-white">Aucune agence trouvée pour ce job.</p>;
    }

    return (
        <>
            <h2 className="xl:hidden dark:text-white  w-full text-md md:text-lg font-semibold mb-6">Agence</h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border rounded-2xl p-10 flex flex-col items-start justify-center lg:items-start h-full md:h-[300px] xl:h-full"
            >
                <div>
                    <h2 className="text-base md:text-lg font-semibold mb-6">Agence de {agency.name}</h2>
                    <ul className="text-sm">
                        <li>Adresse : <a href={agency.mapLink} target="_blank" rel="noopener noreferrer">{agency.address}</a></li>
                        <li>Téléphone : <a href={agency.phoneLink}>{agency.phone}</a></li>
                    </ul>
                </div>
            </motion.div>
        </>
    );
}
