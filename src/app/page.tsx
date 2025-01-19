"use client";
import React, { useState } from "react";
import RESUME_DATA_EN from "@/data/resume-data-en";
import RESUME_DATA_DE from "@/data/resume-data-de";
import Header from "@/components/header";
import Education from "@/components/education";
import WorkExperience from "@/components/workexperience";
import Skill from "@/components/skill";
import Slider from "@/components/slider";
import Certificate from "@/components/certificate";
import LanguageSwitcher from "@/components/languageswitcher";

export default function Home() {
  // Zustand für die aktuelle Sprache
  const [language, setLanguage] = useState<"de" | "en">("de");

  // Daten basierend auf der ausgewählten Sprache
  const resumeData = language === "de" ? RESUME_DATA_DE : RESUME_DATA_EN;

  // Überschriften basierend auf der Sprache
  const sectionTitles = {
    education: language === "de" ? "Ausbildung" : "Education",
    workExperience: language === "de" ? "Berufserfahrung" : "Work Experience",
    skills: language === "de" ? "Fähigkeiten" : "Skills",
    projects: language === "de" ? "Projekte" : "Projects",
    certificates: language === "de" ? "Zertifikate" : "Certificates",
  };

  return (
    <div className="min-h-screen bg-[#cbe3ef] text-[#254e7a]">
      {/* Sprachumschalter */}
      <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

      {/* Hauptinhalt */}
      <section className="p-6 shadow-lg bg-[#254e7a] text-[#cbe3ef]">
        <Header header={resumeData.header}/>
      </section>

      <section className="p-6 shadow-lg text-[#254e7a]">
        <h2 className="text-2xl font-bold mb-6">{sectionTitles.education}</h2>
        <Education education={[...resumeData.education]} />

      </section>

      <section className="p-6 shadow-lg bg-[#254e7a] text-[#cbe3ef]">
        <h2 className="text-2xl font-bold mb-6">{sectionTitles.workExperience}</h2>
        <WorkExperience workExperienceList={[...resumeData.work]} />
      </section>

      <section className="p-6 shadow-lg text-[#254e7a]">
        <h2 className="text-2xl font-bold mb-6">{sectionTitles.skills}</h2>
        <Skill SkillList={[...resumeData.skills]} />
      </section>

      <section className="p-6 shadow-lg bg-[#254e7a] text-[#cbe3ef]">
        <h2 className="text-2xl font-bold mb-6">{sectionTitles.projects}</h2>
        <Slider projects={resumeData.projects.map(project => ({
          ...project,
          techStack: [...project.techStack],
        }))} />
      </section>

      <section className="p-6 shadow-lg text-[#254e7a]">
        <h2 className="text-2xl font-bold mb-6">{sectionTitles.certificates}</h2>
        <Certificate certificate={[...resumeData.certificates]} />
      </section>
    </div>
  );
}
