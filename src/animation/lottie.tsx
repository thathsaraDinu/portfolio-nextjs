import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

// Define the component props
type LottieComponentProps = {
  width: number;
  height: number;
  imagePath: string;
};

export default function LottieComponent({
  width = 0,
  height = 0,
  imagePath,
}: LottieComponentProps): JSX.Element {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility for lazy loading

  // Lazy load with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the component enters the viewport
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = animationContainer.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible && animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: imagePath,
      });

      // Cleanup the animation when the component unmounts
      return () => {
        animation.destroy();
      };
    }
  }, [isVisible, imagePath]);

  return (
    <div
      ref={animationContainer}
      style={{
        width: `${width === 0 ? "100%" : width}px`,
        height: `${height === 0 ? "100%" : height}px`,
        opacity: isVisible ? 1 : 0, // Optionally fade in when animation is visible
      }}
    />
  );
}
