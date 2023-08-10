'use client'

import React from "react";
import { useRef } from "react";
import { m, useInView, MotionProps } from "framer-motion";

type InViewWrapperProps = {
    children: React.ReactNode;
    whenInView?: MotionProps["animate"];
    whenNotInView?: MotionProps["animate"];
    // Define other props specific to InViewWrapper here
} & MotionProps; // Combine with the MotionProps type

export default function InViewWrapper({ children, whenInView, whenNotInView, ...props }: InViewWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <m.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? whenInView : whenNotInView}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            {...props} // Spread the props
        >
            {children}
        </m.div>
    );
}
