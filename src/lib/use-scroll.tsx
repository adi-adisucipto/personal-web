'use client';

import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react";

export function useFramerScroll(threshold:number) {
    const {scrollY} = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > threshold)
    })

    return scrolled
}