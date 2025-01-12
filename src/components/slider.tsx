"use client";

import { useState } from "react";
import { Project } from "@/components/project";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export function Slider({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;

  const handleNext = () => {
    if (currentIndex < projects.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full p-6 bg-[#254e7a] shadow-lg">
      {/* Buttons */}
      <button
        onClick={handlePrev}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#5584b0] text-white p-2 rounded-full ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#254e7a]"
        }`}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#5584b0] text-white p-2 rounded-full ${
          currentIndex >= projects.length - itemsPerView
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#254e7a]"
        }`}
      >
        &gt;
      </button>

      {/* Slider */}
      <div className="flex w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(projects.length / itemsPerView) * 100}%`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-1/3 px-4 flex-shrink-0"
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({
          length: projects.length - itemsPerView + 1,
        }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 cursor-pointer rounded-full ${
              index === currentIndex
                ? "bg-[#254e7a]"
                : "bg-[#81c2e6] hover:bg-[#5584b0]"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
