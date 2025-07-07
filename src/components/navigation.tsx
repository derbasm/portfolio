"use client";
import React, { useState, useEffect, useMemo } from "react";
import { FaHome, FaGraduationCap, FaBriefcase, FaCogs, FaProjectDiagram, FaCertificate, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

interface NavigationProps {
  language: "de" | "en";
  onLanguageChange: (lang: "de" | "en") => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("header");
  const [isDark, setIsDark] = useState(false);

  const navItems = useMemo((): Record<"de" | "en", NavItem[]> => ({
    de: [
      { id: "header", label: "Startseite", icon: FaHome },
      { id: "education", label: "Ausbildung", icon: FaGraduationCap },
      { id: "work", label: "Berufserfahrung", icon: FaBriefcase },
      { id: "skills", label: "Fähigkeiten", icon: FaCogs },
      { id: "projects", label: "Projekte", icon: FaProjectDiagram },
      { id: "certificates", label: "Zertifikate", icon: FaCertificate },
      { id: "contact", label: "Kontakt", icon: FaEnvelope },
    ],
    en: [
      { id: "header", label: "Home", icon: FaHome },
      { id: "education", label: "Education", icon: FaGraduationCap },
      { id: "work", label: "Work Experience", icon: FaBriefcase },
      { id: "skills", label: "Skills", icon: FaCogs },
      { id: "projects", label: "Projects", icon: FaProjectDiagram },
      { id: "certificates", label: "Certificates", icon: FaCertificate },
      { id: "contact", label: "Contact", icon: FaEnvelope },
    ],
  }), []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Theme detection
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    // Scroll detection for active section
    const handleScroll = () => {
      const sections = navItems[language].map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [language, navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#254e7a]/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Navigation Links */}
          <div className="flex-1 min-w-0">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems[language].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-[#cbe3ef] text-[#254e7a] shadow-md"
                        : "text-[#cbe3ef] hover:bg-[#5584b0] hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Mobile Navigation - Scrollable */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 pb-1 pr-4" style={{ minWidth: "max-content" }}>
                {navItems[language].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-[#cbe3ef] text-[#254e7a]"
                          : "text-[#cbe3ef] hover:bg-[#5584b0]"
                      }`}
                      title={item.label}
                    >
                      <Icon size={16} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Controls - Theme Toggle & Language Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-2 sm:ml-4 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#5584b0] hover:bg-[#cbe3ef] text-[#cbe3ef] hover:text-[#254e7a] transition-all duration-200"
              aria-label={isDark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
            >
              {isDark ? <FaSun size={14} className="sm:w-4 sm:h-4" /> : <FaMoon size={14} className="sm:w-4 sm:h-4" />}
            </button>

            {/* Language Switcher */}
            <div className="flex">
              <button
                onClick={() => onLanguageChange("de")}
                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-l-md transition-all duration-200 ${
                  language === "de" 
                    ? "bg-[#cbe3ef] text-[#254e7a] shadow-md" 
                    : "bg-[#5584b0] text-[#cbe3ef] hover:bg-[#cbe3ef] hover:text-[#254e7a]"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-r-md transition-all duration-200 ${
                  language === "en" 
                    ? "bg-[#cbe3ef] text-[#254e7a] shadow-md" 
                    : "bg-[#5584b0] text-[#cbe3ef] hover:bg-[#cbe3ef] hover:text-[#254e7a]"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
