"use client"

import { motion, Target, Transition } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  initial?: Target; // Defines the hidden state
  animate?: Target; // Defines the visible state
  transition?: Transition; // Defines the animation transitions
  threshold?: number; // Threshold for Intersection Observer
  className?: string;
}

export const ScrollAnimation = ({
  children,
  initial = { opacity: 0, y: 0, scale: 1 },
  animate = { opacity: 1, y: 0, x: 0, scale: 1 },
  transition = { duration: 1 },
  className,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
    ref={ref}
      whileInView={animate}
      viewport={{ once: true }}
      initial={initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
