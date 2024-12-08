"use client"
import { motion, TargetAndTransition, Target, Variant, Transition } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 , x: 0},
  transition = { duration: 1 },
  threshold = 0.2,
  className,
}: ScrollAnimationProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, threshold]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={hasAnimated ? animate : initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};
