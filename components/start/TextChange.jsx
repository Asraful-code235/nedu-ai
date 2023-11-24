"use client";
import { useEffect, useState } from "react";

export default function TextChange() {
  const texts = ["job searching", "recruiting", "learning"]; // Array of texts to loop through
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textLoopInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textLoopInterval);
  }, [texts.length]);
  return (
    <div className="text-darkYellow">
      <span className={isVisible ? "fade-in-down" : ""}>
        {texts[currentTextIndex]}
      </span>
    </div>
  );
}
