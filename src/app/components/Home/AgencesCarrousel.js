"use client";
import { useState, useEffect, useRef } from "react";
import { useSearch } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { FaBuilding } from "react-icons/fa";
import { agencies } from "@/app/utils/agencies";

const AgenciesByLocation = () => {
    const { setLocation, handleSearch } = useSearch();
    const router = useRouter();

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isIntersecting = entry.isIntersecting;

                    if (entry.target === elementRef1.current) {
                        setIsVisible1(isIntersecting);
                    }

                    if (entry.target === elementRef2.current) {
                        setIsVisible2(isIntersecting);
                    }
                });
            },
            { threshold: 0.1 }
        );
        const element1 = elementRef1.current;
        const element2 = elementRef2.current;
        if (element1) observer.observe(element1);
        if (element2) observer.observe(element2);
        return () => {
            if (element1) observer.unobserve(element1);
            if (element2) observer.unobserve(element2);
        };
    }, []);

    return (
        <section>
            <div className="pt-6">
                <div
                    className="flex w-full animate-scroll"
                    style={{
                        display: "flex",
                        width: "max-content",
                        animation: "scroll 50s linear infinite",
                    }}
                >
                    {[...agencies, ...agencies].map((agency, index) => (
                        <div key={index} className="w-max group overflow-hidden cursor-pointer mx-6 border-l pl-6">
                            <div className="flex w-full justify-start">
                                <div className="w-full mx-auto text-left">
                                    <h1 className="flex items-center gap-1 pb-3 text-black text-sm md:text-md font-semibold transition-all duration-300 text-shadow-sm">
                                        <FaBuilding className="inline-block mr-2 text-md md:text-base" /> 
                                        Agence de {agency.name}
                                    </h1>
                                    <div className="text-black text-xs sm:text-sm">
                                        <a
                                            href={agency.mapLink}
                                            target="_blank"
                                            className="w-max inline-block hover:text-yellow-500"
                                        >
                                            {agency.address}
                                        </a><br />
                                        <a
                                            href={agency.phoneLink}
                                            target="_blank"
                                            className="w-max inline-block hover:text-yellow-500"
                                        >
                                            {agency.phone}
                                        </a><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default AgenciesByLocation;
