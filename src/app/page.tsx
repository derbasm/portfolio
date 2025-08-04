"use client";
import React, { useState, useMemo, lazy, Suspense } from "react";
import RESUME_DATA_EN from "@/data/resume-data-en";
import RESUME_DATA_DE from "@/data/resume-data-de";
import AnimatedHeader from "@/components/animated-header";
import ScrollProgress from "@/components/scroll-progress";
import Education from "@/components/education";
import WorkExperience from "@/components/workexperience";
import Skill from "@/components/skill";
import Languages from "@/components/languages";
import Navigation from "@/components/navigation";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/components/footer";
import { generateJsonLd } from "@/lib/seo";
import { SECTION_CLASSES } from "@/lib/constants";
import type { LanguageCode, ResumeData } from "@/types/resume";

// Lazy Load schwerer Komponenten
const ProjectSwiper = lazy(() => import("@/components/project-swiper"));
const CertificateSwiper = lazy(() => import("@/components/certificate-swiper"));

// Loading Komponente
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#254e7a] dark:border-[#cbe3ef]"></div>
  </div>
);

export default function Home() {
  // Zustand für die aktuelle Sprache
  const [language, setLanguage] = useState<LanguageCode>("de");

  // Memoized Resume-Daten für bessere Performance
  const resumeData: ResumeData = useMemo(() => 
    language === "de" ? RESUME_DATA_DE : RESUME_DATA_EN, 
    [language]
  );

  // Memoized Überschriften
  const sectionTitles = useMemo(() => ({
    education: language === "de" ? "Ausbildung" : "Education",
    workExperience: language === "de" ? "Berufserfahrung" : "Work Experience", 
    skills: language === "de" ? "Fähigkeiten" : "Skills",
    languages: language === "de" ? "Sprachen" : "Languages",
    projects: language === "de" ? "Projekte" : "Projects",
    certificates: language === "de" ? "Zertifikate" : "Certificates",
  }), [language]);

  // Memoized JSON-LD
  const jsonLd = useMemo(() => generateJsonLd(language), [language]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
      />
      
      <div className="min-h-screen bg-[#cbe3ef] dark:bg-gray-900 text-[#254e7a] dark:text-gray-100 transition-colors duration-300 pt-20">
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Navigation */}
        <Navigation language={language} onLanguageChange={setLanguage} />

        {/* Header Section */}
        <section id="header" className={SECTION_CLASSES.DARK}>
          <div className="max-w-6xl mx-auto">
            <AnimatedHeader header={resumeData.header} />
          </div>
        </section>

      {/* Education Section */}
      <section id="education" className={SECTION_CLASSES.LIGHT}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.education}</h2>
          <Education education={[...resumeData.education]} />
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className={SECTION_CLASSES.DARK}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitles.workExperience}</h2>
          <WorkExperience workExperienceList={[...resumeData.work]} />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={SECTION_CLASSES.LIGHT}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.skills}</h2>
          <Skill SkillList={[...resumeData.skills]} />
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className={SECTION_CLASSES.DARK}>
        <div className="max-w-6xl mx-auto">
          <Languages languages={[...resumeData.languages]} currentLanguage={language} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={SECTION_CLASSES.LIGHT}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">{sectionTitles.projects}</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectSwiper projects={resumeData.projects.map(project => ({
              ...project,
              techStack: [...project.techStack],
            }))} />
          </Suspense>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className={SECTION_CLASSES.DARK}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{sectionTitles.certificates}</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <CertificateSwiper certificates={[...resumeData.certificates]} />
          </Suspense>
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
      <section className={SECTION_CLASSES.FOOTER}>
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
