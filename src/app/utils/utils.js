export const currentYear = new Date().getFullYear();

export const decodeHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const textContent = doc.documentElement.textContent || "";
    return textContent.replace(/\s+/g, " ").trim();
};

export const normalizeString = (str) => {
    return str
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
};


export const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;

    const R = 6371; 
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
};

export const formatSalary = (rate) => {
    if (rate <= 100) {
        return (
            <>
                <small className="text-xxs">{rate} €/ heure</small>
            </>
        );
    } else if (rate > 100 && rate <= 10000) {
        return (
            <>
                <small className="text-xxs">{Math.round(rate)} €/ mois</small>
            </>
        );
    } else {
        return (
            <>
                <small className="text-xxs">{Math.round(rate).toLocaleString('fr-FR').replace(/\s/g, '.')} €/ an</small>
            </>
        );
    }
};