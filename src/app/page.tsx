"use client";
import React, { useState } from "react";
import RESUME_DATA_EN from "@/data/resume-data-en";
import RESUME_DATA_DE from "@/data/resume-data-de";
import AnimatedHeader from "@/components/animated-header";
import ScrollProgress from "@/components/scroll-progress";
import Education from "@/components/education";
import WorkExperience from "@/components/workexperience";
import Skill from "@/components/skill";
import ProjectSwiper from "@/components/project-swiper";
import CertificateSwiper from "@/components/certificate-swiper";
import Navigation from "@/components/navigation";
import ScrollToTop from "@/components/scroll-to-top";
import ContactForm from "@/components/contact-form";
import ProfessionalPDFExport from "@/components/professional-pdf-export";
import Footer from "@/components/footer";
import { generateJsonLd } from "@/lib/seo";

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
    contact: language === "de" ? "Kontakt" : "Contact",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(language),
        }}
      />
      
      <div className="min-h-screen bg-[#cbe3ef] dark:bg-gray-900 text-[#254e7a] dark:text-gray-100 transition-colors duration-300 pt-20">
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Navigation */}
        <Navigation language={language} onLanguageChange={setLanguage} />

        {/* Header Section */}
        <section id="header" className="section-padding shadow-lg bg-[#254e7a] dark:bg-gray-800 text-[#cbe3ef] dark:text-gray-100">
          <div className="max-w-6xl mx-auto">
            <AnimatedHeader header={resumeData.header} language={language} />
          </div>
        </section>

      {/* Education Section */}
      <section id="education" className="section-padding shadow-lg text-[#254e7a] dark:text-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.education}</h2>
          <Education education={[...resumeData.education]} />
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="section-padding shadow-lg bg-[#254e7a] dark:bg-gray-800 text-[#cbe3ef] dark:text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitles.workExperience}</h2>
          <WorkExperience workExperienceList={[...resumeData.work]} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding shadow-lg text-[#254e7a] dark:text-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.skills}</h2>
          <Skill SkillList={[...resumeData.skills]} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding shadow-lg bg-[#254e7a] dark:bg-gray-800 text-[#cbe3ef] dark:text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitles.projects}</h2>
          <ProjectSwiper projects={resumeData.projects.map(project => ({
            ...project,
            techStack: [...project.techStack],
          }))} />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding shadow-lg text-[#254e7a] dark:text-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.certificates}</h2>
          <CertificateSwiper certificates={[...resumeData.certificates]} />
        </div>
      </section>

      {/* Contact Section 
      <section id="contact" className="section-padding shadow-lg bg-[#254e7a] dark:bg-gray-800 text-[#cbe3ef] dark:text-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitles.contact}</h2>
          
          <ContactForm language={language} />

          {/* PDF Export Button
          <div className="mt-8 flex justify-center">
            <ProfessionalPDFExport resumeData={resumeData} language={language} />
          </div> 
        </div>
      </section>*/}

      {/* Footer */}
      <section className="px-6 py-4 shadow-lg bg-[#254e7a] dark:bg-gray-900 text-[#cbe3ef] dark:text-gray-100">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </>
  );
}
