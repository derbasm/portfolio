"use client";
import React from "react";

interface LanguageSwitcherProps {
  currentLanguage: "de" | "en";
  onLanguageChange: (lang: "de" | "en") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={() => onLanguageChange("de")}
        className={`px-4 py-2 rounded-l-md ${
          currentLanguage === "de" ? "bg-[#5584b0] text-white" : "bg-gray-200 text-[#254e7a]"
        }`}
      >
        Deutsch
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-4 py-2 rounded-r-md ${
          currentLanguage === "en" ? "bg-[#5584b0] text-white" : "bg-gray-200 text-[#254e7a]"
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
