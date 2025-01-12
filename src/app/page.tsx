"use client";
import React, { useState } from "react";
import RESUME_DATA_EN  from "@/data/resume-data-en";
import RESUME_DATA_DE  from "@/data/resume-data-de";
import Header from "@/components/header";
import Education from "@/components/education";
import WorkExperience from "@/components/workexperience";
import Skill from "@/components/skill";
import Slider from "@/components/slider";
import Certificate from "@/components/cetrtificate";
import LanguageSwitcher from "@/components/languageswitcher";

export default function Home() {
  // Zustand für die aktuelle Sprache
  const [language, setLanguage] = useState<"de" | "en">("de");

  // Daten basierend auf der ausgewählten Sprache
  const resumeData = language === "de" ? RESUME_DATA_DE : RESUME_DATA_EN;

  return (
    <div className="min-h-screen bg-[#cbe3ef] text-[#254e7a]">
      {/* Sprachumschalter */}
      <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

      {/* Hauptinhalt */}
      <Header resumeData={resumeData} />
      <Education education={resumeData.education} />
      <WorkExperience workExperienceList={resumeData.work} />
      <Skill SkillList={resumeData.skills} />
      <Slider projects={resumeData.projects} />
      <Certificate certificate={resumeData.certificates} />
    </div>
  );
}
