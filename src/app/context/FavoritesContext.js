import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [savedForLater, setSavedForLater] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerAnimation = () => setIsAnimating(true);

    const addFavorite = (job) => {
        if (!favorites.some(fav => fav.offer_id === job.offer_id)) {
            const updatedFavorites = [...favorites, job];
            setFavorites(updatedFavorites);
            triggerAnimation();
        }
    };

    const removeFavorite = (jobId) => {
        const updatedFavorites = favorites.filter(job => job.offer_id !== jobId);
        setFavorites(updatedFavorites);
        triggerAnimation();
    };

    const addSavedForLater = (job) => {
        if (!savedForLater.some(saved => saved.offer_id === job.offer_id)) {
            const updatedSavedLater = [...savedForLater, job];
            setSavedForLater(updatedSavedLater);
            triggerAnimation();
        }
    };

    const toggleFavorite = (job) => {
        const isFavorite = favorites.some(favJob => favJob.offer_id === job.offer_id);
        if (isFavorite) {
            removeFavorite(job.offer_id);
        } else {
            addFavorite(job);
        }
    };

    const toggleSavedForLater = (job) => {
        const isSaved = savedForLater.some(savedJob => savedJob.offer_id === job.offer_id);
        if (isSaved) {
            removeSavedForLater(job.offer_id);
        } else {
            addSavedForLater(job);
        }
    };

    const removeSavedForLater = (jobId) => {
        const updatedSavedLater = savedForLater.filter(job => job.offer_id !== jobId);
        setSavedForLater(updatedSavedLater);
        triggerAnimation();
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 600);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        try {
            const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const savedLater = JSON.parse(localStorage.getItem('savedForLater')) || [];
            setFavorites(savedFavorites);
            setSavedForLater(savedLater);
        } catch (error) {
            console.error('Error loading data from localStorage', error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('savedForLater', JSON.stringify(savedForLater));
    }, [savedForLater]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                savedForLater,
                isAnimating,
                addFavorite,
                removeFavorite,
                addSavedForLater,
                removeSavedForLater,
                toggleFavorite,
                toggleSavedForLater,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
