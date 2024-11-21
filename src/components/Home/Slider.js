"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            ImageSrc: "https://via.placeholder.com/1472x600.png?text=Image+1",
            link: "https://www.example.com/1",
        },
        {
            ImageSrc: "https://via.placeholder.com/1472x600.png?text=Image+2",
            link: "https://www.example.com/2",
        },
        {
            ImageSrc: "https://via.placeholder.com/1472x600.png?text=Image+3",
            link: "https://www.example.com/3",
        },
        {
            ImageSrc: "https://via.placeholder.com/1472x600.png?text=Image+4",
            link: "https://www.example.com/4",
        },
    ];


    

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative  z-10">
            
            <div className="slider-container relative block overflow-hidden ">
                <div
                    className="slider-list relative touch-pan-y select-none transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="slick-slide flex-shrink-0 w-full transition-opacity duration-500"
                            >
                                <div className="w-full inline-block overflow-hidden h-[380px] relative">
                                    <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                                        <Image
                                           layout="responsive"
                                           width={16}
                                           height={9} 
                                            loading="lazy"
                                            alt={`Slider Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            src={slide.ImageSrc}
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                    {slides.map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            onClick={() => handleDotClick(dotIndex)}
                            className={`cursor-pointer w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${dotIndex === currentSlide ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
