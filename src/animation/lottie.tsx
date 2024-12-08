"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

// Define the component props
type LottieComponentProps = {
  width: number;
  height: number;
  imagePath: string;
}

export default function LottieComponent ({width = 0, height =0, imagePath}: LottieComponentProps) : JSX.Element {
  const animationContainer = useRef<HTMLDivElement | null>(null); // Add proper typing

  useEffect(() => {
    if (animationContainer.current) {
      // Load the Lottie animation
      const animation = lottie.loadAnimation({
        container: animationContainer.current, // The DOM element where animation will be rendered
        renderer: "svg", // Rendering mode: SVG (can also use "canvas" or "html")
        loop: true, // Loop the animation
        autoplay: true, // Start animation automatically
        path: imagePath, // Path to your JSON file (adjust the path if necessary)
      });

      // Cleanup the animation when the component unmounts
      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{
        width: `${width === 0 ? "100%" : width}px`,
        height: `${height === 0 ? "100%" : height}px`,
      }}
    />
  );
};

