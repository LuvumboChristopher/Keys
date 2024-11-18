'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const withInViewAnimation = (Component) => {
    return function InViewComponent(props) {
        const [isVisible, setIsVisible] = useState(false);
        const elementRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            }, {
                threshold: 0.1,
            });

            const element = elementRef.current;
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }, []);

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
