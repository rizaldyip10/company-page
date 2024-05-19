"use client";

import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

interface AnimationWrapperProps {
    children: React.ReactNode;
    initial?: object;
    animate?: object;
    transition?: object;
    classname?: string;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
    children,
    initial = { opacity: 0 },
    animate = { opacity: 1 },
    transition = { duration: 1 },
    classname
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current!);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={initial}
                animate={inView ? animate : initial}
                transition={transition}
                className={classname}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimationWrapper;
