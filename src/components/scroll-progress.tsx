"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Call once to set initial value

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-700">
      <motion.div
        className="h-full bg-gradient-to-r from-[#254e7a] to-[#5584b0]"
        style={{
          width: `${scrollProgress * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </div>
  );
};

export default ScrollProgress;
