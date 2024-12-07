"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieComponent = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null); // Add proper typing

  useEffect(() => {
    if (animationContainer.current) {
      // Load the Lottie animation
      const animation = lottie.loadAnimation({
        container: animationContainer.current, // The DOM element where animation will be rendered
        renderer: "svg", // Rendering mode: SVG (can also use "canvas" or "html")
        loop: true, // Loop the animation
        autoplay: true, // Start animation automatically
        path: "/images/Animation - 1733577247536.json", // Path to your JSON file (adjust the path if necessary)
      });

      // Cleanup the animation when the component unmounts
      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <div ref={animationContainer} style={{ width: "300px", height: "300px" }} />
  );
};

export default LottieComponent;
