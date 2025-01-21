"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const withInViewAnimation = (Component) => {
    return function InViewComponent(props) {
        const [isVisible, setIsVisible] = useState(false);
        const [isLargeScreen, setIsLargeScreen] = useState(false);
        const elementRef = useRef(null);

        useEffect(() => {
            const updateScreenSize = () => {
                setIsLargeScreen(window.innerWidth >= 1024);
            };

            updateScreenSize();
            window.addEventListener("resize", updateScreenSize);

            return () => {
                window.removeEventListener("resize", updateScreenSize);
            };
        }, []);

        useEffect(() => {
            if (!isLargeScreen) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setIsVisible(entry.isIntersecting);
                    });
                },
                { threshold: 0.1 }
            );

            const element = elementRef.current;
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }, [isLargeScreen]);

        if (!isLargeScreen) {
            return <Component {...props} />;
        }

        return (
            <motion.div
                ref={elementRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6 }}
            >
                <Component {...props} />
            </motion.div>
        );
    };
};

export default withInViewAnimation;
