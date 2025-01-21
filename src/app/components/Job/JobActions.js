import React, { useContext } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineSaveAlt, MdOutlineRemoveCircle } from "react-icons/md";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FavoritesContext } from '@/app/context/FavoritesContext';

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
            <button onClick={() => toggleFavorite(job)}
                className={`w-full p-3 text-xxs sm:text-xs flex items-center justify-center gap-2 transition hover:bg-red-600 hover:text-white rounded-xl ${job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? "bg-red-600 text-white" : "border text-gray-800"}`}>
                {job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? <FaHeart /> : <FaRegHeart />}
                {job && favorites.some(favJob => favJob.offer_id === job.offer_id) ? "Retirer des favoris" : "Ajouter aux favoris"}
            </button>
            <button onClick={() => toggleSavedForLater(job)}
                className={`w-full p-3 text-xxs sm:text-xs flex items-center justify-center gap-2 transition hover:bg-yellow-500 hover:text-white rounded-xl ${job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? "bg-yellow-500 text-white" : "border text-gray-800"}`}>
                {job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? <MdOutlineRemoveCircle /> : <MdOutlineSaveAlt />}
                {job && savedForLater.some(savedJob => savedJob.offer_id === job.offer_id) ? "Retirer de plus tard" : "Ajouter à plus tard"}
            </button>
            <button onClick={() => router.push("/jobs")} className="w-full p-3 text-xxs sm:text-xs flex items-center justify-center gap-2 transition hover:bg-black hover:text-white rounded-xl border text-gray-800">
                <IoReturnDownBackSharp />
                Retour à la liste
            </button>
        </div>
    );
}

export default JobActions;
