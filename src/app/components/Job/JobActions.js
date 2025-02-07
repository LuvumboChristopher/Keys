import React, { useContext } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineSaveAlt, MdOutlineRemoveCircle } from "react-icons/md";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FavoritesContext } from '@/app/context/FavoritesContext';
import { formatSalary } from '@/app/utils/utils';

function JobActions({ job }) {
    const {
        favorites,
        savedForLater,
        toggleFavorite,
        toggleSavedForLater,
    } = useContext(FavoritesContext);

    const router = useRouter();

    return (
        <div className="w-full h-max flex flex-col sm:flex-row justify-between md:justify-start items-center gap-4 py-6 text-xxs">
            <div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hidden w-full mx-auto text-xxs bg-white border text-center p-4 rounded-xl "
            >
                {job?.hourly_rate > 0 ? (
                    <>{formatSalary(job.hourly_rate)}</>
                ) : (
                    <span className="text-gray-500">N/R</span>
                )}
            </div>
            <button onClick={() => toggleFavorite(job)}
                className={`w-full p-4 text-xxs flex items-center justify-center gap-2 transition hover:bg-red-600 hover:text-white rounded-xl ${job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? "bg-red-600 text-white" : "border text-gray-800"}`}>
                {job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? <FaHeart /> : <FaRegHeart />}
                {job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? "Retirer des favoris" : "Ajouter aux favoris"}
            </button>
            <button onClick={() => toggleSavedForLater(job)}
                className={`w-full p-4 text-xxs flex items-center justify-center gap-2 transition hover:bg-yellow-500 hover:text-white rounded-xl ${job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? "bg-yellow-500 text-white" : "border text-gray-800"}`}>
                {job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? <MdOutlineRemoveCircle /> : <MdOutlineSaveAlt />}
                {job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? "Retirer de plus tard" : "Ajouter à plus tard"}
            </button>
            <button onClick={() => router.back()} className="w-full p-4 text-xxs flex items-center justify-center gap-2 transition hover:bg-black hover:text-white rounded-xl border text-gray-800">
                <IoReturnDownBackSharp />
                Retour à la liste
            </button>
        </div>
    );
}

export default JobActions;
